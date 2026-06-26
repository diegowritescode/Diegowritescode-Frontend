"use client";

import * as React from "react";
import { motion } from "motion/react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import DoNotDisturbOnRoundedIcon from "@mui/icons-material/DoNotDisturbOnRounded";
import Reveal from "./Reveal";

const FOR_YOU = [
  "Estás empezando y te abruma no saber qué aprender primero.",
  "Quieres la verdad sobre las entrevistas técnicas, no consejos de relleno.",
  "Prefieres entender cómo piensa un ingeniero antes que memorizar sintaxis.",
  "Estás dispuesto a practicar constante, aunque sea un reto al día.",
  "Te cansaste de los gurús que venden humo y atajos mágicos.",
];

const NOT_FOR_YOU = [
  'Buscas volverte "senior en 3 meses" sin esfuerzo.',
  "Quieres que te endulcen las cosas y te digan lo que quieres oír.",
  "Coleccionas cursos pero nunca terminas ninguno.",
  "Crees que el último framework de moda es lo único que importa.",
  "No aguantas que te digan las cosas sin filtro.",
];

function Column({
  title,
  items,
  positive,
  delay = 0,
}: {
  title: string;
  items: string[];
  positive: boolean;
  delay?: number;
}) {
  const color = positive ? "#3fb950" : "#f85149";
  const Icon = positive ? CheckCircleRoundedIcon : DoNotDisturbOnRoundedIcon;
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      sx={{
        p: { xs: 3, md: 4 },
        height: "100%",
        borderRadius: 4,
        bgcolor: "#161b22",
        border: "1px solid #30363d",
        borderTop: `3px solid ${color}`,
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color }}>
        {title}
      </Typography>
      <Stack spacing={2.2}>
        {items.map((text, i) => (
          <Box
            key={i}
            component={motion.div}
            initial={{ opacity: 0, x: positive ? -16 : 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + 0.15 + i * 0.08 }}
            sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}
          >
            <Icon sx={{ color, fontSize: 22, flexShrink: 0, mt: 0.2 }} />
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
              {text}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default function Audience() {
  return (
    <Box
      id="para-quien"
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
            SIN RODEOS
          </Typography>
          <Typography variant="h2" sx={{ mt: 1.5, fontSize: { xs: 30, md: 46 } }}>
            ¿Esto es para ti?
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mt: 2, maxWidth: 640, mx: "auto", fontSize: { md: 18 } }}>
            Prefiero decirte la verdad de entrada: no soy para todo el mundo, y está bien.
          </Typography>
        </Reveal>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
            alignItems: "stretch",
          }}
        >
          <Column title="Sí, si…" items={FOR_YOU} positive delay={0} />
          <Column title="No, si…" items={NOT_FOR_YOU} positive={false} delay={0.1} />
        </Box>
      </Container>
    </Box>
  );
}
