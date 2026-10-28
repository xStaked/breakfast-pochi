import Image from "next/image";
import { brand, config } from "@/lib/site";
import { messages, whatsappUrl } from "@/lib/whatsapp";

const exploreLinks = [
  { href: "#desayunos", label: "Desayunos sorpresa" },
  { href: "#ocasiones", label: "Ocasiones especiales" },
  { href: "#como-pedir", label: "Cómo pedir" },
  { href: "#preguntas", label: "Preguntas frecuentes" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#inicio">
              <Image
                src="/images/logo-badge.png"
                alt={`Logotipo de ${brand.name}`}
                width={52}
                height={52}
                className="brand__badge"
              />
              <span>
                <span className="brand__name">{brand.name}</span>
                <span className="brand__tagline">Desayunos sorpresa</span>
              </span>
            </a>
            <p className="caption">
              Desayunos sorpresa y cajas de regalo para cumpleaños, aniversarios y ocasiones
              especiales en {brand.location.display}.
            </p>
            <p className="caption">{brand.location.display}</p>
          </div>

          <nav aria-label="Explora">
            <p className="footer-title">Explora</p>
            <div className="footer-links">
              {exploreLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <nav aria-label="Contacto">
            <p className="footer-title">Contacto</p>
            <div className="footer-links">
              <a
                href={whatsappUrl(messages.general)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir por WhatsApp
              </a>
              <a href="/privacidad">Aviso de privacidad</a>
              {config.social.instagram ? (
                <a href={config.social.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              ) : null}
              {config.social.facebook ? (
                <a href={config.social.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              ) : null}
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} {brand.name}. Todos los derechos reservados.
          </p>
          <p>{brand.location.display}</p>
        </div>
      </div>
    </footer>
  );
}
