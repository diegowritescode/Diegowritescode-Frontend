"use client";

import * as React from "react";
import { motion } from "motion/react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { monoFontFamily } from "@/app/theme";

const MotionStack = motion.create(Stack);

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const } },
};

export default function Hero() {
  return (
    <Box
      id="top"
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: { xs: 16, md: 22 },
        pb: { xs: 10, md: 16 },
      }}
    >
      {/* Resplandores púrpura animados de fondo */}
      <Box
        component={motion.div}
        aria-hidden
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: "-12%",
          left: "50%",
          translate: "-50% 0",
          width: { xs: 420, md: 720 },
          height: { xs: 420, md: 720 },
          background: "radial-gradient(circle, rgba(137,87,229,0.30) 0%, rgba(137,87,229,0) 65%)",
          filter: "blur(8px)",
          pointerEvents: "none",
        }}
      />
      {/* Rejilla sutil */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(48,54,61,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(48,54,61,0.5) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 30%, transparent 75%)",
          pointerEvents: "none",
        }}
      />

      <Container sx={{ position: "relative" }}>
        <MotionStack
          variants={container}
          initial="hidden"
          animate="show"
          spacing={3}
          alignItems="center"
          textAlign="center"
        >
          <motion.div variants={item}>
            <Chip
              icon={<BoltRoundedIcon sx={{ fontSize: 18 }} />}
              label="Un reto de programación por cada día del año"
              sx={{
                borderRadius: 999,
                px: 1,
                py: 2.2,
                bgcolor: "rgba(163,113,247,0.10)",
                border: "1px solid rgba(163,113,247,0.35)",
                color: "primary.light",
                fontWeight: 500,
                "& .MuiChip-icon": { color: "primary.light" },
              }}
            />
          </motion.div>

          <motion.div variants={item}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: 40, sm: 56, md: 76 },
                maxWidth: 980,
              }}
            >
              Programación{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(120deg, #c8a2ff 0%, #a371f7 45%, #8957e5 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                sin pelos en la lengua
              </Box>
            </Typography>
          </motion.div>

          <motion.div variants={item}>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", fontSize: { xs: 17, md: 20 }, maxWidth: 680 }}
            >
              Retos diarios, tips reales para juniors y las verdades que necesitas
              escuchar para no ahogarte en el mar de tecnologías. Aquí no vengo a
              gustarte: vengo a que mejores.
            </Typography>
          </motion.div>

          <motion.div variants={item}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 1 }}>
              <Button
                size="large"
                variant="contained"
                startIcon={<PlayArrowRoundedIcon />}
                href="#contacto"
              >
                Próximamente en YouTube
              </Button>
              <Button
                size="large"
                variant="outlined"
                endIcon={<ArrowForwardRoundedIcon />}
                href="#sobre-mi"
              >
                Conóceme
              </Button>
            </Stack>
          </motion.div>

          <motion.div variants={item} style={{ width: "100%" }}>
            <Box
              sx={{
                mt: { xs: 4, md: 7 },
                mx: "auto",
                maxWidth: 560,
                textAlign: "left",
                borderRadius: 3,
                overflow: "hidden",
                border: "1px solid #30363d",
                bgcolor: "#161b22",
                boxShadow: "0 24px 60px -20px rgba(137,87,229,0.45)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 1.2,
                  borderBottom: "1px solid #21262d",
                }}
              >
                <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ff5f56" }} />
                <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ffbd2e" }} />
                <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#27c93f" }} />
                <Box sx={{ ml: 1, color: "text.secondary", fontSize: 13, fontFamily: monoFontFamily }}>
                  ~/diegowritescode
                </Box>
              </Box>
              <Box
                sx={{
                  p: { xs: 2, md: 2.5 },
                  fontFamily: monoFontFamily,
                  fontSize: { xs: 13, md: 14.5 },
                  lineHeight: 1.8,
                }}
              >
                <Box component="div" sx={{ color: "#8b949e" }}>
                  <Box component="span" sx={{ color: "primary.light" }}>$</Box> whoami
                </Box>
                <Box component="div" sx={{ color: "text.primary" }}>diego — dev &amp; creador de contenido</Box>
                <Box component="div" sx={{ color: "#8b949e", mt: 1 }}>
                  <Box component="span" sx={{ color: "primary.light" }}>$</Box> cat mision.txt
                </Box>
                <Box component="div" sx={{ color: "text.primary" }}>
                  decir las verdades que nadie te dice{" "}
                  <Box
                    component={motion.span}
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    sx={{ display: "inline-block", width: 9, height: 18, bgcolor: "primary.main", verticalAlign: "-3px", ml: 0.3 }}
                  />
                </Box>
              </Box>
            </Box>
          </motion.div>
        </MotionStack>
      </Container>
    </Box>
  );
}
