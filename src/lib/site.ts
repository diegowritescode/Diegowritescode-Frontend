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

/** Proyectos destacados (del CV). Edita o amplía cuando quieras. */
export const projects = [
  {
    name: "LedgerCore",
    tagline: "Ecosistema backend financiero seguro",
    description:
      "Núcleo financiero con identidad, cuentas, transferencias idempotentes, libro mayor inmutable, auditoría y notificaciones por eventos. Patrones senior: RBAC, consistencia transaccional y observabilidad.",
    tags: ["Java", "Spring Boot", "Node.js", "PostgreSQL", "RabbitMQ", "Kubernetes"],
    accent: "#a371f7",
  },
  {
    name: "SentinelRisk",
    tagline: "Motor de detección de fraude en tiempo real",
    description:
      "Servicio de scoring que consume eventos de transacciones de forma asíncrona, evalúa reglas de fraude y genera alertas explicables. Colas con reintentos, dead-letter y correlation IDs.",
    tags: ["Node.js", "Java", "Kafka", "Redis", "WebSockets"],
    accent: "#8957e5",
  },
  {
    name: "VaultIAM",
    tagline: "Plataforma de identidad y accesos",
    description:
      "Autenticación y autorización con RBAC, MFA, rotación de refresh tokens, hashing seguro, rate limiting y auditoría de inicios de sesión sospechosos.",
    tags: ["Spring Security", "JWT", "RBAC", "MFA", "PostgreSQL", "Redis"],
    accent: "#bc8cff",
  },
  {
    name: "LegacyBridge",
    tagline: "Capa de integración con sistemas legacy",
    description:
      "Fachada de API moderna sobre modelos legacy (DB2/AS400) con anti-corruption layer, DTOs de transformación, sincronización por lotes y flujos de reconciliación.",
    tags: ["Java", "Spring Boot", "DB2/AS400", "Batch", "Docker"],
    accent: "#7c5cff",
  },
  {
    name: "CloudOps Blueprint",
    tagline: "Despliegue en producción y observabilidad",
    description:
      "Blueprint de despliegue con servicios dockerizados, Nginx, SSL, CI/CD, health checks y rollback. Métricas, dashboards y logs estructurados para incidentes.",
    tags: ["Docker", "Nginx", "AWS", "GitHub Actions", "Prometheus", "Grafana"],
    accent: "#a371f7",
  },
] as const;

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
