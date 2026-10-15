import * as THREE from 'three';

/**
 * Procedural texture & geometry generator for Sahil Building Material 3D Experience.
 * Everything is generated procedurally without external downloads.
 */

// Cached procedural canvas textures
let brickTexture = null;
let cementBagTexture = null;
let rebarNormalTexture = null;
let sandBumpTexture = null;
let studioFloorTexture = null;

/**
 * Generates an authentic red brick canvas texture with clay pitting & color depth.
 */
export function getBrickTexture() {
  if (brickTexture) return brickTexture;

  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  // Base terracotta gradient
  const grad = ctx.createLinearGradient(0, 0, 512, 256);
  grad.addColorStop(0, '#B23A24');
  grad.addColorStop(0.5, '#A63320');
  grad.addColorStop(1, '#8C2B18');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 256);

  // Noise specks and clay grain
  const imgData = ctx.getImageData(0, 0, 512, 256);
  const data = imgData.data;
  for (let i = 0; i < data.length; i += 4) {
    const noise = (Math.random() - 0.5) * 45;
    data[i] = Math.min(255, Math.max(0, data[i] + noise));
    data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise * 0.6));
    data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise * 0.4));
  }
  ctx.putImageData(imgData, 0, 0);

  // Bevel edge highlight & shadow
  ctx.strokeStyle = 'rgba(255, 200, 180, 0.2)';
  ctx.lineWidth = 4;
  ctx.strokeRect(4, 4, 504, 248);

  // Center manufacturer stamp indentation ("SAHIL - 1")
  ctx.fillStyle = 'rgba(60, 15, 10, 0.35)';
  ctx.fillRect(140, 70, 232, 116);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.font = 'bold 36px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('SAHIL', 256, 128);

  brickTexture = new THREE.CanvasTexture(canvas);
  brickTexture.wrapS = THREE.RepeatWrapping;
  brickTexture.wrapT = THREE.RepeatWrapping;
  return brickTexture;
}

/**
 * Generates an UltraTech style paper cement bag texture with yellow band & labeling.
 */
export function getCementBagTexture() {
  if (cementBagTexture) return cementBagTexture;

  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  // Kraft cement paper grey/tan base
  ctx.fillStyle = '#C8C4B7';
  ctx.fillRect(0, 0, 1024, 1024);

  // Paper noise grain
  const imgData = ctx.getImageData(0, 0, 1024, 1024);
  const data = imgData.data;
  for (let i = 0; i < data.length; i += 4) {
    const noise = (Math.random() - 0.5) * 28;
    data[i] = Math.min(255, Math.max(0, data[i] + noise));
    data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
    data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
  }
  ctx.putImageData(imgData, 0, 0);

  // Signature Safety Yellow top band (UltraTech style)
  ctx.fillStyle = '#F5B800';
  ctx.fillRect(0, 180, 1024, 280);

  // Black accent chevron stripe
  ctx.fillStyle = '#1C1B19';
  ctx.fillRect(0, 460, 1024, 32);

  // Brand Name Typography
  ctx.fillStyle = '#1C1B19';
  ctx.font = '900 84px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('ULTRATECH', 512, 300);

  ctx.font = '700 42px sans-serif';
  ctx.fillText('THE ENGINEER\'S CHOICE', 512, 365);

  ctx.fillStyle = '#A62410';
  ctx.font = 'bold 36px sans-serif';
  ctx.fillText('SUPER CEMENT • PPC', 512, 420);

  // Specifications
  ctx.fillStyle = '#2C2B29';
  ctx.font = '600 28px sans-serif';
  ctx.fillText('NET WEIGHT: 50 kg • IS 1489 (PART 1)', 512, 600);
  ctx.fillText('MFD: FRESH 2026 BATCH • WEATHERPROOF', 512, 650);

  // Red ISI Mark Box
  ctx.strokeStyle = '#B23A24';
  ctx.lineWidth = 6;
  ctx.strokeRect(412, 720, 200, 100);
  ctx.fillStyle = '#B23A24';
  ctx.font = 'bold 32px sans-serif';
  ctx.fillText('ISI CM/L', 512, 780);

  // Stitched border lines top and bottom
  ctx.strokeStyle = '#5E5A52';
  ctx.lineWidth = 4;
  ctx.setLineDash([8, 6]);
  ctx.strokeRect(20, 40, 984, 944);
  ctx.setLineDash([]);

  cementBagTexture = new THREE.CanvasTexture(canvas);
  return cementBagTexture;
}

