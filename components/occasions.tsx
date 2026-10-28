import Image from "next/image";
import type { CSSProperties } from "react";
import { occasions } from "@/lib/occasions";

export function Occasions() {
  return (
    <section className="section" id="ocasiones">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">Ocasiones especiales</p>
          <h2 className="display-h2">Un detalle bonito para cada ocasión</h2>
          <p className="lead">
            Hay días que merecen algo más que un mensaje. Explora las opciones según la ocasión
            y encuentra el detalle que mejor le queda a esa persona.
          </p>
        </div>

        <ul className="occasion-grid">
          {occasions.map((occasion) => (
            <li key={occasion.id} className="occasion-card">
              <div className="occasion-card__media">
                <Image
                  src={occasion.image.src}
                  alt={occasion.image.alt}
                  width={occasion.image.width}
                  height={occasion.image.height}
                  loading="lazy"
                  sizes="(max-width: 767px) 46vw, 31vw"
                  style={
                    {
                      objectPosition: occasion.image.objectPosition,
                      "--zoom": occasion.image.zoom,
                    } as CSSProperties
                  }
                />
              </div>
              <div className="occasion-card__body">
                <h3 className="occasion-card__title">{occasion.title}</h3>
                <p className="occasion-card__desc">{occasion.description}</p>
                <a className="text-link occasion-card__link" href="#desayunos">
                  Ver opciones
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
