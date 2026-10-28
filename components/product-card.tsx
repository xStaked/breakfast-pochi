import Image from "next/image";
import { Check } from "lucide-react";
import { formatCOP } from "@/lib/format";
import { productMessage } from "@/lib/whatsapp";
import type { Product } from "@/lib/products";
import { WhatsappButton } from "@/components/whatsapp-button";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card" id={product.id}>
      <div className="product-card__media">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          width={product.image.width}
          height={product.image.height}
          loading="lazy"
          sizes="(max-width: 767px) 92vw, 46vw"
        />
      </div>

      <div className="product-card__body">
        <h3 className="display-h3">{product.name}</h3>

        <p className="price">
          <span className="price__value">{formatCOP(product.priceCOP)}</span>
          <span className="price__note">Precio de referencia</span>
        </p>

        <p className="product-card__desc">{product.description}</p>

        <p className="includes-title">Qué incluye</p>
        <ul className="includes-list">
          {product.includes.map((item) => (
            <li key={item}>
              <Check size={17} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="product-card__cta">
          <WhatsappButton
            message={productMessage(product)}
            events={[
              {
                event: "product_selection",
                params: { product: product.name, price: product.priceCOP },
              },
              {
                event: "product_whatsapp_click",
                params: { product: product.name, price: product.priceCOP },
              },
            ]}
          >
            Pedir por WhatsApp
          </WhatsappButton>
        </div>
      </div>
    </article>
  );
}
