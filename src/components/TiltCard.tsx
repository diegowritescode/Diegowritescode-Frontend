"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Box from "@mui/material/Box";

/**
 * Tarjeta con inclinación 3D y un resplandor que sigue el cursor.
 * El glow se posiciona con variables CSS actualizadas en cada movimiento.
 */
export default function TiltCard({
  children,
  max = 8,
  sx,
}: {
  children: React.ReactNode;
  max?: number;
  sx?: React.ComponentProps<typeof Box>["sx"];
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 200, damping: 18 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 200, damping: 18 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width;
    const ny = (e.clientY - r.top) / r.height;
    px.set(nx);
    py.set(ny);
    el.style.setProperty("--mx", `${nx * 100}%`);
    el.style.setProperty("--my", `${ny * 100}%`);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <Box
      component={motion.div}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      sx={{
        position: "relative",
        height: "100%",
        borderRadius: 3,
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          background:
            "radial-gradient(380px circle at var(--mx, 50%) var(--my, 50%), rgba(163,113,247,0.18), transparent 45%)",
          opacity: 0,
          transition: "opacity .3s",
          pointerEvents: "none",
          zIndex: 1,
        },
        "&:hover::before": { opacity: 1 },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
