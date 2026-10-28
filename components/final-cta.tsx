import Image from "next/image";
import { messages } from "@/lib/whatsapp";
import { WhatsappButton } from "@/components/whatsapp-button";

export function FinalCta() {
  return (
    <section className="section section--compact" id="detalle">
      <div className="shell">
        <div className="cta-panel">
          <div>
            <p className="eyebrow">Pochi Desayunos</p>
            <h2 className="display-h2">Hay momentos que merecen un detalle especial</h2>
            <p className="lead prose-limit" style={{ marginTop: "18px" }}>
              Encuentra tu desayuno sorpresa favorito y prepara una sorpresa bonita para esa
              persona que tanto quieres.
            </p>

            <div className="cta-panel__actions">
              <a className="btn btn--primary" href="#desayunos">
                Elegir mi desayuno
              </a>
              <WhatsappButton
                message={messages.general}
                variant="light"
                events={[{ event: "whatsapp_click", params: { place: "cta_final" } }]}
              >
                Hablar por WhatsApp
              </WhatsappButton>
            </div>
          </div>

          <Image
            src="/images/logo-pochi.png"
            alt="Ilustración del logotipo de Pochi Desayunos con un perrito y un gatito vestidos de chefs"
            width={1056}
            height={576}
            loading="lazy"
            className="cta-panel__logo"
            sizes="(max-width: 767px) 80vw, 340px"
          />
        </div>
      </div>
    </section>
  );
}
