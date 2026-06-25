"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
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
import Magnetic from "./Magnetic";
import Typewriter from "./Typewriter";

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const } },
};

const HEADLINE_PLAIN = "Programación";
const HEADLINE_ACCENT = ["sin", "pelos", "en", "la", "lengua"];

export default function Hero() {
  // Posición del ratón normalizada (-0.5 a 0.5) para el parallax de la aurora.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx1 = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy1 = useSpring(my, { stiffness: 60, damping: 20 });

  const glowAX = useTransform(sx1, (v) => v * 60);
  const glowAY = useTransform(sy1, (v) => v * 60);
  const glowBX = useTransform(sx1, (v) => v * -90);
  const glowBY = useTransform(sy1, (v) => v * -50);

  const handleMouse = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <Box
      id="top"
      component="section"
      onMouseMove={handleMouse}
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: { xs: 16, md: 22 },
        pb: { xs: 10, md: 16 },
      }}
    >
      {/* Aurora púrpura A (sigue el cursor) */}
      <Box
        component={motion.div}
        aria-hidden
        style={{ x: glowAX, y: glowAY }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.55, 0.8, 0.55] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: "-14%",
          left: "50%",
          translate: "-50% 0",
          width: { xs: 440, md: 760 },
          height: { xs: 440, md: 760 },
          background: "radial-gradient(circle, rgba(137,87,229,0.32) 0%, rgba(137,87,229,0) 65%)",
          filter: "blur(10px)",
          pointerEvents: "none",
        }}
      />
      {/* Aurora azul/violeta B (parallax inverso) */}
      <Box
        component={motion.div}
        aria-hidden
        style={{ x: glowBX, y: glowBY }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: "8%",
          left: "18%",
          width: { xs: 320, md: 520 },
          height: { xs: 320, md: 520 },
          background: "radial-gradient(circle, rgba(88,101,242,0.22) 0%, rgba(88,101,242,0) 70%)",
          filter: "blur(12px)",
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
        <Stack spacing={3} alignItems="center" textAlign="center">
          <motion.div initial="hidden" animate="show" variants={item}>
            <Chip
              icon={<BoltRoundedIcon sx={{ fontSize: 18 }} />}
              label="Backend Engineer en fintech · 3+ años en producción"
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

          {/* Titular con reveal palabra por palabra */}
          <Typography
            variant="h1"
            component={motion.h1}
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
            sx={{ fontSize: { xs: 40, sm: 56, md: 78 }, maxWidth: 1000 }}
          >
            <Word>{HEADLINE_PLAIN}</Word>{" "}
            {HEADLINE_ACCENT.map((w, i) => (
              <Word key={i} accent>
                {w}
              </Word>
            ))}
          </Typography>

          <motion.div initial="hidden" animate="show" variants={item} transition={{ delay: 0.7 }}>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", fontSize: { xs: 17, md: 20 }, maxWidth: 720 }}
            >
              No soy un gurú de tutoriales. Construyo sistemas financieros en producción —
              y aquí comparto las verdades que necesitas escuchar para no ahogarte en el mar
              de tecnologías. Retos diarios, tips reales para juniors y cero relleno.
            </Typography>
          </motion.div>

          <motion.div initial="hidden" animate="show" variants={item} transition={{ delay: 0.85 }}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 1 }}>
              <Magnetic>
                <Button size="large" variant="contained" startIcon={<PlayArrowRoundedIcon />} href="#contacto">
                  Próximamente en YouTube
                </Button>
              </Magnetic>
              <Magnetic strength={0.3}>
                <Button size="large" variant="outlined" endIcon={<ArrowForwardRoundedIcon />} href="#sobre-mi">
                  Conóceme
                </Button>
              </Magnetic>
            </Stack>
          </motion.div>

          {/* Terminal animada */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{ width: "100%" }}
          >
            <Box
              component={motion.div}
              whileHover={{ y: -4 }}
              sx={{
                mt: { xs: 4, md: 7 },
                mx: "auto",
                maxWidth: 580,
                textAlign: "left",
                borderRadius: 3,
                overflow: "hidden",
                border: "1px solid #30363d",
                bgcolor: "#161b22",
                boxShadow: "0 24px 70px -20px rgba(137,87,229,0.5)",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, px: 2, py: 1.2, borderBottom: "1px solid #21262d" }}>
                <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ff5f56" }} />
                <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ffbd2e" }} />
                <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#27c93f" }} />
                <Box sx={{ ml: 1, color: "text.secondary", fontSize: 13, fontFamily: monoFontFamily }}>
                  ~/diegowritescode
                </Box>
              </Box>
              <Box sx={{ p: { xs: 2, md: 2.5 }, fontFamily: monoFontFamily, fontSize: { xs: 13, md: 14.5 }, lineHeight: 1.9 }}>
                <Box component="div" sx={{ color: "#8b949e" }}>
                  <Box component="span" sx={{ color: "primary.light" }}>$</Box> whoami
                </Box>
                <Box component="div" sx={{ color: "text.primary" }}>
                  diego — backend engineer &amp; creador de contenido
                </Box>
                <Box component="div" sx={{ color: "#8b949e", mt: 1 }}>
                  <Box component="span" sx={{ color: "primary.light" }}>$</Box> echo $MISION
                </Box>
                <Box component="div" sx={{ color: "text.primary", minHeight: 28 }}>
                  <Typewriter
                    phrases={[
                      "decir las verdades que nadie te dice",
                      "que no te ahogues aprendiendo todo a la vez",
                      "prepararte para entrevistas de verdad",
                      "pensar como ingeniero, no memorizar sintaxis",
                    ]}
                  />
                  <Box
                    component={motion.span}
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.7, repeat: Infinity }}
                    sx={{ display: "inline-block", width: 9, height: 17, bgcolor: "primary.main", verticalAlign: "-3px", ml: 0.4 }}
                  />
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
}

/** Palabra animada para el reveal del titular. */
function Word({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <Box
      component={motion.span}
      variants={{
        hidden: { opacity: 0, y: "0.5em", rotate: 2 },
        show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
      }}
      sx={{
        display: "inline-block",
        mr: "0.25em",
        ...(accent && {
          background: "linear-gradient(120deg, #c8a2ff 0%, #a371f7 45%, #8957e5 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }),
      }}
    >
      {children}
    </Box>
  );
}
