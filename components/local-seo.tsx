import { Gift, MapPin, MessageCircle } from "lucide-react";
import { brand } from "@/lib/site";
import { messages } from "@/lib/whatsapp";
import { WhatsappButton } from "@/components/whatsapp-button";

export function LocalSeo() {
  return (
    <section className="section" id="soacha">
      <div className="shell">
        <div className="local-panel">
          <div>
            <p className="eyebrow">Pochi en Soacha</p>
            <h2 className="display-h2">Desayunos sorpresa en Soacha, Cundinamarca</h2>
            <p className="lead prose-limit" style={{ marginTop: "18px" }}>
              En Pochi Desayunos creemos que los pequeños detalles pueden convertirse en
              grandes recuerdos. Por eso, reunimos opciones de desayunos sorpresa y cajas de
              regalo para cumpleaños, aniversarios y otras ocasiones especiales.
            </p>
            <p className="lead prose-limit" style={{ marginTop: "14px" }}>
              Si estás buscando un desayuno sorpresa en Soacha, descubre nuestros productos,
              compara sus opciones y contáctanos para consultar disponibilidad, precios y
              condiciones de entrega.
            </p>

            <div className="local-panel__actions">
              <a className="btn btn--secondary" href="#desayunos">
                Ver el catálogo
              </a>
              <WhatsappButton
                message={messages.general}
                events={[{ event: "whatsapp_click", params: { place: "seo_local" } }]}
              >
                Consultar por WhatsApp
              </WhatsappButton>
            </div>
          </div>

          <ul className="local-facts">
            <li className="local-fact">
              <MapPin size={22} aria-hidden="true" />
              <div>
                <p className="local-fact__label">{brand.location.display}</p>
                <p className="local-fact__text">
                  Atendemos desde Soacha. La cobertura de entrega se confirma según el sector.
                </p>
              </div>
            </li>
            <li className="local-fact">
              <Gift size={22} aria-hidden="true" />
              <div>
                <p className="local-fact__label">Cuatro cajas para elegir</p>
                <p className="local-fact__text">
                  Mini Box, Brunch Box, Smile Box y Teddy Box, con su contenido y precio a la
                  vista.
                </p>
              </div>
            </li>
            <li className="local-fact">
              <MessageCircle size={22} aria-hidden="true" />
              <div>
                <p className="local-fact__label">Pedidos por WhatsApp</p>
                <p className="local-fact__text">
                  Resolvemos tus dudas y confirmamos disponibilidad antes de tu pedido.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
