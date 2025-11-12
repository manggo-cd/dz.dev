"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function TriangularFrameStar() {
  const groupRef = useRef<THREE.Group>(null);

  // Create interlocking triangular frame structure
  const frames = useMemo(() => {
    const framesArray: THREE.Mesh[] = [];
    const tubeRadius = 0.035; // Thin frame tubes
    const radialSegments = 8; // Octagonal tubes for performance
    
    // Silver chrome with purple-tinted iridescence
    const silverMaterial = new THREE.MeshPhysicalMaterial({
      color: "#c5b8d8", // Silver with subtle purple tint
      metalness: 0.98,
      roughness: 0.12,
      envMapIntensity: 2.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      iridescence: 1.0,
      iridescenceIOR: 2.1,
      iridescenceThicknessRange: [100, 900],
      sheen: 0.7,
      sheenRoughness: 0.2,
      sheenColor: new THREE.Color("#d8c8ff"), // Purple sheen
    });
    
    // Slightly more purple variant for variety
    const silverPurpleMaterial = new THREE.MeshPhysicalMaterial({
      color: "#d0c0e0", // More purple tint
      metalness: 0.98,
      roughness: 0.12,
      envMapIntensity: 2.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      iridescence: 1.0,
      iridescenceIOR: 2.2,
      iridescenceThicknessRange: [150, 950],
      sheen: 0.75,
      sheenRoughness: 0.18,
      sheenColor: new THREE.Color("#e8d0ff"), // Brighter purple sheen
    });

    // Helper to create a tube between two points
    const createTube = (start: THREE.Vector3, end: THREE.Vector3, material: THREE.MeshPhysicalMaterial) => {
      const direction = end.clone().sub(start);
      const length = direction.length();
      const curve = new THREE.LineCurve3(start, end);
      const geometry = new THREE.TubeGeometry(curve, 1, tubeRadius, radialSegments, false);
      const mesh = new THREE.Mesh(geometry, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      return mesh;
    };

    // Create stellated icosahedron structure
    // Base: icosahedron vertices + extended pyramid tips
    const phi = (1 + Math.sqrt(5)) / 2; // Golden ratio
    const baseScale = 1.8;
    const tipScale = 3.2; // How far pyramids extend
    
    // Icosahedron vertices
    const baseVertices = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1],
    ].map(([x, y, z]) => new THREE.Vector3(x, y, z).normalize().multiplyScalar(baseScale));

    // Icosahedron faces (each becomes a pyramid)
    const faces = [
      [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
      [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
      [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
      [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1],
    ];

    // For each face, create a triangular pyramid (tetrahedron spike)
    faces.forEach((face, faceIndex) => {
      const v0 = baseVertices[face[0]];
      const v1 = baseVertices[face[1]];
      const v2 = baseVertices[face[2]];
      
      // Calculate face center and extend to create pyramid tip
      const faceCenter = v0.clone().add(v1).add(v2).multiplyScalar(1 / 3);
      const tipDirection = faceCenter.clone().normalize();
      const tip = tipDirection.multiplyScalar(tipScale);
      
      // Alternate between silver and silver-purple for subtle variety
      const material = faceIndex % 2 === 0 ? silverMaterial : silverPurpleMaterial;
      
      // Create triangular frame pyramid:
      // - 3 base edges (triangle on sphere surface)
      // - 3 edges from base to tip
      
      // Base triangle edges
      framesArray.push(createTube(v0, v1, material));
      framesArray.push(createTube(v1, v2, material));
      framesArray.push(createTube(v2, v0, material));
      
      // Edges to pyramid tip
      framesArray.push(createTube(v0, tip, material));
      framesArray.push(createTube(v1, tip, material));
      framesArray.push(createTube(v2, tip, material));
    });

    return framesArray;
  }, []);

  // Smooth rotation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.002;
      groupRef.current.rotation.y += 0.003;
      groupRef.current.rotation.z += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {frames.map((frame, index) => (
        <primitive key={index} object={frame} />
      ))}
    </group>
  );
}

const Star3D = () => {
  return (
    <div className="absolute inset-0 z-1 flex items-center justify-center scale-50 sm:scale-75 md:scale-90 lg:scale-100">
      <Canvas 
        shadows 
        gl={{ 
          antialias: true, 
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping, // Better color rendering
          toneMappingExposure: 1.2,
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 9]} fov={45} />
        
        {/* Key light - main illumination from top-right */}
        <directionalLight
          position={[8, 8, 5]}
          intensity={5}
          color="#ffffff"
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        
        {/* Fill light from left - cool tone */}
        <directionalLight
          position={[-6, 3, 4]}
          intensity={2}
          color="#b0c4de"
        />
        
        {/* Rim light from behind - creates rainbow edge */}
        <directionalLight
          position={[0, -3, -8]}
          intensity={2.5}
          color="#c8d8ff"
        />
        
        {/* Top light for highlights - bright white */}
        <pointLight
          position={[0, 10, 0]}
          intensity={2}
          color="#ffffff"
        />
        
        {/* Additional side lights with color tints */}
        <pointLight
          position={[10, 0, 0]}
          intensity={1.2}
          color="#ffd0ff"
        />
        <pointLight
          position={[-10, 0, 0]}
          intensity={1.2}
          color="#d0f0ff"
        />
        
        {/* Ambient light for base illumination */}
        <ambientLight intensity={0.6} />
        
        {/* Hemisphere light for natural lighting */}
        <hemisphereLight
          color="#e0f0ff"
          groundColor="#2a3a4e"
          intensity={0.8}
        />
        
        <TriangularFrameStar />
      </Canvas>
    </div>
  );
};

export default Star3D;

