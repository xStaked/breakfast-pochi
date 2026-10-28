import { messages } from "@/lib/whatsapp";
import { WhatsappButton } from "@/components/whatsapp-button";

export default function NotFound() {
  return (
    <section className="page-404 shell">
      <p className="eyebrow">Página no encontrada</p>
      <h1 className="display-h1">Ups, esta página no existe</h1>
      <p className="lead prose-limit">
        Puede que el enlace esté desactualizado. Puedes volver al inicio, explorar nuestros
        desayunos sorpresa o escribirnos por WhatsApp y te ayudamos a encontrar lo que buscas.
      </p>
      <div className="hero__actions">
        <a className="btn btn--primary" href="/">
          Volver al inicio
        </a>
        <a className="btn btn--secondary" href="/#desayunos">
          Ver desayunos
        </a>
        <WhatsappButton
          message={messages.general}
          variant="secondary"
          events={[{ event: "whatsapp_click", params: { place: "pagina_404" } }]}
        >
          Hablar por WhatsApp
        </WhatsappButton>
      </div>
    </section>
  );
}
