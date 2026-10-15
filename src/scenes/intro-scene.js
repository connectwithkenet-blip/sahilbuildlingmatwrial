import * as THREE from 'three';
import gsap from 'gsap';
import { getBrickTexture } from '../lib/materials-procedural.js';

/**
 * Scene 1: Cinematic Intro Animation
 * 60-80 individual bricks fall with staggered timing, bounce, and lock into a running bond wall.
 * Camera dollies & orbits, brand reveals, then transitions to hero.
 */
export class IntroScene {
  constructor(onCompleteCallback) {
    this.onComplete = onCompleteCallback;
    this.group = new THREE.Group();
    this.dustPuffs = [];
    this.timeline = null;
    this.isDisposed = false;
  }

  init(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.scene.add(this.group);

    // Initial camera position (low and wide)
    this.camera.position.set(-6, 1.2, 8);
    this.camera.lookAt(0, 1.2, 0);

    this.createFallingBrickWall();
    this.startIntroSequence();
  }

  createFallingBrickWall() {
    const brickW = 0.92;
    const brickH = 0.30;
    const brickD = 0.44;

    const rows = 8;
    const cols = 9;
    const totalBricks = rows * cols; // 72 bricks (within 60 to 80 range)

    const brickGeo = new THREE.BoxGeometry(brickW, brickH, brickD);
    const brickMat = new THREE.MeshStandardMaterial({
      map: getBrickTexture(),
      roughness: 0.88,
      metalness: 0.05
    });

    this.instancedWall = new THREE.InstancedMesh(brickGeo, brickMat, totalBricks);
    this.instancedWall.castShadow = true;
    this.instancedWall.receiveShadow = true;
    this.group.add(this.instancedWall);

    this.brickData = [];
    const dummy = new THREE.Object3D();

    let idx = 0;
    const startX = -((cols - 1) * (brickW + 0.02)) / 2;

    // Slight terracotta color variations per instance
    const baseColor = new THREE.Color(0xB23A24);
    const altColor1 = new THREE.Color(0x9E301D);
    const altColor2 = new THREE.Color(0xC74931);

    for (let r = 0; r < rows; r++) {
      const rowOffset = (r % 2) * (brickW / 2); // Running bond stagger
      const targetY = r * (brickH + 0.02) + brickH / 2;

      for (let c = 0; c < cols; c++) {
        const targetX = startX + c * (brickW + 0.02) + rowOffset;
        const targetZ = 0;

        // Brick starts high up in the sky with randomized stagger
        const startY = 9 + Math.random() * 5 + (rows - r) * 0.5;
        const startRotY = (Math.random() - 0.5) * 0.8;
        const startRotZ = (Math.random() - 0.5) * 0.6;

        this.brickData.push({
          index: idx,
          currentX: targetX,
          currentY: startY,
          currentZ: targetZ,
          targetX,
          targetY,
          targetZ,
          rotX: 0,
          rotY: startRotY,
          rotZ: startRotZ,
          landed: false
        });

        // Set instance color variation
        const rnd = Math.random();
        const color = rnd < 0.33 ? baseColor : (rnd < 0.66 ? altColor1 : altColor2);
        this.instancedWall.setColorAt(idx, color);

        dummy.position.set(targetX, startY, targetZ);
        dummy.rotation.set(0, startRotY, startRotZ);
        dummy.updateMatrix();
        this.instancedWall.setMatrixAt(idx, dummy.matrix);

        idx++;
      }
    }

    this.instancedWall.instanceColor.needsUpdate = true;
    this.instancedWall.instanceMatrix.needsUpdate = true;
  }

