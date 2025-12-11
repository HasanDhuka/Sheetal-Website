'use client'

import { useRef, useEffect, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group, Mesh } from 'three'

interface HeroSceneProps {
  isLoading: boolean
}

function GeometricSweets() {
  const groupRef = useRef<Group>(null)
  const meshesRef = useRef<Mesh[]>([])

  useEffect(() => {
    if (groupRef.current) {
      // Reset meshes
      meshesRef.current = []
      groupRef.current.children.forEach((child) => {
        if (child instanceof Mesh) {
          meshesRef.current.push(child)
        }
      })
    }
  }, [])

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime()
    
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(elapsed * 0.3) * 0.2
      groupRef.current.rotation.y = elapsed * 0.2
      groupRef.current.rotation.z = Math.cos(elapsed * 0.25) * 0.1
    }

    meshesRef.current.forEach((mesh, i) => {
      mesh.position.y += Math.sin(elapsed + i) * 0.001
      mesh.rotation.x += 0.005
      mesh.rotation.z += 0.003
    })
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Candy sphere - strawberry */}
      <mesh position={[-2, 0.5, 0]} scale={1.2}>
        <icosahedronGeometry args={[0.8, 4]} />
        <meshPhongMaterial
          color="#ff6b6b"
          shininess={80}
          wireframe={false}
        />
      </mesh>

      {/* Candy cube - chocolate */}
      <mesh position={[0, -0.3, 0]} rotation={[0.3, 0.4, 0.2]} scale={1}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial
          color="#8B4513"
          shininess={60}
          wireframe={false}
        />
      </mesh>

      {/* Candy octahedron - mint */}
      <mesh position={[2, 0.2, 0]} scale={1.1}>
        <octahedronGeometry args={[0.7, 2]} />
        <meshPhongMaterial
          color="#4ade80"
          shininess={70}
          wireframe={false}
        />
      </mesh>

      {/* Accent particles */}
      <mesh position={[-1, 1.5, -0.5]} scale={0.4}>
        <dodecahedronGeometry args={[0.5, 0]} />
        <meshPhongMaterial
          color="#fbbf24"
          shininess={100}
          wireframe={false}
        />
      </mesh>

      <mesh position={[1, -1.2, 0.5]} scale={0.35}>
        <tetrahedronGeometry args={[0.6, 0]} />
        <meshPhongMaterial
          color="#ec4899"
          shininess={90}
          wireframe={false}
        />
      </mesh>
    </group>
  )
}

function Lighting() {
  const ambientRef = useRef<any>(null)
  const pointRef = useRef<any>(null)

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime()
    
    if (pointRef.current) {
      pointRef.current.position.x = Math.sin(elapsed * 0.5) * 6
      pointRef.current.position.z = Math.cos(elapsed * 0.5) * 6
    }
  })

  return (
    <>
      <ambientLight ref={ambientRef} intensity={0.6} color="#ffffff" />
      <pointLight
        ref={pointRef}
        position={[6, 4, 4]}
        intensity={1.2}
        distance={20}
        color="#ff6b6b"
      />
      <pointLight
        position={[-6, 3, -4]}
        intensity={0.8}
        distance={20}
        color="#4ade80"
      />
      <pointLight
        position={[0, -5, 5]}
        intensity={0.6}
        distance={15}
        color="#3b82f6"
      />
    </>
  )
}

function HeroSceneContent() {
  return (
    <>
      <Lighting />
      <GeometricSweets />
      <fog attach="fog" args={['#000000', 5, 25]} />
    </>
  )
}

export function HeroScene({ isLoading }: HeroSceneProps) {
  if (isLoading) {
    return null
  }

  return (
    <Suspense fallback={null}>
      <HeroSceneContent />
    </Suspense>
  )
}
