import type { Metadata } from "next";
import LegalPage, { Section, P, Bullets } from "@/components/legal/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: `Cómo ${site.name} trata tus datos personales y respeta tu privacidad.`,
};

export default function PrivacidadPage() {
  return (
    <LegalPage
      title="Política de Privacidad"
      intro={`En ${site.name} nos tomamos en serio tu privacidad. Aquí te explicamos, sin letra pequeña ni rodeos, qué datos tratamos y para qué.`}
      updatedAt={site.legalLastUpdated}
    >
      <Section title="Responsable del tratamiento">
        <P>
          El responsable de este sitio web ({site.url}) y del tratamiento de los datos es{" "}
          {site.name}. Para cualquier consulta relacionada con tus datos personales o esta
          política, puedes escribir a <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
        </P>
      </Section>

      <Section title="Qué datos recopilamos">
        <P>
          Este sitio es, por ahora, una página informativa. No tiene formularios de registro,
          inicio de sesión ni venta de productos. En consecuencia, recopilamos una cantidad
          mínima de información:
        </P>
        <Bullets
          items={[
            "Datos de navegación técnicos que tu navegador envía automáticamente (dirección IP, tipo de navegador, sistema operativo, páginas visitadas), necesarios para servir el sitio.",
            "Información de uso de forma agregada y anónima, si en el futuro se habilitan herramientas de analítica, para entender qué contenido resulta útil.",
            "Los datos que tú decidas compartir voluntariamente si nos escribes por correo o por nuestras redes sociales.",
          ]}
        />
        <P>
          No recopilamos datos sensibles ni elaboramos perfiles para tomar decisiones
          automatizadas sobre ti.
        </P>
      </Section>

      <Section title="Con qué finalidad y base legal">
        <P>Tratamos esa información para:</P>
        <Bullets
          items={[
            "Mostrar correctamente el sitio y garantizar su seguridad y funcionamiento (interés legítimo).",
            "Entender de forma agregada cómo se usa la web para mejorar el contenido (consentimiento, cuando se trate de analítica no esencial).",
            "Responder a tus mensajes o solicitudes (tu consentimiento al contactarnos).",
          ]}
        />
      </Section>

      <Section title="Cookies">
        <P>
          Utilizamos únicamente las cookies necesarias para el funcionamiento del sitio y,
          eventualmente, cookies de analítica de forma anónima. Puedes consultar el detalle en
          nuestra <a href="/cookies">Política de Cookies</a>.
        </P>
      </Section>

      <Section title="Servicios de terceros">
        <P>
          Para prestar el servicio nos apoyamos en terceros que pueden tratar datos técnicos por
          su cuenta y bajo sus propias políticas:
        </P>
        <Bullets
          items={[
            "Proveedor de alojamiento (hosting) donde se ejecuta este sitio.",
            "Plataformas externas a las que enlazamos, como Facebook y YouTube, que tienen sus propias políticas de privacidad cuando visitas sus contenidos.",
          ]}
        />
        <P>
          Te recomendamos revisar las políticas de privacidad de esas plataformas cuando accedas
          a ellas desde aquí.
        </P>
      </Section>

      <Section title="Cuánto tiempo conservamos los datos">
        <P>
          Conservamos la información solo durante el tiempo necesario para las finalidades
          descritas o mientras exista una obligación legal de conservarla. Los registros técnicos
          se mantienen durante periodos cortos y los correos, mientras sean necesarios para
          atender tu solicitud.
        </P>
      </Section>

      <Section title="Tus derechos">
        <P>En relación con tus datos personales, tienes derecho a:</P>
        <Bullets
          items={[
            "Acceder a los datos que tratamos sobre ti.",
            "Rectificar los que sean inexactos.",
            "Solicitar su supresión cuando ya no sean necesarios.",
            "Oponerte o limitar su tratamiento, y retirar tu consentimiento en cualquier momento.",
            "Solicitar la portabilidad de tus datos cuando proceda.",
          ]}
        />
        <P>
          Para ejercer cualquiera de estos derechos, escríbenos a{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>. También puedes presentar
          una reclamación ante la autoridad de protección de datos de tu país si consideras que no
          hemos atendido tu solicitud adecuadamente.
        </P>
      </Section>

      <Section title="Cambios en esta política">
        <P>
          Podemos actualizar esta Política de Privacidad para reflejar cambios en el sitio o en la
          normativa. Publicaremos siempre la versión vigente en esta página, indicando la fecha de
          la última actualización.
        </P>
      </Section>
    </LegalPage>
  );
}
