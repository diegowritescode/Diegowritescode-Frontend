"use client";

import * as React from "react";
import { motion } from "motion/react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import { monoFontFamily } from "@/app/theme";
import { projects } from "@/lib/site";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

type Project = (typeof projects)[number];

function ProjectCard({ p, featured = false, index }: { p: Project; featured?: boolean; index: number }) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      sx={{ height: "100%" }}
    >
      <TiltCard
        max={featured ? 5 : 8}
        sx={{
          p: { xs: 3, md: featured ? 4.5 : 3 },
          bgcolor: "#161b22",
          border: "1px solid #30363d",
          display: "flex",
          flexDirection: "column",
          transition: "border-color .25s ease, box-shadow .25s ease",
          "&:hover": {
            borderColor: "rgba(163,113,247,0.5)",
            boxShadow: "0 20px 50px -24px rgba(137,87,229,0.65)",
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", height: "100%" }}>
          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1.5 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: 2,
                display: "grid",
                placeItems: "center",
                color: p.accent,
                bgcolor: "rgba(163,113,247,0.12)",
                border: `1px solid ${p.accent}55`,
              }}
            >
              <FolderRoundedIcon sx={{ fontSize: 20 }} />
            </Box>
            <Box sx={{ fontFamily: monoFontFamily, color: "text.secondary", fontSize: 13 }}>
              ~/proyectos
            </Box>
          </Stack>

          <Typography variant={featured ? "h4" : "h6"} sx={{ fontWeight: 700, mb: 0.5 }}>
            {p.name}
          </Typography>
          <Typography sx={{ color: p.accent, fontSize: featured ? 16 : 14, fontWeight: 500, mb: 1.5 }}>
            {p.tagline}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", lineHeight: 1.7, mb: 2.5, fontSize: featured ? 15.5 : 14 }}
          >
            {p.description}
          </Typography>

          <Stack direction="row" spacing={0.8} flexWrap="wrap" useFlexGap sx={{ mt: "auto" }}>
            {p.tags.map((t) => (
              <Chip
                key={t}
                label={t}
                size="small"
                sx={{
                  height: 24,
                  fontFamily: monoFontFamily,
                  fontSize: 11.5,
                  bgcolor: "rgba(177,186,196,0.06)",
                  border: "1px solid #30363d",
                  color: "text.secondary",
                }}
              />
            ))}
          </Stack>
        </Box>
      </TiltCard>
    </Box>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <Box
      id="proyectos"
      component="section"
      sx={{
        py: { xs: 8, md: 14 },
        scrollMarginTop: 90,
        borderTop: "1px solid #21262d",
      }}
    >
      <Container>
        <Reveal sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
          <Typography variant="overline" sx={{ color: "primary.light", letterSpacing: 2, fontWeight: 600 }}>
            PROYECTOS
          </Typography>
          <Typography variant="h2" sx={{ mt: 1.5, fontSize: { xs: 30, md: 46 } }}>
            No solo lo digo. Lo construyo.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mt: 2, maxWidth: 640, mx: "auto", fontSize: { md: 18 } }}>
            Sistemas backend de nivel senior: fintech, seguridad, detección de fraude y
            arquitectura en producción. Esto es lo que respalda cada consejo.
          </Typography>
        </Reveal>

        <Box sx={{ display: "grid", gap: 2.5, gridTemplateColumns: "1fr", mb: 2.5 }}>
          <ProjectCard p={featured} featured index={0} />
        </Box>
        <Box
          sx={{
            display: "grid",
            gap: 2.5,
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          }}
        >
          {rest.map((p, i) => (
            <ProjectCard key={p.name} p={p} index={i + 1} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
