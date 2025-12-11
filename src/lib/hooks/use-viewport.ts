"use client";

import { useState, useEffect } from "react";

export function useViewport() {
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Only execute on client
    if (typeof window === "undefined") return;

    function handleResize() {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Initial size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return viewport;
}
