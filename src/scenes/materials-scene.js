import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  createCementBagMesh,
  createRebarBundle,
  createBrickMesh,
  createSandPile,
  createFinishingMaterialsGroup
} from '../lib/materials-procedural.js';

gsap.registerPlugin(ScrollTrigger);

/**
 * Scene 3: Materials Interactive 3D Stage (Scroll-driven)
 * Camera traverses CatmullRomCurve3 as user scrolls through materials.
 * Hero objects (Cement -> TMT Steel -> Bricks & AAC -> Sand & Rori -> Finishing) transition smoothly.
 */
export class MaterialsScene {
  constructor() {
    this.group = new THREE.Group();
    this.stageGroup = new THREE.Group();
    this.group.add(this.stageGroup);

    this.currentObjectIndex = 0;
    this.objectGroups = [];
    this.scrollTriggers = [];
    this.targetRotation = { y: 0 };
    this.currentRotation = { y: 0 };
  }

  init(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.scene.add(this.group);

    // Initial Camera setup
    this.camera.position.set(0, 1.8, 5.5);
    this.camera.lookAt(0, 1.0, 0);

    // Build the 5 material showcases
    this.buildMaterialStages();

    // Setup 3D camera spline path using CatmullRomCurve3
    this.setupCameraSpline();

    // Drag to rotate interactive listener
    this.initDragHandler();
  }

  buildMaterialStages() {
    // Stage 0: Fresh Cement Bag
    const cementStage = new THREE.Group();
    const bag = createCementBagMesh();
    bag.position.set(0, 0.4, 0);
    bag.scale.set(1.4, 1.4, 1.4);
    cementStage.add(bag);
    this.stageGroup.add(cementStage);
    this.objectGroups.push(cementStage);

    // Stage 1: TMT Rebar Bundle
    const steelStage = new THREE.Group();
    const bundle = createRebarBundle(4.0);
    bundle.position.set(0, 1.6, 0);
    bundle.rotation.z = Math.PI / 2; // Horizontal display
    steelStage.add(bundle);
    steelStage.visible = false;
    this.stageGroup.add(steelStage);
    this.objectGroups.push(steelStage);

    // Stage 2: Red Bricks & AAC Blocks
    const brickStage = new THREE.Group();
    for (let i = 0; i < 5; i++) {
      const b = createBrickMesh();
      b.position.set(-0.6 + i * 0.3, 0.15 + i * 0.16, (i % 2) * 0.1);
      b.rotation.y = i * 0.15;
      brickStage.add(b);
    }
    // AAC White block
    const aacBlock = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 0.7, 0.5),
      new THREE.MeshStandardMaterial({ color: 0xE8E6E1, roughness: 0.9 })
    );
    aacBlock.position.set(0.8, 0.35, -0.4);
    aacBlock.castShadow = true;
    brickStage.add(aacBlock);
    brickStage.visible = false;
    this.stageGroup.add(brickStage);
    this.objectGroups.push(brickStage);

    // Stage 3: Yamuna Sand & Rori Grit
    const sandStage = new THREE.Group();
    const sandPile = createSandPile(2.2, 0.9, 0xD4B17B); // River sand
    sandPile.position.set(-0.8, 0.45, 0);
    const roriPile = createSandPile(1.6, 0.7, 0x7A7E85); // Blue metal aggregate
    roriPile.position.set(1.0, 0.35, 0.2);
    sandStage.add(sandPile, roriPile);
    sandStage.visible = false;
    this.stageGroup.add(sandStage);
    this.objectGroups.push(sandStage);

    // Stage 4: Finishing (Putty bucket, tiles, CPVC pipes)
    const finishStage = createFinishingMaterialsGroup();
    finishStage.visible = false;
    this.stageGroup.add(finishStage);
    this.objectGroups.push(finishStage);
  }

  setupCameraSpline() {
    // CatmullRomCurve3 camera spline path
    this.curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(1.2, 2.0, 5.2),
      new THREE.Vector3(2.0, 2.4, 4.4),
      new THREE.Vector3(0.0, 2.8, 5.0),
      new THREE.Vector3(-1.8, 2.2, 4.6),
      new THREE.Vector3(1.0, 2.5, 5.4)
    ]);

    // Connect to scroll sections on the materials page
    const sections = document.querySelectorAll('.material-snap-section');
    if (!sections || sections.length === 0) return;

    sections.forEach((sec, idx) => {
      const st = ScrollTrigger.create({
        trigger: sec,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => this.transitionToStage(idx),
        onEnterBack: () => this.transitionToStage(idx)
      });
      this.scrollTriggers.push(st);
    });

    // Global scroll scrub along the camera curve
    const mainWrapper = document.querySelector('.materials-content-track');
    if (mainWrapper) {
      const scrubTrigger = ScrollTrigger.create({
        trigger: mainWrapper,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.0,
        onUpdate: (self) => {
          const t = self.progress;
          const pos = this.curve.getPointAt(Math.min(0.999, Math.max(0.001, t)));
          this.camera.position.copy(pos);
          this.camera.lookAt(0, 0.9, 0);
        }
      });
      this.scrollTriggers.push(scrubTrigger);
    }
  }

  transitionToStage(targetIdx) {
    if (targetIdx === this.currentObjectIndex) return;

    const prevObj = this.objectGroups[this.currentObjectIndex];
    const nextObj = this.objectGroups[targetIdx];

    if (prevObj) {
      gsap.to(prevObj.scale, {
        x: 0.01,
        y: 0.01,
        z: 0.01,
        duration: 0.35,
        ease: 'power2.in',
        onComplete: () => {
          prevObj.visible = false;
        }
      });
    }

    if (nextObj) {
      nextObj.visible = true;
      nextObj.scale.set(0.01, 0.01, 0.01);
      gsap.to(nextObj.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.5,
        delay: 0.15,
        ease: 'back.out(1.5)'
      });
    }

    this.currentObjectIndex = targetIdx;
  }

  initDragHandler() {
    let isDragging = false;
    let prevX = 0;

    this.onDown = (e) => {
      if (e.target.closest('button') || e.target.closest('a')) return;
      isDragging = true;
      prevX = e.clientX;
    };
    this.onMove = (e) => {
      if (!isDragging) return;
      const dx = e.clientX - prevX;
      this.targetRotation.y += dx * 0.008;
      prevX = e.clientX;
    };
    this.onUp = () => {
      isDragging = false;
    };

    window.addEventListener('pointerdown', this.onDown);
    window.addEventListener('pointermove', this.onMove);
    window.addEventListener('pointerup', this.onUp);
  }

  update(delta, time, pointer) {
    // Damped 360 drag rotation
    this.currentRotation.y += (this.targetRotation.y - this.currentRotation.y) * 0.08;
    this.stageGroup.rotation.y = this.currentRotation.y + time * 0.15; // Slow idle revolution

    // Subtle breathing float
    this.stageGroup.position.y = Math.sin(time * 1.5) * 0.03;
  }

  dispose() {
    this.scrollTriggers.forEach(st => st.kill());
    this.scrollTriggers = [];

    window.removeEventListener('pointerdown', this.onDown);
    window.removeEventListener('pointermove', this.onMove);
    window.removeEventListener('pointerup', this.onUp);

    if (this.scene && this.group) {
      this.scene.remove(this.group);
    }
  }
}
