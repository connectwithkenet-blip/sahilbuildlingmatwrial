/**
 * Sahil Building Material - 3D Interactive Intro Animation
 * Powered by Three.js
 * Assembles dynamic bricks, steel rebar grid, and ambient particles,
 * then smoothly transitions into the main website.
 */

(function () {
  const introContainer = document.getElementById('three-intro-container');
  const skipBtn = document.getElementById('skip-intro-btn');
  const mainSite = document.getElementById('main-site-content');

  if (!introContainer) return;

  // Check if WebGL is supported
  function isWebGLAvailable() {
    try {
      const canvas = document.createElement('canvas');
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
    } catch (e) {
      return false;
    }
  }

  function finishIntro() {
    if (introContainer.classList.contains('faded-out')) return;
    introContainer.classList.add('faded-out');
    document.body.classList.remove('intro-active');

    // Notify app that intro finished so scroll reveals work
    setTimeout(() => {
      introContainer.style.display = 'none';
      window.dispatchEvent(new CustomEvent('introCompleted'));
    }, 800);
  }

  if (skipBtn) {
    skipBtn.addEventListener('click', finishIntro);
  }

  if (!isWebGLAvailable() || typeof THREE === 'undefined') {
    // Immediate fallback
    finishIntro();
    return;
  }

  document.body.classList.add('intro-active');

  // --- Three.js Scene Setup ---
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xfaf9f6); // Off-white Beige for contrast
  scene.fog = new THREE.FogExp2(0xfaf9f6, 0.035);

  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.set(0, 5, 14);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  introContainer.appendChild(renderer.domElement);

  // --- Lighting ---
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xffeedd, 1.2);
  dirLight.position.set(10, 20, 15);
  dirLight.castShadow = true;
  dirLight.shadow.mapSize.width = 1024;
  dirLight.shadow.mapSize.height = 1024;
  scene.add(dirLight);

  const accentPointLight = new THREE.PointLight(0xd4b996, 2.5, 20); // Warm Beige glow
  accentPointLight.position.set(-4, 3, 3);
  scene.add(accentPointLight);

  const beigeSteelLight = new THREE.PointLight(0xc2a37b, 1.8, 20); // Darker Beige accent
  beigeSteelLight.position.set(4, 2, -2);
  scene.add(beigeSteelLight);

  // --- Ground Blueprint Grid ---
  const gridHelper = new THREE.GridHelper(30, 30, 0xd4b996, 0xe5e0d8);
  gridHelper.position.y = -1.2;
  scene.add(gridHelper);

  // --- Materials ---
  const brickMaterial = new THREE.MeshStandardMaterial({
    color: 0xc84c20, // Classic rich red terracotta brick
    roughness: 0.85,
    metalness: 0.1,
  });

  const cementJointMaterial = new THREE.MeshStandardMaterial({
    color: 0x94a3b8, // Light concrete cement
    roughness: 0.9,
    metalness: 0.05,
  });

  const steelMaterial = new THREE.MeshStandardMaterial({
    color: 0x64748b, // TMT steel rebar
    roughness: 0.35,
    metalness: 0.85,
  });

  const goldAccentMaterial = new THREE.MeshStandardMaterial({
    color: 0xf59e0b, // Warm gold
    roughness: 0.3,
    metalness: 0.7,
  });

  // --- Assembling Objects ---
  const group = new THREE.Group();
  scene.add(group);

  // 1. Brick wall assembly (24 bricks flying into a solid bond)
  const bricks = [];
  const brickGeo = new THREE.BoxGeometry(0.9, 0.4, 0.45);
  const rows = 4;
  const cols = 6;

  let brickIndex = 0;
  for (let r = 0; r < rows; r++) {
    const isOffset = r % 2 === 1;
    const startX = isOffset ? -2.25 : -2.5;
    const count = isOffset ? cols - 1 : cols;

    for (let c = 0; c < count; c++) {
      const mesh = new THREE.Mesh(brickGeo, brickMaterial);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      const targetX = startX + c * 0.95;
      const targetY = -1.0 + r * 0.46;
      const targetZ = 0;

      // Random starting position high up and scattered
      mesh.position.set(
        targetX + (Math.random() - 0.5) * 8,
        targetY + 8 + Math.random() * 6,
        targetZ + (Math.random() - 0.5) * 8
      );
      mesh.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );

      mesh.userData = {
        targetX,
        targetY,
        targetZ,
        delay: brickIndex * 0.05 + 0.2, // Staggered drops
        speed: 3.5 + Math.random() * 1.5,
        settled: false,
      };

      group.add(mesh);
      bricks.push(mesh);
      brickIndex++;
    }
  }

  // 2. Steel Rebars (Vertical & Horizontal reinforcing grid)
  const rebars = [];
  const rebarGeo = new THREE.CylinderGeometry(0.04, 0.04, 3.2, 12);

  for (let i = -2; i <= 2; i += 1) {
    const rebarMesh = new THREE.Mesh(rebarGeo, steelMaterial);
    rebarMesh.castShadow = true;
    const targetX = i * 1.1;
    const targetY = 0.5;
    const targetZ = 0.35;

    rebarMesh.position.set(targetX, -8 - Math.random() * 4, targetZ);
    rebarMesh.userData = {
      targetX,
      targetY,
      targetZ,
      delay: 0.1 + Math.abs(i) * 0.08,
      speed: 4.2,
    };
    group.add(rebarMesh);
    rebars.push(rebarMesh);
  }

  // 3. Central Brand Cornerstone / Emblem
  const emblemGeo = new THREE.BoxGeometry(1.6, 0.7, 0.55);
  const emblemMesh = new THREE.Mesh(emblemGeo, goldAccentMaterial);
  emblemMesh.castShadow = true;
  emblemMesh.position.set(0, 10, 0.25);
  emblemMesh.userData = {
    targetX: 0,
    targetY: 1.15,
    targetZ: 0.25,
    delay: 1.1,
    speed: 3.2,
  };
  group.add(emblemMesh);

  // 4. Construction Dust / Ambient Particles
  const particleCount = 120;
  const particleGeo = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    particlePositions[i] = (Math.random() - 0.5) * 16;
    particlePositions[i + 1] = Math.random() * 8 - 1;
    particlePositions[i + 2] = (Math.random() - 0.5) * 16;
  }

  particleGeo.setAttribute(
    'position',
    new THREE.BufferAttribute(particlePositions, 3)
  );

  const particleMat = new THREE.PointsMaterial({
    color: 0xf59e0b,
    size: 0.06,
    transparent: true,
    opacity: 0.75,
  });

  const particleSystem = new THREE.Points(particleGeo, particleMat);
  scene.add(particleSystem);

  // --- Animation State ---
  let startTime = performance.now();
  let animationFinished = false;
  let isTransitioning = false;

  const progressBar = document.getElementById('intro-progress-fill');

  function animate() {
    if (animationFinished) return;
    requestAnimationFrame(animate);

    const now = performance.now();
    const elapsed = (now - startTime) / 1000;

    // Update Progress Bar in UI (3.2 seconds total duration)
    const progress = Math.min((elapsed / 3.2) * 100, 100);
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    // 1. Animate Bricks
    bricks.forEach((b) => {
      if (elapsed > b.userData.delay) {
        const t = Math.min((elapsed - b.userData.delay) * 2.8, 1);
        b.position.x += (b.userData.targetX - b.position.x) * 0.18;
        b.position.y += (b.userData.targetY - b.position.y) * 0.18;
        b.position.z += (b.userData.targetZ - b.position.z) * 0.18;

        b.rotation.x += (0 - b.rotation.x) * 0.16;
        b.rotation.y += (0 - b.rotation.y) * 0.16;
        b.rotation.z += (0 - b.rotation.z) * 0.16;
      }
    });

    // 2. Animate Rebars
    rebars.forEach((r) => {
      if (elapsed > r.userData.delay) {
        r.position.y += (r.userData.targetY - r.position.y) * 0.2;
      }
    });

    // 3. Animate Emblem
    if (elapsed > emblemMesh.userData.delay) {
      emblemMesh.position.y += (emblemMesh.userData.targetY - emblemMesh.position.y) * 0.15;
      emblemMesh.rotation.y = Math.sin(elapsed * 2) * 0.12;
    }

    // 4. Subtle camera orbit around construction
    const orbitAngle = elapsed * 0.35;
    camera.position.x = Math.sin(orbitAngle) * 9.5;
    camera.position.z = Math.cos(orbitAngle) * 9.5;
    camera.position.y = 3.6 + Math.sin(elapsed * 0.8) * 0.5;
    camera.lookAt(0, 0.4, 0);

    // 5. Rotate particle system slowly
    particleSystem.rotation.y = elapsed * 0.05;

    renderer.render(scene, camera);

    // Trigger smooth fade out after 3.2s
    if (elapsed >= 3.2 && !isTransitioning) {
      isTransitioning = true;
      finishIntro();
    }
  }

  // Handle Window Resize
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  window.addEventListener('resize', onWindowResize, false);

  // Start Intro
  animate();

  // Expose replay function for user demo / hero button
  window.replaySahil3DIntro = function () {
    introContainer.style.display = 'flex';
    introContainer.classList.remove('faded-out');
    document.body.classList.add('intro-active');
    startTime = performance.now();
    isTransitioning = false;
    animationFinished = false;

    // Reset positions
    bricks.forEach((b) => {
      b.position.set(
        b.userData.targetX + (Math.random() - 0.5) * 8,
        b.userData.targetY + 8 + Math.random() * 6,
        b.userData.targetZ + (Math.random() - 0.5) * 8
      );
      b.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6);
    });

    rebars.forEach((r) => {
      r.position.set(r.userData.targetX, -8, r.userData.targetZ);
    });

    emblemMesh.position.set(0, 10, 0.25);
    animate();
  };
})();
