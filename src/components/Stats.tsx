"use client";

import * as React from "react";
import { motion } from "motion/react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CountUp from "./CountUp";

const STATS = [
  { value: 3, suffix: "+", label: "años construyendo sistemas en producción" },
  { value: 5, suffix: "", label: "proyectos backend de nivel senior" },
  { value: 365, suffix: "", label: "retos de programación por delante" },
  { value: 0, suffix: "", label: "humo. Solo lo que de verdad funciona" },
];

export default function Stats() {
  return (
    <Box component="section" sx={{ py: { xs: 5, md: 7 }, borderTop: "1px solid #21262d", borderBottom: "1px solid #21262d" }}>
      <Container>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
            gap: { xs: 4, md: 2 },
          }}
        >
          {STATS.map((s, i) => (
            <Box
              key={s.label}
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              sx={{ textAlign: "center", px: 1 }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 40, md: 56 },
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  background: "linear-gradient(180deg, #ffffff 0%, #a371f7 130%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                <CountUp value={s.value} suffix={s.suffix} />
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 1.2, maxWidth: 200, mx: "auto" }}>
                {s.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
