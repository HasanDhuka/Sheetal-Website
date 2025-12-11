'use client'

import { Canvas } from '@react-three/fiber'
import { ReactNode, useMemo } from 'react'

interface CanvasWrapperProps {
  children: ReactNode
  dpr?: number | [number, number]
}

export function CanvasWrapper({ children, dpr }: CanvasWrapperProps) {
  const computedDpr = useMemo(() => {
    if (dpr) return dpr as [number, number]
    if (typeof window === 'undefined') return [1, 1.5] as [number, number]
    return [1, Math.min(2, window.devicePixelRatio)] as [number, number]
  }, [dpr])

  return (
    <Canvas
      dpr={computedDpr}
      camera={{ position: [0, 0, 8], fov: 50 }}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      {children}
    </Canvas>
  )
}
