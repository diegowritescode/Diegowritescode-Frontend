import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

type LegalPageProps = {
  title: string;
  intro: string;
  updatedAt: string;
  children: React.ReactNode;
};

export default function LegalPage({ title, intro, updatedAt, children }: LegalPageProps) {
  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          pt: { xs: 14, md: 18 },
          pb: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Resplandor sutil de cabecera */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            top: "-10%",
            left: "50%",
            translate: "-50% 0",
            width: 600,
            height: 480,
            background:
              "radial-gradient(circle, rgba(137,87,229,0.18) 0%, rgba(137,87,229,0) 65%)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="md" sx={{ position: "relative" }}>
          <Reveal>
            <Button
              component={Link}
              href="/"
              startIcon={<ArrowBackRoundedIcon />}
              sx={{ color: "text.secondary", mb: 3, ml: -1 }}
            >
              Volver al inicio
            </Button>

            <Typography variant="h1" sx={{ fontSize: { xs: 34, md: 52 }, mb: 1.5 }}>
              {title}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", fontSize: { md: 18 }, maxWidth: 680 }}>
              {intro}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 2, opacity: 0.8 }}>
              Última actualización: {updatedAt}
            </Typography>
          </Reveal>

          <Divider sx={{ my: { xs: 4, md: 6 }, borderColor: "#21262d" }} />

          <Reveal delay={0.05}>
            <Box
              sx={{
                "& h2": { scrollMarginTop: 90 },
                "& a": {
                  color: "primary.light",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                },
              }}
            >
              {children}
            </Box>
          </Reveal>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

/** Encabezado de sección legal. */
export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  const id = title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return (
    <Box component="section" sx={{ mb: { xs: 4, md: 5 } }}>
      <Typography id={id} component="h2" variant="h4" sx={{ fontSize: { xs: 22, md: 28 }, mb: 2 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

/** Párrafo legal. */
export function P({ children }: { children: React.ReactNode }) {
  return (
    <Typography variant="body1" sx={{ color: "text.secondary", fontSize: { md: 17 }, mb: 2 }}>
      {children}
    </Typography>
  );
}

/** Lista de viñetas. */
export function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <Box component="ul" sx={{ pl: 3, mb: 2, color: "text.secondary" }}>
      {items.map((it, i) => (
        <Typography
          key={i}
          component="li"
          variant="body1"
          sx={{ fontSize: { md: 17 }, mb: 1, "&::marker": { color: "#a371f7" } }}
        >
          {it}
        </Typography>
      ))}
    </Box>
  );
}
