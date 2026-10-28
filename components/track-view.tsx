"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { track, type AnalyticsEvent } from "@/lib/analytics";

type Props = {
  event: AnalyticsEvent;
  children: ReactNode;
  className?: string;
  id?: string;
};

/**
 * Registra una sola vez cuando su contenido entra en pantalla.
 * Se usa para `catalog_section_view` sin cargar analítica externa.
 */
export function TrackView({ event, children, className, id }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            track(event);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [event]);

  return (
    <div ref={ref} className={className} id={id}>
      {children}
    </div>
  );
}
