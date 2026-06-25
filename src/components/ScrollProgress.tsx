"use client";

import * as React from "react";
import { motion, useScroll, useSpring } from "motion/react";

/** Barra de progreso de lectura fija en la parte superior de la ventana. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{
        scaleX,
        transformOrigin: "0%",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 2000,
        background: "linear-gradient(90deg, #c8a2ff 0%, #a371f7 50%, #8957e5 100%)",
        boxShadow: "0 0 12px rgba(163,113,247,0.7)",
      }}
    />
  );
}
