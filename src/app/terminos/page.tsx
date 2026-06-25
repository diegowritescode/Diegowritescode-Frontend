import type { Metadata } from "next";
import LegalPage, { Section, P, Bullets } from "@/components/legal/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: `Condiciones de uso del sitio web de ${site.name}.`,
};

export default function TerminosPage() {
  return (
    <LegalPage
      title="Términos y Condiciones"
      intro={`Estas son las reglas del juego para usar ${site.name}. Al navegar por este sitio, las aceptas. Directo y claro.`}
      updatedAt={site.legalLastUpdated}
    >
      <Section title="Aceptación de los términos">
        <P>
          Al acceder y utilizar este sitio web ({site.url}) aceptas estos Términos y Condiciones
          en su totalidad. Si no estás de acuerdo con alguno de ellos, por favor no utilices el
          sitio.
        </P>
      </Section>

      <Section title="Objeto del sitio">
        <P>
          {site.name} es un proyecto personal de divulgación sobre programación y desarrollo de
          software. Aquí se comparten retos, tips, consejos y experiencias con fines educativos e
          informativos. El contenido refleja opiniones y experiencias propias del autor.
        </P>
      </Section>

      <Section title="Uso del contenido educativo">
        <P>
          El contenido se ofrece &laquo;tal cual&raquo;, con fines formativos. No constituye
          asesoría profesional garantizada ni promesa de resultados (por ejemplo, conseguir un
          empleo o aprobar una entrevista). Cada persona es responsable de cómo aplica lo que
          aprende aquí.
        </P>
      </Section>

      <Section title="Propiedad intelectual">
        <P>
          La marca {site.name}, el logotipo, los textos, el diseño y los demás contenidos
          originales de este sitio pertenecen a su autor y están protegidos por la normativa de
          propiedad intelectual. Puedes:
        </P>
        <Bullets
          items={[
            "Compartir enlaces a este sitio y citar fragmentos breves dando la atribución correspondiente.",
            "Usar los consejos y técnicas en tus propios proyectos.",
          ]}
        />
        <P>No puedes, sin autorización previa:</P>
        <Bullets
          items={[
            "Copiar o reproducir el contenido de forma sustancial para publicarlo como propio.",
            "Utilizar la marca o el logotipo de forma que sugiera una relación o respaldo inexistente.",
          ]}
        />
      </Section>

      <Section title="Conducta del usuario">
        <P>Al usar el sitio te comprometes a no:</P>
        <Bullets
          items={[
            "Realizar acciones que puedan dañar, sobrecargar o comprometer la seguridad del sitio.",
            "Intentar acceder sin autorización a sistemas o datos relacionados con el sitio.",
            "Utilizar el sitio para fines ilícitos o contrarios a estos términos.",
          ]}
        />
      </Section>

      <Section title="Enlaces y contenido de terceros">
        <P>
          Este sitio puede incluir enlaces a plataformas externas (como Facebook o YouTube). No
          somos responsables del contenido, las políticas ni las prácticas de esos terceros. El
          acceso a dichos sitios se realiza bajo tu propia responsabilidad y sujeto a sus términos.
        </P>
      </Section>

      <Section title="Limitación de responsabilidad">
        <P>
          El sitio se ofrece sin garantías de disponibilidad ininterrumpida ni de ausencia de
          errores. En la medida que permita la ley aplicable, {site.name} no será responsable de
          daños directos o indirectos derivados del uso o la imposibilidad de uso del sitio o de su
          contenido.
        </P>
      </Section>

      <Section title="Modificaciones">
        <P>
          Podemos modificar estos Términos y Condiciones en cualquier momento. La versión vigente
          será siempre la publicada en esta página, con su fecha de actualización. El uso continuado
          del sitio tras un cambio implica la aceptación de la nueva versión.
        </P>
      </Section>

      <Section title="Legislación aplicable">
        <P>
          Estos términos se rigen por la legislación de {site.jurisdiction}. Cualquier controversia
          relacionada con el sitio se someterá a los tribunales competentes que correspondan según
          dicha legislación.
        </P>
      </Section>

      <Section title="Contacto">
        <P>
          Si tienes dudas sobre estos términos, escríbenos a{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
        </P>
      </Section>
    </LegalPage>
  );
}
