"use client";

import * as React from "react";
import { motion } from "motion/react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { monoFontFamily } from "@/app/theme";
import { techStack } from "@/lib/site";

function Row({ reverse = false }: { reverse?: boolean }) {
  // Duplicamos la lista para un loop continuo sin cortes.
  const items = [...techStack, ...techStack];
  return (
    <Box sx={{ display: "flex", overflow: "hidden", maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)" }}>
      <Box
        component={motion.div}
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        sx={{ display: "flex", gap: 1.5, pr: 1.5, flexShrink: 0 }}
      >
        {items.map((t, i) => (
          <Box
            key={`${t}-${i}`}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2.2,
              py: 1.1,
              borderRadius: 999,
              border: "1px solid #30363d",
              bgcolor: "#161b22",
              color: "text.secondary",
              fontFamily: monoFontFamily,
              fontSize: 14,
              whiteSpace: "nowrap",
              transition: "color .2s, border-color .2s",
              "&:hover": { color: "primary.light", borderColor: "rgba(163,113,247,0.5)" },
            }}
          >
            <Box sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "primary.main", flexShrink: 0 }} />
            {t}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default function TechMarquee() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 } }}>
      <Container>
        <Typography
          variant="overline"
          sx={{ display: "block", textAlign: "center", color: "text.secondary", letterSpacing: 2, mb: 4 }}
        >
          EL STACK CON EL QUE TRABAJO A DIARIO
        </Typography>
      </Container>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        <Row />
        <Row reverse />
      </Box>
    </Box>
  );
}
