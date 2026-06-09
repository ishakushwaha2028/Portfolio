import React, { useRef, useState, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, PointMaterial, Points } from '@react-three/drei';
import * as THREE from 'three';

// Animate a single data packet flowing along a pipeline path
function DataPacket({ start, end, speed = 0.5, color = '#22d3ee' }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    const t = (state.clock.getElapsedTime() * speed) % 1;
    if (meshRef.current) {
      // Linear interpolation between start and end position
      meshRef.current.position.x = start[0] + (end[0] - start[0]) * t;
      meshRef.current.position.y = start[1] + (end[1] - start[1]) * t;
      meshRef.current.position.z = start[2] + (end[2] - start[2]) * t;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.08, 8, 8]} />
      <meshBasicMaterial color={color} toneMapped={false} />
    </mesh>
  );
}

// Interactive floating node (Kubernetes pod or server instance)
function InfrastructureNode({ position, name, color, activeColor = '#06b6d4' }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Subtle float animation
      meshRef.current.position.y = position[1] + Math.sin(t + position[0]) * 0.15;
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.3;
    }
  });

  return (
    <group>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial
          color={hovered ? activeColor : color}
          wireframe={!hovered}
          roughness={0.1}
          metalness={0.8}
          emissive={hovered ? activeColor : color}
          emissiveIntensity={hovered ? 1.5 : 0.4}
        />
      </mesh>
      {/* Dynamic hover aura */}
      {hovered && (
        <mesh position={[position[0], position[1] + 0.5, position[2]]}>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshBasicMaterial color={activeColor} transparent opacity={0.1} wireframe />
        </mesh>
      )}
    </group>
  );
}

// Glowing pipelines connecting nodes
function ConnectionLine({ start, end, color = '#6366f1' }) {
  const points = useMemo(() => [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ], [start, end]);

  const lineGeometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial color={color} opacity={0.3} transparent linewidth={1} />
    </line>
  );
}

// Custom animated particle background (Data stream packets in background)
function DataStreams() {
  const pointsRef = useRef();
  const count = 300;

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
      spd[i] = 0.05 + Math.random() * 0.15;
    }
    return [pos, spd];
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      const positionsArray = pointsRef.current.geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        // Stream downwards
        positionsArray[i * 3 + 1] -= speeds[i];
        // Reset when out of bounds
        if (positionsArray[i * 3 + 1] < -20) {
          positionsArray[i * 3 + 1] = 20;
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#818cf8"
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

// Main Interactive Scene Component
export default function DevOpsNetworkScene() {
  const coreRef = useRef();
  const groupRef = useRef();
  const { mouse } = useThree();

  // Infrastructure Nodes (e.g. CI/CD pipeline, API Gateways, K8s Pods)
  const nodes = useMemo(() => [
    { id: 1, name: 'Docker Cluster', position: [-4, 3, -2], color: '#38bdf8' },
    { id: 2, name: 'Kubernetes Pod', position: [5, 2, 3], color: '#10b981' },
    { id: 4, name: 'AWS VPC Gateway', position: [4, -3, -1], color: '#ec4899' },
    { id: 5, name: 'GitHub Actions', position: [0, 4, 4], color: '#a855f7' }
  ], []);

  const corePosition = [0, 0, 0];

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Core Rotation and Pulsing
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.15;
      coreRef.current.rotation.x = t * 0.08;
      
      const pulse = 1 + Math.sin(t * 2) * 0.06;
      coreRef.current.scale.set(pulse, pulse, pulse);
    }

    // Parallax mouse follow effect for the entire node network
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.y * 0.15, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.15, 0.05);
    }
  });

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#06b6d4" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#6366f1" />
      <directionalLight position={[0, 5, 0]} intensity={0.5} color="#a855f7" />

      {/* Stellar Space Background */}
      <Stars radius={120} depth={40} count={3000} factor={6} saturation={0.5} fade speed={1} />
      
      {/* Background Downward Matrix-like Data Stream Particles */}
      <DataStreams />

      {/* Main Interactive Network Layer */}
      <group ref={groupRef}>
        
        {/* Core Node: Kubernetes Master / DevOps Database */}
        <mesh ref={coreRef} position={corePosition}>
          <icosahedronGeometry args={[1.5, 2]} />
          <meshStandardMaterial
            color="#312e81"
            wireframe
            roughness={0.2}
            metalness={0.9}
            emissive="#4338ca"
            emissiveIntensity={1.2}
          />
        </mesh>
        
        {/* Inner Solid Glowing Core */}
        <mesh position={corePosition}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshBasicMaterial color="#06b6d4" toneMapped={false} />
        </mesh>

        {/* Orbiting Kubernetes Nodes */}
        {nodes.map((node) => (
          <InfrastructureNode
            key={node.id}
            position={node.position}
            name={node.name}
            color={node.color}
          />
        ))}

        {/* Dynamic Connected Pipelines (Lines) */}
        {nodes.map((node) => (
          <ConnectionLine
            key={`line-${node.id}`}
            start={corePosition}
            end={node.position}
            color={node.color}
          />
        ))}

        {/* Continuous Active Data Packet Streams flowing back and forth */}
        {nodes.map((node, i) => (
          <React.Fragment key={`packets-${node.id}`}>
            {/* Packet from satellite to core */}
            <DataPacket
              start={node.position}
              end={corePosition}
              speed={0.3 + (i * 0.05)}
              color={node.color}
            />
            {/* Packet from core to satellite (delayed/offset) */}
            <DataPacket
              start={corePosition}
              end={node.position}
              speed={0.25 + (i * 0.04)}
              color="#ffffff"
            />
          </React.Fragment>
        ))}

      </group>

      {/* Smooth Interactive Orbit controls */}
      <OrbitControls
        enableZoom={true}
        zoomSpeed={0.5}
        minDistance={10}
        maxDistance={40}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={0.12}
      />
    </>
  );
}
