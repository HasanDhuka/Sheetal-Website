'use client'

import { useState, useEffect } from 'react'

export function useDevicePixelRatio() {
  const [dpr, setDpr] = useState(1)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const devicePixelRatio = Math.min(2, window.devicePixelRatio || 1)
      setDpr(devicePixelRatio)
    }
  }, [])

  return dpr
}
