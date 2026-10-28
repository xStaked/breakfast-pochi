"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { faq } from "@/lib/faq";

export function Faq() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section" id="preguntas">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 className="display-h2">Resolvemos tus dudas antes de pedir</h2>
          <p className="lead">
            Lo más preguntado sobre nuestros desayunos sorpresa, precios, pedidos y entregas
            en Soacha.
          </p>
        </div>

        <div className="faq">
          {faq.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `${baseId}-btn-${index}`;
            const panelId = `${baseId}-panel-${index}`;

            return (
              <div className="faq__item" key={item.question}>
                <h3 style={{ margin: 0 }}>
                  <button
                    type="button"
                    className="faq__question"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{item.question}</span>
                    <ChevronDown className="faq__icon" size={22} aria-hidden="true" />
                  </button>
                </h3>

                {isOpen ? (
                  <div
                    className="faq__panel"
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                  >
                    <div className="faq__panel-inner">
                      <p className="faq__answer">{item.answer}</p>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
