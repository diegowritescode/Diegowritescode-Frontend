"use client";

import * as React from "react";
import { useReducedMotion } from "motion/react";

/**
 * Escribe y borra frases en bucle, estilo terminal.
 * Si el usuario prefiere movimiento reducido, muestra la primera frase fija.
 */
export default function Typewriter({
  phrases,
  typingSpeed = 55,
  deletingSpeed = 28,
  pause = 1600,
}: {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = React.useState(0);
  const [text, setText] = React.useState("");
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    if (reduce) return;
    const current = phrases[index % phrases.length];

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
      return;
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        );
      },
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, phrases, typingSpeed, deletingSpeed, pause, reduce]);

  return <span>{reduce ? phrases[0] : text}</span>;
}
