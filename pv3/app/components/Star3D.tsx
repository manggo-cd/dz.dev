"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function OrganicSpikyBall() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Create unified organic spiky geometry - single mesh for smooth welded look
  const geometry = useMemo(() => {
    // Start with icosahedron for base spiky distribution
    const baseRadius = 1.2;
    const spikeHeight = 1.4;
    
    // Create custom geometry by modifying sphere vertices
    const geo = new THREE.IcosahedronGeometry(baseRadius, 3); // Higher subdivision for smoothness
    const positionAttribute = geo.attributes.position;
    const vertex = new THREE.Vector3();
    
    // Get all unique spike directions from lower-res icosahedron
    const spikeDirections: THREE.Vector3[] = [];
    const tempGeo = new THREE.IcosahedronGeometry(1, 1); // Lower res for spike points
    const tempPos = tempGeo.attributes.position;
    
    for (let i = 0; i < tempPos.count; i++) {
      const dir = new THREE.Vector3(
        tempPos.getX(i),
        tempPos.getY(i),
        tempPos.getZ(i)
      ).normalize();
      spikeDirections.push(dir);
    }
    
    // Modify vertices to create organic spike flow
    for (let i = 0; i < positionAttribute.count; i++) {
      vertex.fromBufferAttribute(positionAttribute, i);
      const originalLength = vertex.length();
      const direction = vertex.clone().normalize();
      
      // Find closest spike direction
      let maxDot = -1;
      for (const spikeDir of spikeDirections) {
        const dot = direction.dot(spikeDir);
        if (dot > maxDot) {
          maxDot = dot;
        }
      }
      
      // Smooth falloff creates organic welded appearance
      // Vertices near spike directions are pulled outward
      const influence = Math.pow(Math.max(0, maxDot), 3); // Cubic falloff for smooth blend
      const targetLength = baseRadius + (spikeHeight * influence);
      
      vertex.normalize().multiplyScalar(targetLength);
      positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }
    
    geo.computeVertexNormals(); // Recalculate normals for proper lighting
    
    return geo;
  }, []);

  const material = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: "#c0c0c0", // Silver chrome
      metalness: 0.98,
      roughness: 0.12,
      envMapIntensity: 2.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      iridescence: 1.0,
      iridescenceIOR: 2.1,
      iridescenceThicknessRange: [100, 900],
      sheen: 0.6,
      sheenRoughness: 0.2,
      sheenColor: new THREE.Color("#ffffff"),
    });
  }, []);

  // Smooth rotation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.z += 0.001;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} material={material} castShadow receiveShadow />
  );
}

const Star3D = () => {
  return (
    <div className="absolute inset-0 z-1 flex items-center justify-center">
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
        
        <OrganicSpikyBall />
      </Canvas>
    </div>
  );
};

export default Star3D;

