"use client";

import { messages, whatsappUrl } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { WhatsappIcon } from "@/components/whatsapp-button";

export function WhatsappFab() {
  return (
    <a
      className="fab"
      href={whatsappUrl(messages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir por WhatsApp a Pochi Desayunos"
      onClick={() => track("whatsapp_click", { place: "boton_flotante" })}
    >
      <WhatsappIcon size={24} />
      <span className="fab__label">Pedir por WhatsApp</span>
    </a>
  );
}
