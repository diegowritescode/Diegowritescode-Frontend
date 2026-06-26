"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import { monoFontFamily } from "@/app/theme";

type Status = "idle" | "loading" | "success" | "error";

export default function SubscribeForm() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<Status>("idle");
  const [message, setMessage] = React.useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data?.error ?? "Algo salió mal. Inténtalo de nuevo.");
      }
    } catch {
      setStatus("error");
      setMessage("Sin conexión. Revisa tu red e inténtalo de nuevo.");
    }
  };

  return (
    <Box sx={{ maxWidth: 480, mx: "auto", width: "100%" }}>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <Box
            key="success"
            component={motion.div}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.5,
              py: 2,
              px: 3,
              borderRadius: 2.5,
              border: "1px solid rgba(63,185,80,0.4)",
              bgcolor: "rgba(63,185,80,0.10)",
            }}
          >
            <CheckCircleRoundedIcon sx={{ color: "#3fb950" }} />
            <Typography sx={{ color: "#3fb950", fontWeight: 600 }}>
              ¡Listo! Serás de los primeros en enterarte.
            </Typography>
          </Box>
        ) : (
          <Box
            key="form"
            component={motion.form}
            onSubmit={submit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 1.2,
              p: 1,
              borderRadius: 2.5,
              border: "1px solid #30363d",
              bgcolor: "#0d1117",
              transition: "border-color .2s",
              "&:focus-within": { borderColor: "rgba(163,113,247,0.6)" },
            }}
          >
            <InputBase
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="tu@correo.com"
              inputProps={{ "aria-label": "Tu correo electrónico", maxLength: 254 }}
              sx={{
                flex: 1,
                px: 2,
                color: "text.primary",
                fontFamily: monoFontFamily,
                fontSize: 15,
                "& input::placeholder": { color: "#6e7681", opacity: 1 },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={status === "loading"}
              startIcon={
                status === "loading" ? (
                  <CircularProgress size={16} sx={{ color: "inherit" }} />
                ) : (
                  <NotificationsActiveRoundedIcon />
                )
              }
              sx={{ whiteSpace: "nowrap" }}
            >
              {status === "loading" ? "Enviando…" : "Avísame del canal"}
            </Button>
          </Box>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {status === "error" && message && (
          <Typography
            component={motion.p}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            variant="body2"
            sx={{ color: "#f85149", mt: 1.5, textAlign: "center" }}
          >
            {message}
          </Typography>
        )}
      </AnimatePresence>
    </Box>
  );
}