/**
 * Generates normal map for ribbed TMT rebar (longitudinal ribs + diagonal lugs).
 */
export function getRebarNormalTexture() {
  if (rebarNormalTexture) return rebarNormalTexture;

  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  // Flat normal base (128, 128, 255)
  ctx.fillStyle = '#8080FF';
  ctx.fillRect(0, 0, 256, 256);

  // Diagonal ribbed lugs
  ctx.strokeStyle = '#B090FF';
  ctx.lineWidth = 8;
  for (let y = -256; y < 512; y += 24) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(256, y + 128);
    ctx.stroke();
  }

  // Longitudinal spine rib
  ctx.fillStyle = '#D0A0FF';
  ctx.fillRect(120, 0, 16, 256);

  rebarNormalTexture = new THREE.CanvasTexture(canvas);
  rebarNormalTexture.wrapS = THREE.RepeatWrapping;
  rebarNormalTexture.wrapT = THREE.RepeatWrapping;
  rebarNormalTexture.repeat.set(1, 12);
  return rebarNormalTexture;
}

/**
 * Generates sand/stone aggregate grainy bump texture.
 */
export function getSandBumpTexture() {
  if (sandBumpTexture) return sandBumpTexture;

  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, 256, 256);

  const imgData = ctx.getImageData(0, 0, 256, 256);
  const data = imgData.data;
  for (let i = 0; i < data.length; i += 4) {
    const val = 128 + (Math.random() - 0.5) * 120;
    data[i] = val;
    data[i + 1] = val;
    data[i + 2] = val;
  }
  ctx.putImageData(imgData, 0, 0);

  sandBumpTexture = new THREE.CanvasTexture(canvas);
  sandBumpTexture.wrapS = THREE.RepeatWrapping;
  sandBumpTexture.wrapT = THREE.RepeatWrapping;
  sandBumpTexture.repeat.set(4, 4);
  return sandBumpTexture;
}

/**
 * Generates dark studio floor texture with subtle dot grid.
 */
export function getStudioFloorTexture() {
  if (studioFloorTexture) return studioFloorTexture;

  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#181716';
  ctx.fillRect(0, 0, 512, 512);

  // Subtle grid lines
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
  ctx.lineWidth = 1;
  const step = 64;
  for (let x = 0; x <= 512; x += step) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 512);
    ctx.stroke();
  }
  for (let y = 0; y <= 512; y += step) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(512, y);
    ctx.stroke();
  }

  // Grid intersection crosshairs
  ctx.fillStyle = 'rgba(245, 184, 0, 0.2)';
  for (let x = step; x < 512; x += step) {
    for (let y = step; y < 512; y += step) {
      ctx.fillRect(x - 2, y - 2, 4, 4);
    }
  }

  studioFloorTexture = new THREE.CanvasTexture(canvas);
  studioFloorTexture.wrapS = THREE.RepeatWrapping;
  studioFloorTexture.wrapT = THREE.RepeatWrapping;
  studioFloorTexture.repeat.set(16, 16);
  return studioFloorTexture;
}

// ============================================================================
// PROCEDURAL 3D MESH GENERATORS
// ============================================================================

/**
 * Procedural beveled red brick with realistic dimensions (0.92 x 0.3 x 0.44).
 */
