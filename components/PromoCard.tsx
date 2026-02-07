import Image from "next/image";
import type { PromoItem } from "@/types/promos";

interface PromoCardProps {
  promo: PromoItem;
}

export function PromoCard({ promo }: PromoCardProps) {
  return (
    <article
      className="bg-slate-800/80 border border-slate-600/50 rounded-xl p-4 text-left shadow-lg overflow-hidden"
      aria-labelledby={`promo-${promo.title.replace(/\s/g, "-").toLowerCase()}`}
    >
      <div className="flex justify-between items-start gap-3">
        <div className="min-w-0 flex-1">
          <h2
            id={`promo-${promo.title.replace(/\s/g, "-").toLowerCase()}`}
            className="text-base font-bold text-white"
          >
            {promo.title}
          </h2>
          <p className="text-slate-300 text-sm mt-0.5">{promo.description}</p>
          <span className="inline-block mt-2 text-amber-400 text-xs font-medium">
            {promo.highlight}
          </span>
        </div>
        <div className="flex flex-col items-end shrink-0">
          {promo.image && (
            <div className="w-20 h-20 rounded-lg overflow-hidden mb-2 bg-slate-700/50">
              <Image
                src={promo.image}
                alt={promo.title}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <span
            className="text-lg font-bold text-amber-400 whitespace-nowrap tabular-nums"
            aria-label={`Precio: ${promo.price}`}
          >
            {promo.price}
          </span>
        </div>
      </div>
    </article>
  );
}
