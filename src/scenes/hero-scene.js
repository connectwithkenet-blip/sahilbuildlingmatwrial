import * as THREE from 'three';
import gsap from 'gsap';
import {
  createBrickMesh,
  createCementBagMesh,
  createRebarBundle,
  createSandPile,
  getBrickTexture
} from '../lib/materials-procedural.js';

/**
 * Scene 2: Hero (Home Page)
 * Cohesive industrial 3D composition:
 * Brick wall corner + two stacked cement bags + ribbed TMT rebar bundle + sand pile.
 * Supports mouse parallax, touch drag rotate, and idle shimmer.
 */
export class HeroScene {
  constructor() {
    this.group = new THREE.Group();
    this.interactiveGroup = new THREE.Group();
    this.group.add(this.interactiveGroup);

    this.isDragging = false;
    this.previousPointer = { x: 0, y: 0 };
    this.targetRotation = { y: 0.35, x: 0.05 };
    this.currentRotation = { y: 0.35, x: 0.05 };
  }

  init(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.scene.add(this.group);

    // Camera framed on hero composition with room for left text
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      this.camera.position.set(0.5, 2.8, 9.2);
      this.camera.lookAt(0, 1.2, 0);
    } else {
      this.camera.position.set(1.4, 2.2, 7.8);
      this.camera.lookAt(0.6, 1.1, 0);
    }

    this.buildComposition();
    this.initInteractionHandlers();
  }

  buildComposition() {
    // 1. L-Shaped Brick Wall Corner (Background left)
    const wallGroup = new THREE.Group();
    const brickW = 0.92;
    const brickH = 0.30;
    const brickD = 0.44;

    const brickMat = new THREE.MeshStandardMaterial({
      map: getBrickTexture(),
      roughness: 0.88,
      metalness: 0.05
    });
    const brickGeo = new THREE.BoxGeometry(brickW, brickH, brickD);

    // InstancedMesh for 36 bricks in corner arrangement
    const cornerWall = new THREE.InstancedMesh(brickGeo, brickMat, 36);
    cornerWall.castShadow = true;
    cornerWall.receiveShadow = true;

    const dummy = new THREE.Object3D();
    let bIdx = 0;

    // Wing 1 (along X)
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        const x = -1.8 + c * (brickW + 0.01) + (r % 2) * (brickW / 2);
        const y = r * (brickH + 0.01) + brickH / 2;
        const z = -1.2;
        dummy.position.set(x, y, z);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        cornerWall.setMatrixAt(bIdx++, dummy.matrix);
      }
    }

    // Wing 2 (along Z corner)
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 2; c++) {
        const x = -1.8;
        const y = r * (brickH + 0.01) + brickH / 2;
        const z = -1.2 + (c + 1) * (brickW + 0.01) - (r % 2) * (brickW / 2);
        dummy.position.set(x, y, z);
        dummy.rotation.set(0, Math.PI / 2, 0);
        dummy.updateMatrix();
        cornerWall.setMatrixAt(bIdx++, dummy.matrix);
      }
    }

    cornerWall.instanceMatrix.needsUpdate = true;
    wallGroup.add(cornerWall);
    this.interactiveGroup.add(wallGroup);

    // 2. Stacked Cement Bags (UltraTech style, bottom + top slightly rotated)
    const bagsGroup = new THREE.Group();
    const bottomBag = createCementBagMesh();
    bottomBag.position.set(0.2, 0.22, 0.2);
    bottomBag.rotation.y = -0.15;

    const topBag = createCementBagMesh();
    topBag.position.set(0.15, 0.62, 0.25);
    topBag.rotation.y = 0.22;
    topBag.rotation.z = -0.04;

    bagsGroup.add(bottomBag, topBag);
    this.interactiveGroup.add(bagsGroup);

    // 3. TMT Rebar Bundle leaning diagonally
    const rebarBundle = createRebarBundle(4.2);
    rebarBundle.position.set(1.4, 1.4, -0.2);
    rebarBundle.rotation.z = -0.38; // Leaning against cement stack
    rebarBundle.rotation.y = 0.45;
    this.interactiveGroup.add(rebarBundle);
    this.rebarBundle = rebarBundle;

    // 4. Yamuna River Sand Pile
    const sand = createSandPile(1.8, 0.75, 0xD4B17B);
    sand.position.set(-0.8, 0.35, 1.1);
    this.interactiveGroup.add(sand);

    // 5. Individual loose red bricks in foreground
    const brick1 = createBrickMesh();
    brick1.position.set(0.9, 0.15, 1.4);
    brick1.rotation.y = 0.4;

    const brick2 = createBrickMesh();
    brick2.position.set(1.1, 0.15, 1.1);
    brick2.rotation.y = -0.25;

    this.interactiveGroup.add(brick1, brick2);

    // Position composition nicely in 3D space
    this.interactiveGroup.position.set(0.5, 0, 0);
  }

  initInteractionHandlers() {
    this.onPointerDown = (e) => {
      // Check if user is clicking background to drag 3D stage
      if (e.target.closest('button') || e.target.closest('a') || e.target.closest('input')) return;
      this.isDragging = true;
      this.previousPointer.x = e.clientX;
      this.previousPointer.y = e.clientY;
    };

    this.onPointerMove = (e) => {
      if (!this.isDragging) return;
      const deltaX = e.clientX - this.previousPointer.x;
      const deltaY = e.clientY - this.previousPointer.y;

      this.targetRotation.y += deltaX * 0.005;
      this.targetRotation.x = Math.max(-0.2, Math.min(0.3, this.targetRotation.x + deltaY * 0.003));

      this.previousPointer.x = e.clientX;
      this.previousPointer.y = e.clientY;
    };

    this.onPointerUp = () => {
      this.isDragging = false;
    };

    window.addEventListener('pointerdown', this.onPointerDown);
    window.addEventListener('pointermove', this.onPointerMove);
    window.addEventListener('pointerup', this.onPointerUp);
  }

  update(delta, time, pointer) {
    // 1. Mouse Parallax on camera and stage
    const parallaxStrength = 0.35;
    const targetCamX = 1.4 + pointer.x * parallaxStrength;
    const targetCamY = 2.2 + pointer.y * parallaxStrength * 0.6;

    this.camera.position.x += (targetCamX - this.camera.position.x) * 0.04;
    this.camera.position.y += (targetCamY - this.camera.position.y) * 0.04;
    this.camera.lookAt(0.6, 1.1, 0);

    // 2. Drag Rotation damping
    this.currentRotation.y += (this.targetRotation.y - this.currentRotation.y) * 0.08;
    this.currentRotation.x += (this.targetRotation.x - this.currentRotation.x) * 0.08;
    this.interactiveGroup.rotation.y = this.currentRotation.y;
    this.interactiveGroup.rotation.x = this.currentRotation.x;

    // 3. Idle slow breathing float & steel rebar shimmer
    this.interactiveGroup.position.y = Math.sin(time * 1.2) * 0.04;
    if (this.rebarBundle) {
      // Subtle light shimmer on rebar
      this.rebarBundle.rotation.x = Math.sin(time * 0.8) * 0.02;
    }
  }

  dispose() {
    window.removeEventListener('pointerdown', this.onPointerDown);
    window.removeEventListener('pointermove', this.onPointerMove);
    window.removeEventListener('pointerup', this.onPointerUp);

    if (this.scene && this.group) {
      this.scene.remove(this.group);
    }
  }
}
