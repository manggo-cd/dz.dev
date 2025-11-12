"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function SpikyBall() {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const spikesRef = useRef<THREE.Mesh[]>([]);

  // Create spiky ball geometry with individual materials
  const { sphere, spikes } = useMemo(() => {
    const sphereRadius = 1.4; // Smaller, less imposing
    const spikeLength = 1.6; // Shorter, less aggressive
    const spikeBaseRadius = 0.28; // Smaller base for gentler look

    // Central sphere - more organic feel
    const sphereGeometry = new THREE.SphereGeometry(sphereRadius, 64, 64);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: "#2d3e5c", // Deep indigo blue (original)
      metalness: 0.7,
      roughness: 0.4,  // More matte for organic feel
      envMapIntensity: 0.9,
      emissive: "#1a2233", // Subtle glow (original)
      emissiveIntensity: 0.1,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.castShadow = true;
    sphere.receiveShadow = true;

    // Create uniform spikes ALL OVER the ball
    const spikesArray: THREE.Mesh[] = [];
    
    // Use subdivided icosahedron for complete coverage
    const ico = new THREE.IcosahedronGeometry(1, 2); // subdivision = 2 for more points
    const positions = ico.attributes.position;
    
    // Use ALL vertices for complete coverage
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z = positions.getZ(i);
      
      // Create softer cone shape with rounded segments
      const coneGeometry = new THREE.ConeGeometry(
        spikeBaseRadius, // Smaller base
        spikeLength,     // Shorter height
        12,              // Radial segments
        3,               // Height segments for smoother taper
        false            // Not open ended
      );
      
      const spikeMaterial = new THREE.MeshStandardMaterial({
        color: "#1e2940", // Darker indigo for spikes (original)
        metalness: 0.75,
        roughness: 0.35,  // More matte, less sharp
        envMapIntensity: 1,
        emissive: "#0f1820", // Subtle glow (original)
        emissiveIntensity: 0.15,
      });
      
      const cone = new THREE.Mesh(coneGeometry, spikeMaterial);
      cone.castShadow = true;
      cone.receiveShadow = true;

      // Direction vector - normalized for uniform length
      const direction = new THREE.Vector3(x, y, z).normalize();
      
      // Position at sphere surface
      cone.position.copy(direction.clone().multiplyScalar(sphereRadius));

      // Align spike to point straight outward (not slanted)
      const up = new THREE.Vector3(0, 1, 0);
      cone.quaternion.setFromUnitVectors(up, direction);

      spikesArray.push(cone);
    }

    return { sphere, spikes: spikesArray };
  }, []);

  // Smooth rotation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.002;
      groupRef.current.rotation.y += 0.003;
      groupRef.current.rotation.z += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={sphere} ref={sphereRef} />
      {spikes.map((spike, index) => (
        <primitive key={index} object={spike} />
      ))}
    </group>
  );
}

const Star3D = () => {
  return (
    <div className="absolute inset-0 z-1 flex items-center justify-center">
      <Canvas shadows gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 9]} fov={45} />
        
        {/* Key light - main illumination from top-right */}
        <directionalLight
          position={[8, 8, 5]}
          intensity={4}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        
        {/* Fill light from left - softer indigo */}
        <directionalLight
          position={[-6, 3, 4]}
          intensity={1.5}
          color="#4a5f8f"
        />
        
        {/* Rim light from behind - creates edge highlights */}
        <directionalLight
          position={[0, -3, -8]}
          intensity={2}
          color="#5a7fb0"
        />
        
        {/* Top light for highlights */}
        <pointLight
          position={[0, 10, 0]}
          intensity={1.5}
          color="#ffffff"
        />
        
        {/* Additional side lights for better visibility */}
        <pointLight
          position={[10, 0, 0]}
          intensity={0.8}
          color="#ffffff"
        />
        <pointLight
          position={[-10, 0, 0]}
          intensity={0.8}
          color="#ffffff"
        />
        
        {/* Ambient light for base illumination */}
        <ambientLight intensity={0.5} />
        
        {/* Hemisphere light for natural lighting */}
        <hemisphereLight
          color="#ffffff"
          groundColor="#1a1a2e"
          intensity={0.5}
        />
        
        <SpikyBall />
      </Canvas>
    </div>
  );
};

export default Star3D;

