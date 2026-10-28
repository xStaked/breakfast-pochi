import { Hero } from "@/components/hero";
import { Occasions } from "@/components/occasions";
import { Catalog } from "@/components/catalog";
import { Gallery } from "@/components/gallery";
import { HowToOrder } from "@/components/how-to-order";
import { LocalSeo } from "@/components/local-seo";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Occasions />
      <Catalog />
      <Gallery />
      <HowToOrder />
      <LocalSeo />
      <Faq />
      <FinalCta />
    </>
  );
}
