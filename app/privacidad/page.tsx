import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description:
    "Cómo trata Pochi Desayunos la información que compartes al consultar o hacer un pedido por WhatsApp.",
};

export default function PrivacyPage() {
  return (
    <section className="section shell">
      <div className="section-head">
        <p className="eyebrow">Información legal</p>
        <h1 className="display-h2">Aviso de privacidad</h1>
      </div>

      <div className="prose-limit" style={{ display: "grid", gap: "18px" }}>
        <p className="pill-note">Borrador pendiente de validación por el negocio</p>

        <p>
          Este aviso describe cómo se trata la información en el sitio web de Pochi Desayunos.
          El texto definitivo debe ser revisado y aprobado por el negocio antes de publicar el
          sitio.
        </p>

        <h2 className="display-h3">Qué información se trata</h2>
        <p>
          Este sitio no tiene formularios, cuentas de usuario ni pagos en línea. La información
          que compartes (nombre, datos de contacto, dirección de entrega y detalles del pedido)
          la proporcionas directamente en la conversación de WhatsApp cuando consultas o haces
          un pedido.
        </p>

        <h2 className="display-h3">Para qué se usa</h2>
        <p>
          La información se usa para responder tus consultas, confirmar la disponibilidad de tu
          pedido y coordinar la entrega del producto que elegiste.
        </p>

        <h2 className="display-h3">Servicios de terceros</h2>
        <p>
          La conversación de pedido se realiza a través de WhatsApp, cuyo tratamiento de datos
          se rige por las políticas de ese servicio. Si el negocio integra herramientas de
          medición de audiencia, se informará aquí y se solicitará el consentimiento que
          corresponda.
        </p>

        <h2 className="display-h3">Contacto</h2>
        <p>
          Para consultar sobre tus datos o solicitar su eliminación, escríbenos por WhatsApp.
          El canal de contacto se publica en cuanto el negocio confirma su número.
        </p>
      </div>
    </section>
  );
}
