import type { LandingData } from "@/types/promos";

interface CTAButtonsProps {
  cta: LandingData["cta"];
  fixed?: boolean;
}

export function CTAButtons({ cta, fixed = true }: CTAButtonsProps) {
  const wrapperClass = fixed
    ? "fixed bottom-0 left-0 right-0 p-4 pb-[env(safe-area-inset-bottom)] bg-gradient-to-t from-slate-900 to-transparent z-10"
    : "p-4";

  return (
    <div className={wrapperClass}>
      <div className="max-w-mobile mx-auto flex flex-col gap-3">
        <a
          href={cta.primary.maps_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 px-5 text-center font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          {cta.primary.label}
        </a>
        {cta.secondary?.whatsapp_url && (
          <a
            href={cta.secondary.whatsapp_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 px-5 text-center font-semibold text-slate-200 border border-slate-500 hover:border-slate-400 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            {cta.secondary.label}
          </a>
        )}
      </div>
    </div>
  );
}
