"use client";

import * as React from "react";
import { motion } from "motion/react";
import Box from "@mui/material/Box";

const MotionBox = motion.create(Box);

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  /** Permite estilos sx de MUI sobre el contenedor animado. */
  sx?: React.ComponentProps<typeof Box>["sx"];
};

/**
 * Anima la entrada del contenido cuando aparece en viewport:
 * fade + leve desplazamiento vertical. Reutilizable en toda la landing.
 */
export default function Reveal({ children, delay = 0, y = 24, sx }: RevealProps) {
  return (
    <MotionBox
      sx={sx}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }}
    >
      {children}
    </MotionBox>
  );
}
