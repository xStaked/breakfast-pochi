import { messages } from "@/lib/whatsapp";
import { WhatsappButton } from "@/components/whatsapp-button";

const steps = [
  {
    title: "Elige tu desayuno",
    text: "Explora nuestras opciones y encuentra el detalle ideal para esa persona especial.",
  },
  {
    title: "Escríbenos por WhatsApp",
    text: "Cuéntanos qué producto te gusta, para qué ocasión lo necesitas y cuándo te gustaría recibirlo.",
  },
  {
    title: "Confirma tu pedido",
    text: "Consulta disponibilidad, cobertura, valor de entrega y condiciones de pago antes de confirmar.",
  },
];

export function HowToOrder() {
  return (
    <section className="section" id="como-pedir">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">Cómo pedir</p>
          <h2 className="display-h2">¿Cómo hacer tu pedido?</h2>
          <p className="lead">
            Pedir un desayuno sorpresa es sencillo: eliges, nos escribes por WhatsApp y
            confirmamos contigo todos los detalles antes de preparar tu pedido.
          </p>
        </div>

        <ol className="steps">
          {steps.map((step, index) => (
            <li key={step.title} className="step">
              <span className="step__num" aria-hidden="true">
                {index + 1}
              </span>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__text">{step.text}</p>
            </li>
          ))}
        </ol>

        <p className="steps-note">
          La anticipación, la cobertura de entrega, los medios de pago y los horarios se
          confirman caso por caso antes de cerrar el pedido. Escríbenos con la fecha de tu
          sorpresa y te confirmamos la disponibilidad.
        </p>

        <div className="catalog-cta">
          <WhatsappButton
            message={messages.order}
            events={[{ event: "whatsapp_click", params: { place: "como_pedir" } }]}
          >
            Quiero hacer un pedido
          </WhatsappButton>
        </div>
      </div>
    </section>
  );
}
