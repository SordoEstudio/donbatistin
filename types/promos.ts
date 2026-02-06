export interface PromoItem {
  title: string;
  description: string;
  price: string;
  highlight: string;
}

export interface LandingData {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    badge: string;
  };
  promos: PromoItem[];
  cta: {
    primary: { label: string; maps_url: string };
    secondary: { label: string; whatsapp_url: string };
  };
  footer: {
    note: string;
    brand: string;
  };
}