export function createBrickMesh() {
  const geo = new THREE.BoxGeometry(0.92, 0.3, 0.44, 4, 2, 3);
  
  // Slight jitter vertices for handmade clay look
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    pos.setXYZ(
      i,
      pos.getX(i) + (Math.random() - 0.5) * 0.02,
      pos.getY(i) + (Math.random() - 0.5) * 0.015,
      pos.getZ(i) + (Math.random() - 0.5) * 0.02
    );
  }
  geo.computeVertexNormals();

  const mat = new THREE.MeshStandardMaterial({
    map: getBrickTexture(),
    bumpMap: getBrickTexture(),
    bumpScale: 0.04,
    roughness: 0.88,
    metalness: 0.05,
    color: 0xffffff
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

/**
 * Procedural UltraTech 50kg cement bag mesh with rounded body and crimped ends.
 */
export function createCementBagMesh() {
  const bagGroup = new THREE.Group();

  // Main puffed bag body
  const bodyGeo = new THREE.BoxGeometry(1.3, 0.45, 0.85, 8, 4, 6);
  const pos = bodyGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    // Bulge center outwards like a heavy powdered bag
    const distCenter = 1 - Math.min(1, Math.sqrt(x * x * 0.5 + z * z * 0.9));
    pos.setY(i, y + Math.sign(y) * distCenter * 0.09);
  }
  bodyGeo.computeVertexNormals();

  const bagMat = new THREE.MeshStandardMaterial({
    map: getCementBagTexture(),
    roughness: 0.85,
    metalness: 0.04
  });

  const bodyMesh = new THREE.Mesh(bodyGeo, bagMat);
  bodyMesh.castShadow = true;
  bodyMesh.receiveShadow = true;
  bagGroup.add(bodyMesh);

  // Top and bottom stitched crimps
  const crimpMat = new THREE.MeshStandardMaterial({ color: 0x8A8374, roughness: 0.9 });
  const crimpGeo = new THREE.BoxGeometry(1.34, 0.04, 0.06);
  
  const topCrimp = new THREE.Mesh(crimpGeo, crimpMat);
  topCrimp.position.set(0, 0.2, 0.42);
  bagGroup.add(topCrimp);

  const botCrimp = new THREE.Mesh(crimpGeo, crimpMat);
  botCrimp.position.set(0, -0.2, -0.42);
  bagGroup.add(botCrimp);

  return bagGroup;
}

/**
 * Procedural TMT steel rebar rod with ribbed texture and high metalness.
 */
export function createRebarRod(length = 4.0, radius = 0.06) {
  const geo = new THREE.CylinderGeometry(radius, radius, length, 16, 12);
  const mat = new THREE.MeshStandardMaterial({
    color: 0x5C626C,
    metalness: 0.92,
    roughness: 0.32,
    normalMap: getRebarNormalTexture(),
    normalScale: new THREE.Vector2(0.8, 0.8)
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

/**
 * Bundle of 7 TMT rebar rods bound together.
 */
export function createRebarBundle(length = 4.0) {
  const bundle = new THREE.Group();
  const radius = 0.055;
  const offsets = [
    [0, 0],
    [radius * 1.9, 0],
    [-radius * 1.9, 0],
    [radius * 0.95, radius * 1.65],
    [-radius * 0.95, radius * 1.65],
    [radius * 0.95, -radius * 1.65],
    [-radius * 0.95, -radius * 1.65]
  ];

  offsets.forEach(([ox, oy]) => {
    const rod = createRebarRod(length, radius);
    rod.position.set(ox, 0, oy);
    bundle.add(rod);
  });

  // GI Binding wire bands around the bundle
  const ringGeo = new THREE.TorusGeometry(radius * 2.2, 0.015, 8, 24);
  const ringMat = new THREE.MeshStandardMaterial({ color: 0x88929A, metalness: 0.9, roughness: 0.2 });

  [-length * 0.35, 0, length * 0.35].forEach((posZ) => {
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = posZ;
    bundle.add(ring);
  });

  return bundle;
}

/**
 * Procedural Yamuna Sand or stone dust cone pile with displacement.
 */
export function createSandPile(radius = 2.0, height = 1.0, colorHex = 0xD4B17B) {
  const geo = new THREE.ConeGeometry(radius, height, 32, 16);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    if (y < height * 0.4) {
      pos.setX(i, pos.getX(i) + (Math.random() - 0.5) * 0.08);
      pos.setZ(i, pos.getZ(i) + (Math.random() - 0.5) * 0.08);
    }
  }
  geo.computeVertexNormals();

  const mat = new THREE.MeshStandardMaterial({
    color: colorHex,
    roughness: 0.96,
    metalness: 0.02,
    bumpMap: getSandBumpTexture(),
    bumpScale: 0.08
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

/**
 * Stylized low-poly commercial tipper truck (Tata / Ashok Leyland style).
 */
export function createLowPolyTipperTruck() {
  const truck = new THREE.Group();

  // Chassis frame
  const chassisMat = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.8, roughness: 0.4 });
  const chassis = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.3, 5.2), chassisMat);
  chassis.position.y = 0.65;
  chassis.castShadow = true;
  truck.add(chassis);

  // Cabin
  const cabMat = new THREE.MeshStandardMaterial({ color: 0x1E40AF, roughness: 0.3, metalness: 0.5 }); // Royal Blue
  const cab = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.4, 1.6), cabMat);
  cab.position.set(0, 1.5, 1.6);
  cab.castShadow = true;
  truck.add(cab);

  // Windshield
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x88CCEE, roughness: 0.1, metalness: 0.9 });
  const windshield = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.6, 0.1), glassMat);
  windshield.position.set(0, 1.75, 2.41);
  truck.add(windshield);

  // Headlights & Bumper
  const bumperMat = new THREE.MeshStandardMaterial({ color: 0xF5B800, roughness: 0.4, metalness: 0.6 }); // Safety Yellow bumper
  const bumper = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.4, 0.3), bumperMat);
  bumper.position.set(0, 0.7, 2.5);
  truck.add(bumper);

  const lightMat = new THREE.MeshStandardMaterial({ color: 0xFFFFAA, emissive: 0xFFFF55, emissiveIntensity: 0.6 });
  const leftLight = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.1, 12), lightMat);
  leftLight.rotation.x = Math.PI / 2;
  leftLight.position.set(-0.6, 0.7, 2.66);
  const rightLight = leftLight.clone();
  rightLight.position.x = 0.6;
  truck.add(leftLight, rightLight);

  // Tipper Bed (Hydraulic dumper body)
  const bedGroup = new THREE.Group();
  bedGroup.position.set(0, 0.8, -0.6); // Pivot point for tipping animation
  bedGroup.name = "tipperBed";

  const bedMat = new THREE.MeshStandardMaterial({ color: 0xB23A24, roughness: 0.6, metalness: 0.3 }); // Brick Red dumper
  const bedBottom = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.15, 3.2), bedMat);
  bedBottom.position.set(0, 0.1, -0.9);
  bedBottom.castShadow = true;
  bedGroup.add(bedBottom);

  const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.9, 3.2), bedMat);
  leftWall.position.set(-0.75, 0.6, -0.9);
  const rightWall = leftWall.clone();
  rightWall.position.x = 0.75;
  const frontWall = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.9, 0.1), bedMat);
  frontWall.position.set(0, 0.6, 0.7);
  bedGroup.add(leftWall, rightWall, frontWall);

  truck.add(bedGroup);

  // 6 Rugged Wheels
  const wheelMat = new THREE.MeshStandardMaterial({ color: 0x1A1A1A, roughness: 0.9 });
  const rimMat = new THREE.MeshStandardMaterial({ color: 0xF5B800, metalness: 0.8, roughness: 0.3 });
  const wheelGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.32, 16);

  const wheelPositions = [
    [-0.85, 0.42, 1.6],
    [0.85, 0.42, 1.6],
    [-0.85, 0.42, -1.2],
    [0.85, 0.42, -1.2],
    [-0.85, 0.42, -2.1],
    [0.85, 0.42, -2.1]
  ];

  wheelPositions.forEach(([x, y, z]) => {
    const wheel = new THREE.Mesh(wheelGeo, wheelMat);
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(x, y, z);
    wheel.castShadow = true;

    const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.34, 12), rimMat);
    wheel.add(rim);
    truck.add(wheel);
  });

  return truck;
}

