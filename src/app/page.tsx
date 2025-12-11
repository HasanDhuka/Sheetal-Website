"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

function Box() {
  return (
    <Float speed={5} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Float>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Next.js Enterprise Starter
        </p>
      </div>

      <div className="relative flex place-items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-serif text-6xl font-bold mb-4 bg-clip-text text-transparent bg-hero-gradient">
            Premium Starter
          </h1>
          <p className="text-xl text-secondary">
            Next.js 14, Tailwind, Framer Motion, Three.js
          </p>
        </motion.div>
      </div>

      <div className="h-[400px] w-full">
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <Box />
          <Environment preset="city" />
          <OrbitControls />
        </Canvas>
      </div>
    </main>
  );
}