  startIntroSequence() {
    this.timeline = gsap.timeline({
      onComplete: () => {
        this.finishIntro();
      }
    });

    const dummy = new THREE.Object3D();

    // 1. Staggered falling brick animation with back.out elastic bounce
    this.brickData.forEach((b, i) => {
      const delay = 0.03 * i + (Math.random() * 0.15);

      this.timeline.to(b, {
        currentY: b.targetY,
        rotY: 0,
        rotZ: 0,
        duration: 0.85,
        ease: 'back.out(1.4)',
        delay: delay,
        onUpdate: () => {
          dummy.position.set(b.currentX, b.currentY, b.currentZ);
          dummy.rotation.set(b.rotX, b.rotY, b.rotZ);
          dummy.updateMatrix();
          this.instancedWall.setMatrixAt(b.index, dummy.matrix);
          this.instancedWall.instanceMatrix.needsUpdate = true;
        },
        onComplete: () => {
          b.landed = true;
          this.triggerDustPuff(b.targetX, b.targetY, b.targetZ);
        }
      }, 0);
    });

    // 2. Camera slow dolly and orbit around the wall
    this.timeline.to(this.camera.position, {
      x: 0,
      y: 2.2,
      z: 6.8,
      duration: 3.2,
      ease: 'power2.inOut',
      onUpdate: () => {
        this.camera.lookAt(0, 1.4, 0);
      }
    }, 0);

    // 3. Brand Text Reveal in UI Overlay
    const titleEl = document.querySelector('.intro-title');
    const taglineEl = document.querySelector('.intro-tagline');
    const progressBar = document.querySelector('.intro-progress-bar');

    if (progressBar) {
      this.timeline.to(progressBar, {
        width: '100%',
        duration: 3.5,
        ease: 'linear'
      }, 0);
    }

    if (titleEl) {
      this.timeline.to(titleEl, {
        y: '0%',
        duration: 1.0,
        ease: 'power3.out'
      }, 2.0);
    }

    if (taglineEl) {
      this.timeline.to(taglineEl, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, 2.4);
    }

    // 4. Camera push through the wall towards hero transition
    this.timeline.to(this.camera.position, {
      z: 4.8,
      duration: 0.8,
      ease: 'power2.in'
    }, 3.8);
  }

  triggerDustPuff(x, y, z) {
    if (this.dustPuffs.length > 25) return; // Cap simultaneous puffs
    const puffGeo = new THREE.SphereGeometry(0.08, 6, 6);
    const puffMat = new THREE.MeshBasicMaterial({
      color: 0xEAD8C2,
      transparent: true,
      opacity: 0.65
    });
    const puff = new THREE.Mesh(puffGeo, puffMat);
    puff.position.set(x, y + 0.1, z);
    this.group.add(puff);
    this.dustPuffs.push(puff);

    gsap.to(puff.scale, {
      x: 2.5,
      y: 1.8,
      z: 2.5,
      duration: 0.45,
      ease: 'power1.out'
    });
    gsap.to(puffMat, {
      opacity: 0,
      duration: 0.45,
      ease: 'power1.out',
      onComplete: () => {
        this.group.remove(puff);
        puffGeo.dispose();
        puffMat.dispose();
        const idx = this.dustPuffs.indexOf(puff);
        if (idx !== -1) this.dustPuffs.splice(idx, 1);
      }
    });
  }

  skip() {
    if (this.timeline) {
      this.timeline.kill();
    }
    this.finishIntro();
  }

  finishIntro() {
    sessionStorage.setItem('sahil_intro_seen', 'true');
    const introOverlay = document.getElementById('cinematic-intro');
    if (introOverlay) {
      introOverlay.classList.add('intro-hidden');
    }

    if (typeof this.onComplete === 'function') {
      this.onComplete();
    }
  }

  update(delta, time, pointer) {
    // Subtle breathing camera drift while intro completes
    if (this.camera && !this.isDisposed) {
      this.camera.position.x += (pointer.x * 0.4 - this.camera.position.x * 0.05) * 0.02;
    }
  }

  dispose() {
    this.isDisposed = true;
    if (this.timeline) this.timeline.kill();
    if (this.scene && this.group) {
      this.scene.remove(this.group);
    }
    if (this.instancedWall) {
      this.instancedWall.geometry.dispose();
      this.instancedWall.material.dispose();
    }
  }
}
