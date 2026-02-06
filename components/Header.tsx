import type { LandingData } from "@/types/promos";

interface HeaderProps {
  hero: LandingData["hero"];
  brand: string;
}

export function Header({ hero, brand }: HeaderProps) {
  return (
    <header className="text-center px-4 pt-6 pb-2">
      <span
        className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/15 px-3 py-1 rounded-full mb-3"
        aria-hidden
      >
        {hero.badge}
      </span>
      <h1 className="text-xl font-bold text-white leading-tight max-w-[320px] mx-auto">
        {hero.headline}
      </h1>
      <p className="text-slate-300 text-sm mt-2 max-w-[320px] mx-auto">
        {hero.subheadline}
      </p>
      <p className="text-slate-500 text-xs mt-1" aria-hidden>
        {brand}
      </p>
    </header>
  );
}
