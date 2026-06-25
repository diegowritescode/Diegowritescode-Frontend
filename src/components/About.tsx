"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Reveal from "./Reveal";

const TAGS = [
  "Sin filtros",
  "Mentalidad de ingeniero",
  "Anti-tutorial-hell",
  "Experiencias reales",
];

export default function About() {
  return (
    <Box id="sobre-mi" component="section" sx={{ py: { xs: 8, md: 14 }, scrollMarginTop: 90 }}>
      <Container>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
            gap: { xs: 4, md: 8 },
            alignItems: "center",
          }}
        >
          <Reveal>
            <Typography
              variant="overline"
              sx={{ color: "primary.light", letterSpacing: 2, fontWeight: 600 }}
            >
              SOBRE MÍ
            </Typography>
            <Typography variant="h2" sx={{ mt: 1.5, fontSize: { xs: 30, md: 44 } }}>
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
            <Stack spacing={2.5}>
              <Typography variant="body1" sx={{ color: "text.secondary", fontSize: { md: 18 } }}>
                Soy Diego. Llevo años escribiendo código y, sobre todo, equivocándome
                en el camino. Creé <strong style={{ color: "#e6edf3" }}>Diegowritescode</strong>{" "}
                porque el ecosistema está lleno de gurús que te venden humo y
                tutoriales que te dejan justo donde empezaste.
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", fontSize: { md: 18 } }}>
                Aquí vas a encontrar la verdad incómoda: lo que realmente importa en
                una entrevista, por qué no necesitas aprender 14 frameworks, y cómo
                pensar como ingeniero en vez de memorizar sintaxis. Directo, honesto y
                con experiencias propias —de las buenas y de las malas.
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ pt: 0.5 }}>
                {TAGS.map((t) => (
                  <Chip
                    key={t}
                    label={t}
                    variant="outlined"
                    sx={{
                      borderColor: "#30363d",
                      color: "text.secondary",
                      bgcolor: "rgba(177,186,196,0.04)",
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}
