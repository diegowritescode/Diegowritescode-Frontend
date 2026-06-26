import { site } from "@/lib/site";

/**
 * Datos estructurados (schema.org) para mejorar cómo Google entiende
 * la identidad del sitio y su autor. Se inyectan como JSON-LD.
 */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description:
          "Retos de programación, tips reales para juniors y las verdades que necesitas escuchar. Sin filtros.",
        inLanguage: "es",
        publisher: { "@id": `${site.url}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.realName,
        alternateName: site.name,
        jobTitle: site.role,
        url: site.url,
        email: site.contactEmail,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Medellín",
          addressCountry: "CO",
        },
        sameAs: [site.facebook, site.linkedin, site.github],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
