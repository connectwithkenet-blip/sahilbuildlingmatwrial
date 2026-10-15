import * as THREE from 'three';
import { createBuildingShell, createBrickMesh } from '../lib/materials-procedural.js';

/**
 * Scene 5: About (Building Shell Fly-over) & Contact (Calm Floating Brick Particles)
 */
export class AboutScene {
  constructor() {
    this.group = new THREE.Group();
  }

  init(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.scene.add(this.group);

    // Initial camera position for fly-over
    this.camera.position.set(-8, 5.5, 11);
    this.camera.lookAt(0, 2.5, 0);

    // Procedural multi-story building shell
    this.building = createBuildingShell();
    this.building.position.set(0, 0, 0);
    this.group.add(this.building);
  }

  update(delta, time, pointer) {
    // Slow cinematic circular fly-over around building shell
    const radius = 12.0;
    const speed = 0.12;
    const angle = time * speed;

    this.camera.position.x = Math.sin(angle) * radius + pointer.x * 0.8;
    this.camera.position.z = Math.cos(angle) * radius + pointer.y * 0.8;
    this.camera.position.y = 5.2 + Math.sin(time * 0.2) * 1.0;
    this.camera.lookAt(0, 2.2, 0);
  }

  dispose() {
    if (this.scene && this.group) {
      this.scene.remove(this.group);
    }
  }
}

export class ContactScene {
  constructor() {
    this.group = new THREE.Group();
    this.floatingBricks = [];
  }

  init(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.scene.add(this.group);

    this.camera.position.set(0, 2.0, 7.0);
    this.camera.lookAt(0, 1.2, 0);

    // Subtle floating brick particles in the background
    for (let i = 0; i < 12; i++) {
      const b = createBrickMesh();
      b.scale.set(0.65, 0.65, 0.65);
      b.position.set(
        (Math.random() - 0.5) * 12,
        Math.random() * 5 + 0.5,
        (Math.random() - 0.5) * 6 - 2
      );
      b.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      this.floatingBricks.push({
        mesh: b,
        rotSpeedX: (Math.random() - 0.5) * 0.015,
        rotSpeedY: (Math.random() - 0.5) * 0.02,
        floatOffset: Math.random() * Math.PI * 2
      });
      this.group.add(b);
    }
  }

  update(delta, time, pointer) {
    // Gentle floating motion
    this.floatingBricks.forEach(item => {
      item.mesh.rotation.x += item.rotSpeedX;
      item.mesh.rotation.y += item.rotSpeedY;
      item.mesh.position.y += Math.sin(time * 1.5 + item.floatOffset) * 0.003;
    });

    // Subtle parallax
    if (this.camera) {
      this.camera.position.x += (pointer.x * 0.6 - this.camera.position.x) * 0.04;
      this.camera.position.y += (2.0 + pointer.y * 0.4 - this.camera.position.y) * 0.04;
      this.camera.lookAt(0, 1.2, 0);
    }
  }

  dispose() {
    if (this.scene && this.group) {
      this.scene.remove(this.group);
    }
  }
}
