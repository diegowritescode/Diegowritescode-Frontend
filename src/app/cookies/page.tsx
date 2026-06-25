import type { Metadata } from "next";
import LegalPage, { Section, P, Bullets } from "@/components/legal/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: `Qué cookies usa ${site.name} y cómo puedes gestionarlas.`,
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Política de Cookies"
      intro="Sin trucos: aquí te contamos qué cookies usamos, para qué, y cómo desactivarlas si quieres."
      updatedAt={site.legalLastUpdated}
    >
      <Section title="Qué son las cookies">
        <P>
          Las cookies son pequeños archivos que un sitio web guarda en tu dispositivo cuando lo
          visitas. Sirven, entre otras cosas, para que el sitio funcione correctamente y para
          recordar ciertas preferencias o medir su uso.
        </P>
      </Section>

      <Section title="Qué cookies utilizamos">
        <P>
          {site.name} es un sitio sencillo y, por ahora, hace un uso mínimo de cookies:
        </P>
        <Bullets
          items={[
            "Cookies técnicas o esenciales: necesarias para que el sitio se muestre y funcione correctamente. No requieren tu consentimiento.",
            "Cookies de analítica (si se habilitan en el futuro): nos ayudarían a entender de forma anónima y agregada cómo se usa la web. Solo se activarían con tu consentimiento.",
          ]}
        />
        <P>
          No utilizamos cookies de publicidad ni vendemos información a terceros con fines
          comerciales.
        </P>
      </Section>

      <Section title="Cookies de terceros">
        <P>
          Si en alguna página incrustamos contenido externo (por ejemplo, vídeos de YouTube o
          publicaciones de Facebook), esas plataformas pueden instalar sus propias cookies cuando
          interactúas con dicho contenido. Su uso se rige por las políticas de cada proveedor.
        </P>
      </Section>

      <Section title="Cómo gestionar o desactivar las cookies">
        <P>
          Puedes controlar y eliminar las cookies desde la configuración de tu navegador. Aquí
          tienes los accesos habituales:
        </P>
        <Bullets
          items={[
            "Google Chrome: Configuración → Privacidad y seguridad → Cookies.",
            "Mozilla Firefox: Ajustes → Privacidad y seguridad.",
            "Safari: Preferencias → Privacidad.",
            "Microsoft Edge: Configuración → Cookies y permisos del sitio.",
          ]}
        />
        <P>
          Ten en cuenta que si desactivas las cookies técnicas algunas partes del sitio podrían no
          funcionar correctamente.
        </P>
      </Section>

      <Section title="Cambios en esta política">
        <P>
          Podemos actualizar esta Política de Cookies si cambian las cookies que utilizamos o la
          normativa aplicable. La versión vigente será siempre la publicada en esta página.
        </P>
      </Section>

      <Section title="Contacto">
        <P>
          Si tienes dudas sobre el uso de cookies, escríbenos a{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
        </P>
      </Section>
    </LegalPage>
  );
}
