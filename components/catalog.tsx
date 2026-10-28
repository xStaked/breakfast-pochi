import { catalogCta, products } from "@/lib/products";
import { messages } from "@/lib/whatsapp";
import { ProductCard } from "@/components/product-card";
import { TrackView } from "@/components/track-view";
import { WhatsappButton } from "@/components/whatsapp-button";

export function Catalog() {
  return (
    <TrackView event="catalog_section_view">
      <section className="section" id="desayunos">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Catálogo</p>
            <h2 className="display-h2">Nuestros desayunos sorpresa y cajas de regalo</h2>
            <p className="lead">
              Cuatro opciones con contenido real, pensadas para distintas ocasiones y
              presupuestos. Cada caja se pide por WhatsApp y se coordina según disponibilidad.
            </p>
          </div>

          <div className="catalog-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="catalog-cta">
            <p className="display-h3">{catalogCta}</p>
            <WhatsappButton
              message={messages.help}
              events={[{ event: "whatsapp_click", params: { place: "catalogo" } }]}
            >
              Te ayudamos por WhatsApp
            </WhatsappButton>
          </div>
        </div>
      </section>
    </TrackView>
  );
}