/**
 * Worker capsule figure with safety helmet and vest.
 */
export function createWorkerFigure(vestColorHex = 0xF5B800) {
  const worker = new THREE.Group();

  // Torso / Legs capsule
  const bodyGeo = new THREE.CapsuleGeometry(0.2, 0.7, 8, 12);
  const vestMat = new THREE.MeshStandardMaterial({ color: vestColorHex, roughness: 0.7 });
  const body = new THREE.Mesh(bodyGeo, vestMat);
  body.position.y = 0.7;
  body.castShadow = true;
  worker.add(body);

  // Head
  const headGeo = new THREE.SphereGeometry(0.14, 12, 12);
  const skinMat = new THREE.MeshStandardMaterial({ color: 0x965A38, roughness: 0.8 });
  const head = new THREE.Mesh(headGeo, skinMat);
  head.position.y = 1.25;
  worker.add(head);

  // Safety Helmet
  const helmetGeo = new THREE.SphereGeometry(0.16, 12, 12, 0, Math.PI * 2, 0, Math.PI * 0.55);
  const helmetMat = new THREE.MeshStandardMaterial({ color: 0xF5B800, roughness: 0.3, metalness: 0.2 });
  const helmet = new THREE.Mesh(helmetGeo, helmetMat);
  helmet.position.y = 1.3;
  worker.add(helmet);

  return worker;
}

