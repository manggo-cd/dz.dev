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

    // Central sphere - silver chrome with iridescence
    const sphereGeometry = new THREE.SphereGeometry(sphereRadius, 64, 64);
    const sphereMaterial = new THREE.MeshPhysicalMaterial({
      color: "#c0c0c0", // Silver/chrome base
      metalness: 1.0,   // Full metallic
      roughness: 0.12,  // Very smooth for mirror shine
      envMapIntensity: 3.0,
      clearcoat: 1.0,   // Adds glossy layer
      clearcoatRoughness: 0.08,
      iridescence: 1.0, // Rainbow oil-slick effect
      iridescenceIOR: 1.8,
      iridescenceThicknessRange: [100, 800], // Creates color shifting
      sheen: 0.5,       
      sheenRoughness: 0.2,
      sheenColor: new THREE.Color("#ffffff"),
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
      
      const spikeMaterial = new THREE.MeshPhysicalMaterial({
        color: "#b8b8b8", // Silver/chrome for spikes
        metalness: 1.0,   // Full metallic
        roughness: 0.08,  // Very smooth for maximum shine
        envMapIntensity: 3.5,
        clearcoat: 1.0,   // Glossy coating
        clearcoatRoughness: 0.04,
        iridescence: 0.95, // Strong rainbow oil-slick effect
        iridescenceIOR: 2.0,
        iridescenceThicknessRange: [200, 1000], // More dramatic color shift
        sheen: 0.6,       
        sheenRoughness: 0.1,
        sheenColor: new THREE.Color("#ffffff"),
        reflectivity: 1.0,
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
        
        <SpikyBall />
      </Canvas>
    </div>
  );
};

export default Star3D;

