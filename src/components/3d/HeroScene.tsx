import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, Environment, MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const ProductModel = () => {
    const meshRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // Gentle rotation
            meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.5;
            meshRef.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 0.2) * 0.1;
        }
    });

    return (
        <Float speed={3} rotationIntensity={1} floatIntensity={2}>
            <group ref={meshRef}>
                {/* Main Tin Body */}
                <mesh position={[0, 0, 0]} castShadow>
                    <cylinderGeometry args={[1.2, 1.2, 2.8, 64]} />
                    <meshStandardMaterial color="#1A4D2E" roughness={0.15} metalness={0.2} />
                </mesh>

                {/* Lid */}
                <mesh position={[0, 1.5, 0]} castShadow>
                    <cylinderGeometry args={[1.25, 1.25, 0.5, 64]} />
                    <meshStandardMaterial color="#111" roughness={0.1} metalness={0.9} />
                </mesh>

                {/* Premium Label */}
                <mesh position={[0, 0, 1.21]}>
                    <planeGeometry args={[1.8, 1.2]} />
                    <meshStandardMaterial color="#ffffff" roughness={0} />
                </mesh>

                {/* Decorative Gold Rings */}
                <mesh position={[0, 1.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[1.22, 0.02, 16, 100]} />
                    <meshStandardMaterial color="#FF9F29" metalness={1} roughness={0.1} />
                </mesh>
            </group>
        </Float>
    );
};

const ParticleClouds = () => {
    const count = 20;
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push({
                position: [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 5] as [number, number, number],
                scale: Math.random() * 0.2 + 0.05,
                speed: Math.random() * 2 + 1,
                distort: Math.random() * 0.5 + 0.2,
                color: Math.random() > 0.5 ? "#1A4D2E" : "#FF9F29"
            });
        }
        return temp;
    }, []);

    return (
        <group>
            {particles.map((p, i) => (
                <Float key={i} speed={p.speed} rotationIntensity={2} floatIntensity={3}>
                    <Sphere args={[p.scale, 16, 16]} position={p.position}>
                        <MeshDistortMaterial color={p.color} speed={2} distort={p.distort} opacity={0.6} transparent />
                    </Sphere>
                </Float>
            ))}
        </group>
    )
}

const HeroScene = () => {
    return (
        <div className="w-full h-full relative z-0">
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />

                {/* Better Lighting for Premium Feel */}
                <ambientLight intensity={0.8} />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.25}
                    penumbra={1}
                    intensity={3}
                    castShadow
                    shadow-mapSize={[1024, 1024]}
                />
                <pointLight position={[-10, 5, -10]} intensity={1} color="#FF9F29" />
                <pointLight position={[5, -5, 5]} intensity={0.5} color="#1A4D2E" />

                <ProductModel />
                <ParticleClouds />

                <ContactShadows
                    position={[0, -2.8, 0]}
                    opacity={0.5}
                    scale={12}
                    blur={3}
                    far={5}
                    color="#1A4D2E"
                />

                <Environment preset="studio" />
            </Canvas>
        </div>
    );
};

export default HeroScene;