/**
 * Mixed rubble and debris pile for Malwa removal.
 */
export function createDebrisPile() {
  const group = new THREE.Group();
  const chunkCount = 28;

  const brickMat = new THREE.MeshStandardMaterial({ color: 0xB23A24, roughness: 0.9 });
  const concreteMat = new THREE.MeshStandardMaterial({ color: 0x8C8880, roughness: 0.95 });

  for (let i = 0; i < chunkCount; i++) {
    const isBrick = Math.random() > 0.5;
    const geo = isBrick 
      ? new THREE.BoxGeometry(0.3 + Math.random() * 0.3, 0.15 + Math.random() * 0.15, 0.2 + Math.random() * 0.2)
      : new THREE.DodecahedronGeometry(0.18 + Math.random() * 0.2);

    const mesh = new THREE.Mesh(geo, isBrick ? brickMat : concreteMat);
    const radius = Math.random() * 1.4;
    const angle = Math.random() * Math.PI * 2;
    mesh.position.set(
      Math.cos(angle) * radius,
      0.1 + Math.random() * 0.45 * (1.5 - radius),
      Math.sin(angle) * radius
    );
    mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  }

  return group;
}

/**
 * Procedural building frame / shell for About scene fly-over.
 */
export function createBuildingShell() {
  const building = new THREE.Group();
  const brickMat = new THREE.MeshStandardMaterial({ map: getBrickTexture(), roughness: 0.85 });
  const concreteMat = new THREE.MeshStandardMaterial({ color: 0x9B968E, roughness: 0.9 });
  const rebarMat = new THREE.MeshStandardMaterial({ color: 0x5C626C, metalness: 0.9, roughness: 0.3 });

  // 4 Main corner RCC pillars with protruding rebar rods
  const pillarGeo = new THREE.BoxGeometry(0.6, 6.0, 0.6);
  const pillarPositions = [
    [-4, 3, -4],
    [4, 3, -4],
    [-4, 3, 4],
    [4, 3, 4]
  ];

  pillarPositions.forEach(([px, py, pz]) => {
    const pillar = new THREE.Mesh(pillarGeo, concreteMat);
    pillar.position.set(px, py, pz);
    pillar.castShadow = true;
    pillar.receiveShadow = true;
    building.add(pillar);

    // Rebar rods extending from top
    for (let r = 0; r < 4; r++) {
      const rebar = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.2, 8), rebarMat);
      rebar.position.set(px + (r % 2 ? 0.15 : -0.15), 6.5, pz + (r > 1 ? 0.15 : -0.15));
      building.add(rebar);
    }
  });

  // Concrete slabs (ground, 1st floor, roof)
  const slabGeo = new THREE.BoxGeometry(9.2, 0.35, 9.2);
  [0.175, 3.2, 6.1].forEach((y) => {
    const slab = new THREE.Mesh(slabGeo, concreteMat);
    slab.position.y = y;
    slab.castShadow = true;
    slab.receiveShadow = true;
    building.add(slab);
  });

  // Exposed brick masonry walls in progress
  const wallGeo1 = new THREE.BoxGeometry(4.0, 2.6, 0.3);
  const wall1 = new THREE.Mesh(wallGeo1, brickMat);
  wall1.position.set(-1.8, 1.7, -4);
  wall1.castShadow = true;
  building.add(wall1);

  const wallGeo2 = new THREE.BoxGeometry(0.3, 2.6, 4.0);
  const wall2 = new THREE.Mesh(wallGeo2, brickMat);
  wall2.position.set(-4, 1.7, 1.8);
  wall2.castShadow = true;
  building.add(wall2);

  // Upper floor half-constructed brick wall
  const wall3 = new THREE.Mesh(new THREE.BoxGeometry(3.5, 1.6, 0.3), brickMat);
  wall3.position.set(1.5, 4.4, 4);
  wall3.castShadow = true;
  building.add(wall3);

  return building;
}

