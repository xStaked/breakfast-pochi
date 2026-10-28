"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { brand } from "@/lib/site";
import { messages } from "@/lib/whatsapp";
import { WhatsappButton } from "@/components/whatsapp-button";

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#desayunos", label: "Desayunos sorpresa" },
  { href: "#ocasiones", label: "Ocasiones especiales" },
  { href: "#como-pedir", label: "Cómo pedir" },
  { href: "#preguntas", label: "Preguntas frecuentes" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <div className="shell">
        <div className="site-header__inner">
          <a className="brand" href="#inicio">
            <Image
              src="/images/logo-badge.png"
              alt={`Logotipo de ${brand.name}`}
              width={52}
              height={52}
              className="brand__badge"
              priority
            />
            <span>
              <span className="brand__name">{brand.name}</span>
              <span className="brand__tagline">Desayunos sorpresa</span>
            </span>
          </a>

          <nav className="nav" aria-label="Navegación principal">
            {navItems.map((item) => (
              <a key={item.href} className="nav__link" href={item.href}>
                {item.label}
              </a>
            ))}
            <WhatsappButton
              message={messages.general}
              className="btn--primary"
              events={[{ event: "whatsapp_click", params: { place: "header" } }]}
            >
              Pedir por WhatsApp
            </WhatsappButton>
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            <span>Menú</span>
          </button>
        </div>

        {open ? (
          <nav id={menuId} className="mobile-nav" aria-label="Navegación móvil">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="mobile-nav__link"
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <WhatsappButton
              message={messages.general}
              events={[{ event: "whatsapp_click", params: { place: "menu_movil" } }]}
            >
              Pedir por WhatsApp
            </WhatsappButton>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
