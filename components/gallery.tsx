import Image from "next/image";
import type { CSSProperties } from "react";
import { galleryTiles } from "@/lib/gallery";

export function Gallery() {
  return (
    <section className="section" id="galeria">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">Galería</p>
          <h2 className="display-h2">Pequeños detalles, grandes recuerdos</h2>
          <p className="lead">
            Así se ven los desayunos sorpresa de Pochi: cajas cuidadas, dulces, fruta y ese
            toque final que hace que la sorpresa se sienta especial.
          </p>
        </div>

        <div className="gallery">
          {galleryTiles.map((tile) => (
            <figure
              key={tile.id}
              className={`gallery__item gallery__item--${tile.orientation}`}
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                width={1086}
                height={1448}
                loading="lazy"
                sizes="(max-width: 767px) 46vw, 31vw"
                style={
                  {
                    objectPosition: tile.objectPosition ?? "50% 50%",
                    "--zoom": tile.zoom ?? 1,
                  } as CSSProperties
                }
              />
              <figcaption className="gallery__caption">{tile.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