/**
 * Procedural finishing materials (putty bucket, tiles stack, CPVC pipes).
 */
export function createFinishingMaterialsGroup() {
  const group = new THREE.Group();

  // 1. Paint / Putty bucket (Asian Paints / Birla White style)
  const bucketGeo = new THREE.CylinderGeometry(0.42, 0.34, 0.95, 24);
  const bucketMat = new THREE.MeshStandardMaterial({ color: 0xF8F8F8, roughness: 0.3, metalness: 0.1 });
  const bucket = new THREE.Mesh(bucketGeo, bucketMat);
  bucket.position.set(-1.2, 0.48, 0);
  bucket.castShadow = true;
  group.add(bucket);

  const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.44, 0.08, 24), new THREE.MeshStandardMaterial({ color: 0xB23A24 }));
  lid.position.set(-1.2, 0.98, 0);
  group.add(lid);

  // 2. Glazed Tile Stack
  const tileStack = new THREE.Group();
  const tileGeo = new THREE.BoxGeometry(1.2, 0.03, 1.2);
  const tileMat = new THREE.MeshStandardMaterial({ color: 0xEAE5DE, roughness: 0.15, metalness: 0.1 });
  for (let i = 0; i < 8; i++) {
    const tile = new THREE.Mesh(tileGeo, tileMat);
    tile.position.set(0, i * 0.035, 0);
    tile.castShadow = true;
    tileStack.add(tile);
  }
  tileStack.position.set(0.2, 0, 0);
  group.add(tileStack);

  // 3. CPVC & SWR pipes bundle
  const pipeMat = new THREE.MeshStandardMaterial({ color: 0xF5F0E6, roughness: 0.25, metalness: 0.05 });
  const pipeGeo = new THREE.CylinderGeometry(0.12, 0.12, 3.2, 16);
  for (let p = 0; p < 4; p++) {
    const pipe = new THREE.Mesh(pipeGeo, pipeMat);
    pipe.rotation.z = Math.PI / 2;
    pipe.position.set(0.2, 0.6 + p * 0.15, -0.6 + (p % 2) * 0.2);
    pipe.castShadow = true;
    group.add(pipe);
  }

  return group;
}
