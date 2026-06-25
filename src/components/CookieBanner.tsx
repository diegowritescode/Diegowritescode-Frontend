"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MuiLink from "@mui/material/Link";
import Link from "next/link";
import CookieRoundedIcon from "@mui/icons-material/CookieRounded";

const STORAGE_KEY = "dwc-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    // Mostramos solo si aún no hay una decisión guardada.
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      /* localStorage no disponible: no mostramos el banner */
    }
  }, []);

  const decide = (value: "all" | "essential") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <Box
          component={motion.div}
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          sx={{
            position: "fixed",
            bottom: { xs: 12, md: 20 },
            left: 0,
            right: 0,
            zIndex: 1500,
            px: 2,
          }}
        >
          <Container maxWidth="md">
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { md: "center" },
                gap: 2,
                p: { xs: 2.5, md: 3 },
                borderRadius: 3,
                bgcolor: "rgba(22,27,34,0.92)",
                backdropFilter: "saturate(180%) blur(14px)",
                border: "1px solid #30363d",
                boxShadow: "0 20px 50px -20px rgba(0,0,0,0.7)",
              }}
            >
              <CookieRoundedIcon sx={{ color: "primary.light", fontSize: 30, flexShrink: 0 }} />
              <Typography variant="body2" sx={{ color: "text.secondary", flex: 1 }}>
                Uso cookies esenciales para que el sitio funcione y, si lo aceptas, cookies de
                analítica anónima para mejorar el contenido. Puedes leer más en la{" "}
                <MuiLink component={Link} href="/cookies" sx={{ color: "primary.light" }}>
                  Política de Cookies
                </MuiLink>
                .
              </Typography>
              <Stack direction={{ xs: "row" }} spacing={1.5} sx={{ flexShrink: 0 }}>
                <Button variant="outlined" size="small" onClick={() => decide("essential")}>
                  Solo esenciales
                </Button>
                <Button variant="contained" size="small" onClick={() => decide("all")}>
                  Aceptar
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>
      )}
    </AnimatePresence>
  );
}
