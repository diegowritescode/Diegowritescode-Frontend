"use client";

import * as React from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Logo from "./Logo";

const NAV = [
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "La serie", href: "/#la-serie" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 12);
  });

  return (
    <AppBar
      component={motion.header}
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: scrolled ? "rgba(13,17,23,0.72)" : "transparent",
        backdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #21262d" : "1px solid transparent",
        transition: "background-color .3s ease, border-color .3s ease",
      }}
    >
      <Container>
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
          <Box
            component="a"
            href="/"
            sx={{ display: "flex", alignItems: "center", gap: 1.2, mr: "auto" }}
          >
            <Logo size={30} />
            <Box component="span" sx={{ fontWeight: 700, letterSpacing: "-0.02em", fontSize: 18 }}>
              diego
              <Box component="span" sx={{ color: "primary.main" }}>
                writescode
              </Box>
            </Box>
          </Box>

          {/* Navegación desktop */}
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {NAV.map((item) => (
              <Button
                key={item.href}
                href={item.href}
                color="inherit"
                sx={{ color: "text.secondary", "&:hover": { color: "text.primary", backgroundColor: "transparent" } }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              startIcon={<TerminalRoundedIcon />}
              href="/#contacto"
              sx={{ ml: 1 }}
            >
              Sígueme
            </Button>
          </Stack>

          {/* Menú móvil */}
          <IconButton
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "inline-flex", md: "none" }, color: "text.primary" }}
            aria-label="Abrir menú"
          >
            <MenuRoundedIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: 280, backgroundColor: "#0d1117", borderLeft: "1px solid #21262d" } }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton onClick={() => setOpen(false)} sx={{ color: "text.primary" }} aria-label="Cerrar menú">
            <CloseRoundedIcon />
          </IconButton>
        </Box>
        <List>
          {NAV.map((item) => (
            <ListItemButton key={item.href} component="a" href={item.href} onClick={() => setOpen(false)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ px: 2, pt: 1 }}>
          <Button fullWidth variant="contained" href="/#contacto" onClick={() => setOpen(false)}>
            Sígueme
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
