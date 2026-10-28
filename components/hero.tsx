import Image from "next/image";
import { MapPin } from "lucide-react";
import { brand } from "@/lib/site";
import { messages } from "@/lib/whatsapp";
import { WhatsappButton } from "@/components/whatsapp-button";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="shell hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">Desayunos sorpresa y cajas de regalo</p>
          <h1 className="display-h1">
            Desayunos sorpresa en Soacha para regalar momentos inolvidables
          </h1>
          <p className="lead prose-limit">
            Convierte un cumpleaños, un aniversario o cualquier día especial en un recuerdo
            bonito. Descubre los desayunos sorpresa y cajas de regalo de Pochi.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#desayunos">
              Ver desayunos
            </a>
            <WhatsappButton
              message={messages.general}
              variant="secondary"
              events={[{ event: "whatsapp_click", params: { place: "hero" } }]}
            >
              Pedir por WhatsApp
            </WhatsappButton>
          </div>

          <ul className="hero__trust" aria-label="Opciones disponibles">
            <li className="chip">Opciones para diferentes ocasiones</li>
            <li className="chip">Elige tu favorito y consulta disponibilidad</li>
          </ul>
        </div>

        <figure className="hero__media">
          <svg
            className="hero__blob"
            viewBox="0 0 200 200"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M43.6 -63.6C56.9 -55.9 68.7 -45.4 74.6 -32.3C80.5 -19.2 80.5 -3.5 76.7 10.9C72.9 25.3 65.3 38.4 54.5 48.6C43.7 58.8 29.7 66.1 14.6 70.3C-0.5 74.5 -16.7 75.6 -30.8 70.4C-44.9 65.2 -56.9 53.7 -65.1 40.1C-73.3 26.5 -77.7 10.8 -75.7 -3.9C-73.7 -18.6 -65.3 -32.3 -54.4 -41.2C-43.5 -50.1 -30.1 -54.2 -17.3 -61.3C-4.5 -68.4 7.7 -78.5 21.1 -77.7C34.5 -76.9 49.1 -65.2 43.6 -63.6Z"
              transform="translate(100 100)"
            />
          </svg>

          <div className="hero__frame">
            <Image
              src="/images/mini-box.jpg"
              alt="Caja blanca de Pochi Desayunos con waffles, caja de frutas, chocolates, moño rosa y flores"
              width={900}
              height={1600}
              priority
              sizes="(max-width: 1023px) 92vw, 460px"
            />
          </div>

          <figcaption className="hero__badge">
            <MapPin size={18} aria-hidden="true" />
            {brand.location.display}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
