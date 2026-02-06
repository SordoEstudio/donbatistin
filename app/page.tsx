import type { Metadata } from "next";
import promosData from "@/data/promos.json";
import type { LandingData } from "@/types/promos";
import { Header } from "@/components/Header";
import { PromoCard } from "@/components/PromoCard";
import { CTAButtons } from "@/components/CTAButtons";

const data = promosData as LandingData;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: data.meta.title,
    description: data.meta.description,
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.meta.title,
      description: data.meta.description,
    },
  };
}

export default function HomePage() {
  return (
    <div className="min-h-screen max-w-mobile mx-auto flex flex-col">
      <main className="flex-1 px-4 pb-32">
        <Header hero={data.hero} brand={data.footer.brand} />

        <section
          className="mt-6 space-y-3"
          aria-labelledby="promos-heading"
        >
          <h2 id="promos-heading" className="sr-only">
            Promociones del día
          </h2>
          {data.promos.map((promo) => (
            <PromoCard key={promo.title} promo={promo} />
          ))}
        </section>

        <footer className="mt-8 text-center">
          <p className="text-slate-500 text-xs">{data.footer.note}</p>
        </footer>
      </main>

      <CTAButtons cta={data.cta} fixed />
    </div>
  );
}
