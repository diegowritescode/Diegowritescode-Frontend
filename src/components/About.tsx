"use client";

import * as React from "react";
import { motion } from "motion/react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import Reveal from "./Reveal";

const TAGS = ["Sin filtros", "Mentalidad de ingeniero", "Anti-tutorial-hell", "Experiencias reales"];

const CRED = [
  { icon: SecurityRoundedIcon, text: "Backend Engineer en fintech, en sistemas de alta seguridad y producción real." },
  { icon: AccountTreeRoundedIcon, text: "De legacy (AS400/IBM iSeries) a stacks modernos: Node.js, Java, Spring Boot." },
  { icon: RocketLaunchRoundedIcon, text: "De bootcamp (Riwi) a sistemas en producción en 3 años. Sé lo que es empezar de cero." },
];

export default function About() {
  return (
    <Box id="sobre-mi" component="section" sx={{ py: { xs: 8, md: 14 }, scrollMarginTop: 90 }}>
      <Container>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 5, md: 8 },
            alignItems: "center",
          }}
        >
          <Box>
            <Reveal>
              <Typography variant="overline" sx={{ color: "primary.light", letterSpacing: 2, fontWeight: 600 }}>
                SOBRE MÍ
              </Typography>
              <Typography variant="h2" sx={{ mt: 1.5, fontSize: { xs: 30, md: 46 } }}>
                No vengo a caerte bien.
                <br />
                Vengo a que{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  no te rindas
                </Box>
                .
              </Typography>
            </Reveal>

            <Reveal delay={0.1}>
              <Stack spacing={2.5} sx={{ mt: 3 }}>
                <Typography variant="body1" sx={{ color: "text.secondary", fontSize: { md: 18 } }}>
                  Soy <strong style={{ color: "#e6edf3" }}>Diego</strong>, ingeniero backend desde
                  Medellín. Hoy construyo y valido sistemas financieros en producción —de los que
                  no pueden caerse— y antes pasé por todo lo que tú estás pasando: el bootcamp, el
                  síndrome del impostor y el caos de no saber qué aprender.
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", fontSize: { md: 18 } }}>
                  Creé <strong style={{ color: "#e6edf3" }}>Diegowritescode</strong> porque el
                  ecosistema está saturado de gurús que venden humo y tutoriales que te dejan justo
                  donde empezaste. Aquí vas a encontrar la verdad incómoda: lo que de verdad importa
                  en una entrevista, por qué no necesitas 14 frameworks, y cómo pensar como
                  ingeniero. Directo, honesto y desde la trinchera.
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ pt: 0.5 }}>
                  {TAGS.map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      variant="outlined"
                      sx={{ borderColor: "#30363d", color: "text.secondary", bgcolor: "rgba(177,186,196,0.04)" }}
                    />
                  ))}
                </Stack>
              </Stack>
            </Reveal>
          </Box>

          {/* Tarjeta de credibilidad */}
          <Reveal delay={0.15}>
            <Paper
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                bgcolor: "#0f141b",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  top: -60,
                  right: -60,
                  width: 200,
                  height: 200,
                  background: "radial-gradient(circle, rgba(163,113,247,0.18), transparent 70%)",
                }}
              />
              <Stack direction="row" spacing={1.2} alignItems="center" sx={{ mb: 3, position: "relative" }}>
                <VerifiedRoundedIcon sx={{ color: "primary.light" }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Por qué escucharme
                </Typography>
              </Stack>
              <Stack spacing={2.5} sx={{ position: "relative" }}>
                {CRED.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <Box
                      key={i}
                      component={motion.div}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                      sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}
                    >
                      <Box
                        sx={{
                          flexShrink: 0,
                          width: 40,
                          height: 40,
                          borderRadius: 2,
                          display: "grid",
                          placeItems: "center",
                          color: "primary.light",
                          bgcolor: "rgba(163,113,247,0.12)",
                          border: "1px solid rgba(163,113,247,0.3)",
                        }}
                      >
                        <Icon sx={{ fontSize: 20 }} />
                      </Box>
                      <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7, pt: 0.6 }}>
                        {c.text}
                      </Typography>
                    </Box>
                  );
                })}
              </Stack>
            </Paper>
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}
