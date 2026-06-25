/**
 * Datos compartidos del sitio. Edita aquí y se actualiza en toda la web
 * (footer, páginas legales, metadata, etc.).
 */
export const site = {
  name: "Diegowritescode",
  realName: "Diego Andrés Ramírez Mejía",
  role: "Backend Engineer & Full Stack Developer",
  location: "Medellín, Colombia",
  url: "https://diegowritescode.deviego.xyz",
  // Correo para contacto / temas legales.
  contactEmail: "diegowritescode@gmail.com",
  // País cuya legislación aplica a los términos.
  jurisdiction: "Colombia",
  facebook: "https://www.facebook.com/Diegowritescode",
  linkedin: "https://www.linkedin.com/in/diegoandres-ramirez-mejia",
  github: "https://github.com/diegowritescode",
  // Fecha de última actualización de las páginas legales (formato legible).
  legalLastUpdated: "25 de junio de 2026",
} as const;

/** Stack real, para el marquee y secciones de tecnología. */
export const techStack = [
  "Node.js",
  "TypeScript",
  "Java",
  "Spring Boot",
  "Python",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "RabbitMQ",
  "Docker",
  "Kubernetes",
  "AWS",
  "Linux",
  "Nginx",
  "REST APIs",
  "n8n",
  "Git",
] as const;
