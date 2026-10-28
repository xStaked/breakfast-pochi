import { brand } from "@/lib/site";

export function TopBar() {
  return (
    <div className="topbar">
      <p className="topbar__text">
        {brand.tagline} <span aria-hidden="true">💗</span>
      </p>
    </div>
  );
}
