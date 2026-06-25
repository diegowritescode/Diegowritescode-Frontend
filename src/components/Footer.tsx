"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import MuiLink from "@mui/material/Link";
import Link from "next/link";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import Logo from "./Logo";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

const LEGAL = [
  { label: "Privacidad", href: "/privacidad" },
  { label: "Términos", href: "/terminos" },
  { label: "Cookies", href: "/cookies" },
];

const SOCIALS = [
  { label: "Facebook", href: site.facebook, icon: FacebookRoundedIcon, ready: true },
  { label: "YouTube (próximamente)", href: "#contacto", icon: YouTubeIcon, ready: false },
  { label: "LinkedIn", href: site.linkedin, icon: LinkedInIcon, ready: true },
  { label: "GitHub", href: site.github, icon: GitHubIcon, ready: true },
  { label: "Correo", href: `mailto:${site.contactEmail}`, icon: EmailRoundedIcon, ready: false },
];

export default function Footer() {
  return (
    <Box id="contacto" component="footer" sx={{ scrollMarginTop: 90 }}>
      {/* CTA final */}
      <Box sx={{ py: { xs: 9, md: 14 } }}>
        <Container>
          <Reveal sx={{ textAlign: "center" }}>
            <Logo size={52} />
            <Typography variant="h2" sx={{ mt: 3, fontSize: { xs: 30, md: 48 }, maxWidth: 760, mx: "auto" }}>
              Deja de consumir humo.{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Empieza a mejorar.
              </Box>
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mt: 2.5, maxWidth: 560, mx: "auto", fontSize: { md: 18 } }}>
              Sígueme en redes para no perderte el lanzamiento del canal y los retos
              diarios. Cero relleno, puro contenido útil.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" sx={{ mt: 4 }}>
              <Button
                size="large"
                variant="contained"
                startIcon={<FacebookRoundedIcon />}
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                Sígueme en Facebook
              </Button>
              <Button
                size="large"
                variant="outlined"
                startIcon={<NotificationsActiveRoundedIcon />}
                href="/"
              >
                Avísame del canal
              </Button>
            </Stack>
          </Reveal>
        </Container>
      </Box>

      {/* Barra inferior */}
      <Box sx={{ borderTop: "1px solid #21262d", py: 3 }}>
        <Container>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" spacing={1.2} alignItems="center">
              <Logo size={26} />
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                © {new Date().getFullYear()} Diegowritescode. Hecho con código y sin filtros.
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={2.5}
              flexWrap="wrap"
              justifyContent="center"
              useFlexGap
            >
              {LEGAL.map((l) => (
                <MuiLink
                  key={l.href}
                  component={Link}
                  href={l.href}
                  underline="none"
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "primary.light" },
                  }}
                >
                  {l.label}
                </MuiLink>
              ))}
            </Stack>

            <Stack direction="row" spacing={0.5}>
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <Tooltip key={s.label} title={s.label} arrow>
                    <span>
                      <IconButton
                        component="a"
                        href={s.href}
                        target={s.ready ? "_blank" : undefined}
                        rel={s.ready ? "noopener noreferrer" : undefined}
                        aria-label={s.label}
                        sx={{
                          color: "text.secondary",
                          "&:hover": { color: "primary.light", bgcolor: "rgba(163,113,247,0.1)" },
                        }}
                      >
                        <Icon />
                      </IconButton>
                    </span>
                  </Tooltip>
                );
              })}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
