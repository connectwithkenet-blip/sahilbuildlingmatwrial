import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { getDeviceTier } from './device-tier.js';
import { getStudioFloorTexture } from './materials-procedural.js';

/**
 * Global Three.js Scene Setup & Postprocessing Pipeline
 */
export class GlobalThreeManager {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.tier = getDeviceTier();
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.isRendering = true;
    this.currentSceneObject = null; // Currently active page scene

    this.initRenderer();
    this.initSceneAndLighting();
    this.initPostprocessing();
    this.initStudioFloorAndParticles();
    this.initEventListeners();
    this.startRenderLoop();
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: !this.tier.isMobile,
      powerPreference: 'high-performance',
      alpha: false
    });

    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(this.tier.dpr);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    if (this.tier.enableShadows) {
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }

    // Default Camera
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 100);
    this.camera.position.set(0, 2.5, 9);
  }

  initSceneAndLighting() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x181715); // Charcoal tone
    this.scene.fog = new THREE.FogExp2(0x181715, 0.024);

    // Procedural RoomEnvironment for PMREM metallic reflections
    const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
    pmremGenerator.compileEquirectangularShader();
    const envScene = new RoomEnvironment();
    this.scene.environment = pmremGenerator.fromScene(envScene).texture;
    pmremGenerator.dispose();

    // 1. Warm Key Directional Light from upper left
    this.keyLight = new THREE.DirectionalLight(0xFFD9A0, 2.2);
    this.keyLight.position.set(-6, 12, 7);
    this.keyLight.castShadow = this.tier.enableShadows;
    if (this.keyLight.castShadow) {
      this.keyLight.shadow.mapSize.width = this.tier.shadowMapSize;
      this.keyLight.shadow.mapSize.height = this.tier.shadowMapSize;
      this.keyLight.shadow.camera.near = 0.5;
      this.keyLight.shadow.camera.far = 30;
      this.keyLight.shadow.camera.left = -8;
      this.keyLight.shadow.camera.right = 8;
      this.keyLight.shadow.camera.top = 8;
      this.keyLight.shadow.camera.bottom = -8;
      this.keyLight.shadow.bias = -0.0005;
      this.keyLight.shadow.radius = 2.5;
    }
    this.scene.add(this.keyLight);

    // 2. Cool Fill Light from right
    this.fillLight = new THREE.DirectionalLight(0x9EB8D9, 0.5);
    this.fillLight.position.set(8, 4, -3);
    this.scene.add(this.fillLight);

    // 3. Hemisphere Ambient
    this.hemiLight = new THREE.HemisphereLight(0xFFF1DB, 0x2D2B28, 0.65);
    this.scene.add(this.hemiLight);

    // 4. Subtle Yellow Rim Light from behind
    this.rimLight = new THREE.DirectionalLight(0xF5B800, 1.4);
    this.rimLight.position.set(0, 6, -9);
    this.scene.add(this.rimLight);
  }

  initPostprocessing() {
    this.composer = new EffectComposer(this.renderer);
    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);

    // Subtle Bloom on highlights (disabled on low-end/mobile)
    if (this.tier.enableBloom) {
      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(this.width, this.height),
        0.35, // strength
        0.4,  // radius
        0.88  // threshold
      );
      this.composer.addPass(bloomPass);
    }

    // Custom Vignette & Fine Film Grain Shader
    const grainVignetteShader = {
      uniforms: {
        tDiffuse: { value: null },
        time: { value: 0.0 },
        vignetteStrength: { value: 0.75 },
        grainIntensity: { value: 0.045 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float time;
        uniform float vignetteStrength;
        uniform float grainIntensity;
        varying vec2 vUv;

        float random(vec2 p) {
          vec2 k1 = vec2(23.14069263277926, 2.665144142690225);
          return fract(cos(dot(p, k1)) * 12345.6789);
        }

        void main() {
          vec4 color = texture2D(tDiffuse, vUv);
          
          // Vignette
          vec2 uv = (vUv - 0.5) * 2.0;
          float vig = 1.0 - dot(uv, uv) * 0.28 * vignetteStrength;
          color.rgb *= clamp(vig, 0.0, 1.0);

          // Subtle film grain
          float grain = (random(vUv * 2.0 + fract(time * 0.1)) - 0.5) * grainIntensity;
          color.rgb += grain;

          gl_FragColor = color;
        }
      `
    };

    this.grainPass = new ShaderPass(grainVignetteShader);
    this.composer.addPass(this.grainPass);
  }

  initStudioFloorAndParticles() {
    // Charcoal Studio Floor with faint grid
    const floorGeo = new THREE.PlaneGeometry(60, 60);
    const floorMat = new THREE.MeshStandardMaterial({
      map: getStudioFloorTexture(),
      roughness: 0.9,
      metalness: 0.1
    });
    this.floor = new THREE.Mesh(floorGeo, floorMat);
    this.floor.rotation.x = -Math.PI / 2;
    this.floor.position.y = -0.01;
    this.floor.receiveShadow = true;
    this.scene.add(this.floor);

    // Floating Dust Particles in light beam
    const particleCount = Math.floor(180 * this.tier.particleCountMultiplier);
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = Math.random() * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 16;
      velocities.push({
        y: 0.003 + Math.random() * 0.004,
        x: (Math.random() - 0.5) * 0.002,
        z: (Math.random() - 0.5) * 0.002
      });
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xF5B800,
      size: 0.045,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });

    this.dustParticles = new THREE.Points(particleGeo, particleMat);
    this.particleVelocities = velocities;
    this.scene.add(this.dustParticles);
  }

  initEventListeners() {
    // Window Resize
    window.addEventListener('resize', () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;

      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(this.width, this.height);
      this.composer.setSize(this.width, this.height);
    });

    // Pause rendering when tab hidden or canvas invisible to save battery
    document.addEventListener('visibilitychange', () => {
      this.isRendering = !document.hidden;
    });

    // Mouse Pointer tracking for parallax
    this.pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    window.addEventListener('pointermove', (e) => {
      this.pointer.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      this.pointer.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // Device Gyroscope tilt on mobile if supported
    if (window.DeviceOrientationEvent && this.tier.isMobile) {
      window.addEventListener('deviceorientation', (e) => {
        if (e.gamma !== null && e.beta !== null) {
          this.pointer.targetX = Math.min(1, Math.max(-1, e.gamma / 30));
          this.pointer.targetY = Math.min(1, Math.max(-1, (e.beta - 45) / 30));
        }
      });
    }
  }

  setActiveScene(sceneInstance) {
    if (this.currentSceneObject && typeof this.currentSceneObject.dispose === 'function') {
      this.currentSceneObject.dispose();
    }
    this.currentSceneObject = sceneInstance;
    if (this.currentSceneObject && typeof this.currentSceneObject.init === 'function') {
      this.currentSceneObject.init(this.scene, this.camera);
    }
  }

  startRenderLoop() {
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      if (!this.isRendering) return;

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth mouse pointer damping
      this.pointer.x += (this.pointer.targetX - this.pointer.x) * 0.05;
      this.pointer.y += (this.pointer.targetY - this.pointer.y) * 0.05;

      // Animate floating dust particles
      if (this.dustParticles) {
        const pos = this.dustParticles.geometry.attributes.position;
        for (let i = 0; i < this.particleVelocities.length; i++) {
          let y = pos.getY(i) + this.particleVelocities[i].y;
          let x = pos.getX(i) + this.particleVelocities[i].x;
          let z = pos.getZ(i) + this.particleVelocities[i].z;

          if (y > 8.0) y = 0.1;
          pos.setXYZ(i, x, y, z);
        }
        pos.needsUpdate = true;
      }

      // Update shader uniform time
      if (this.grainPass && this.grainPass.uniforms.time) {
        this.grainPass.uniforms.time.value = time;
      }

      // Update current active scene
      if (this.currentSceneObject && typeof this.currentSceneObject.update === 'function') {
        this.currentSceneObject.update(delta, time, this.pointer);
      }

      this.composer.render();
    };

    animate();
  }
}
