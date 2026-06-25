"use client";

import * as React from "react";
import { motion } from "motion/react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded";
import Reveal from "./Reveal";

const MotionPaper = motion.create(Paper);

const FEATURES = [
  {
    icon: CalendarMonthRoundedIcon,
    title: "Reto diario",
    body: "Un reto de programación por cada día del año. Práctica constante, no maratones de fin de semana que olvidas el lunes.",
  },
  {
    icon: PsychologyRoundedIcon,
    title: "Tips para juniors",
    body: "Cómo no ahogarte en el mar de tecnologías. Qué aprender, qué ignorar y por qué. Filtramos el ruido por ti.",
  },
  {
    icon: WorkspacePremiumRoundedIcon,
    title: "Listo para entrevistas",
    body: "Lo que de verdad evalúan, errores que te tumban y experiencias reales de procesos técnicos. Sin teoría de relleno.",
  },
  {
    icon: SportsEsportsRoundedIcon,
    title: "Y algo de gaming",
    body: "Porque no todo es código. De vez en cuando, gaming para despejar la mente y compartir un buen rato.",
  },
];

export default function Features() {
  return (
    <Box
      id="la-serie"
      component="section"
      sx={{
        py: { xs: 8, md: 14 },
        scrollMarginTop: 90,
        borderTop: "1px solid #21262d",
        borderBottom: "1px solid #21262d",
        background:
          "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(137,87,229,0.07), transparent 70%)",
      }}
    >
      <Container>
        <Reveal sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
          <Typography
            variant="overline"
            sx={{ color: "primary.light", letterSpacing: 2, fontWeight: 600 }}
          >
            LA SERIE
          </Typography>
          <Typography variant="h2" sx={{ mt: 1.5, fontSize: { xs: 30, md: 46 } }}>
            Qué vas a encontrar
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mt: 2, maxWidth: 620, mx: "auto", fontSize: { md: 18 } }}
          >
            Contenido pensado para que progreses de verdad, no para acumular likes.
          </Typography>
        </Reveal>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
            gap: 2.5,
          }}
        >
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <MotionPaper
                key={f.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: 3,
                  bgcolor: "#161b22",
                  transition: "border-color .25s ease, box-shadow .25s ease",
                  "&:hover": {
                    borderColor: "rgba(163,113,247,0.5)",
                    boxShadow: "0 18px 40px -22px rgba(137,87,229,0.6)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 46,
                    height: 46,
                    borderRadius: 2,
                    display: "grid",
                    placeItems: "center",
                    mb: 2,
                    color: "primary.light",
                    bgcolor: "rgba(163,113,247,0.12)",
                    border: "1px solid rgba(163,113,247,0.3)",
                  }}
                >
                  <Icon />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {f.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                  {f.body}
                </Typography>
              </MotionPaper>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
