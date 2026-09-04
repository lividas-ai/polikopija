import clientsJson from "./poli-clients.json";
export type { ServicePage as Service, ServicePage, NewsItem, ProjectItem } from "./pages";
export {
  services,
  metalProcesses,
  allServices,
  getService,
  childrenOf,
  relatedOf,
  tileImage,
  pageTo,
  pageSplat,
  news,
  projects,
  allPages,
} from "./pages";

export const company = {
  name: "Polikopija",
  legal: "UAB Polikopija",
  since: 1998,
  tagline: "Nestandartinės detalės. Bet kokiu mastu.",
  description:
    "Firma Polikopija nuo 1998 metų teikia įvairių metalų, plastiko, stiklo, akmens ir kitų medžiagų apdirbimo paslaugas.",
  phone: "+370 699 81 923",
  phone2: "+370 523 46 030",
  email: "gamyba@polikopija.lt",
  address: "Baltosios Vokės g. 62",
  city: "Juodšiliai, LT-14101",
  region: "Vilniaus raj., Lietuva",
  hours: "I–V 07:00–15:00",
  lunch: "Pietūs 11:30–12:00",
  code: "224572410",
  vat: "LT245724113",
  sodra: "77524",
  bank: "Luminor bank AB 40100",
  iban: "LT17 4010 0424 0000 0654",
  swift: "AGBLLT2X",
  mapQuery: "Baltosios Vokės g. 62, Juodšiliai",
};

export const people = [
  { name: "Ruslanas Golubevas", role: "Generalinis direktorius", phone: "+370 698 46 494", email: "ruslan@polikopija.lt" },
  { name: "Romas Kondrotas", role: "Marketingo direktorius", phone: "+370 698 08 580", email: "romas@polikopija.lt" },
  { name: "Buhalterija", role: "Finansai", phone: company.phone, email: "finansai@polikopija.lt" },
];

export const serviceBlurbs: Record<string, string> = {};
export const metalFeatured: { path: string; text: string }[] = [];
export const workExamples: { title: string; image: string }[] = [];
export const processSteps = [
  { title: "Siųskite brėžinį", text: "DXF, CDR, PLT, RLD, DWG — atsakome darbo valandomis.", image: "/images/process/upload.png" },
  { title: "Gamyba", text: "Pjovimas, frezavimas, lenkimas, dažymas — vienoje vietoje.", image: "/images/process/cnc.png" },
  { title: "Pristatymas", text: "Lietuvoje ir užsienyje. Tiražas nuo 1 vnt.", image: "/images/process/builder.png" },
];
export const expedite = { title: "Skubūs užsakymai", text: "Terminas nuo 20 min." };
export const startWays = [
  { title: "Užklausa", to: "/kontaktai" },
  { title: "Skambutis", href: "tel:+37069981923" },
];
export const fileTypes = ["DXF", "CDR", "PLT", "RLD", "DWG"];
export const materials = [
  { name: "Aliuminis", image: "/images/materials/aluminum.jpg", to: "metalo-apdirbimas" },
  { name: "Plienas", image: "/images/materials/steel.jpg", to: "metalo-apdirbimas" },
  { name: "Nerūdijantis", image: "/images/materials/stainless.jpg", to: "metalo-apdirbimas" },
  { name: "Plastikas", image: "/images/materials/plastic.png", to: "plastiko-apdirbimas" },
  { name: "Kompozitas", image: "/images/materials/composite.png", to: "medziagu-frezavimas" },
  { name: "Mediena", image: "/images/materials/wood.jpg", to: "medziagu-frezavimas" },
];
export const materialGroups = [
  { title: "Aliuminis", image: "/images/materials/aluminum.jpg", note: "Lakštai ir profiliai", to: "metalo-apdirbimas" },
  { title: "Plienai", image: "/images/materials/steel.jpg", note: "Juodas ir nerūdijantis", to: "metalo-apdirbimas" },
  { title: "Kiti metalai", image: "/images/materials/copper.jpg", note: "Varis, žalvaris", to: "metalo-apdirbimas" },
  { title: "Kompozitai", image: "/images/materials/composite.png", note: "ACM ir honeycomb", to: "medziagu-frezavimas" },
  { title: "Plastikai", image: "/images/materials/plastic.png", note: "PMMA, HDPE, PVC", to: "plastiko-apdirbimas" },
  { title: "Mediena / akmuo", image: "/images/materials/wood.jpg", note: "Masyvas, guma, akmuo", to: "pjovimas-vandeniu" },
];

type ClientGroup = { slug: string; title: string; image?: string; clients: { src: string; name: string }[] };
const clientsData = clientsJson as {
  groups: ClientGroup[];
  logos: { src: string; alt: string }[];
  partners?: { src: string; alt: string }[];
};

export const clientGroups = clientsData.groups.filter((g) => g.slug !== "abc");
export const clientSectors = clientGroups.map((g) => ({
  slug: g.slug,
  title: g.title,
  image: g.image || "/images/hero-still.jpg",
}));
export const clientLogos = clientsData.logos;
export const marqueeLogos = clientLogos;
export function getClientGroup(slug: string) {
  if (slug === "abc" || slug === "visiklientai") {
    return {
      slug: "abc",
      title: "Visi klientai",
      image: clientLogos[0]?.src,
      clients: clientLogos.map((l) => ({ src: l.src, name: l.alt })),
    };
  }
  return clientsData.groups.find((g) => g.slug === slug);
}
export const partnerLogos = clientsData.partners ?? [];
export const donation = {
  title: "Donorystė",
  status: "UAB Polikopija palaiko kraujo donorystę.",
  line: "Kviečiame tapti kraujo donorais.",
  href: "https://www.kraujodonoryste.lt/",
  siteLabel: "kraujodonoryste.lt",
};
export const faqs = [
  { q: "Koks minimalus tiražas?", a: "Nuo 1 vieneto." },
  { q: "Kokie failai tinka?", a: "DXF, CDR, PLT, RLD, DWG. Jei neturite brėžinio — padėsime paruošti." },
  { q: "Koks terminas?", a: "Nuo 20 minučių skubiems darbams. Tipinis užsakymas — kelių dienų." },
  { q: "Ar pristatote?", a: "Taip, Lietuvoje ir užsienyje." },
];
export const aboutPoints = [
  "Metalo apdirbimas",
  "Plastiko apdirbimas",
  "Baldai ir prekybinė įranga",
  "Reklamos gamyba",
  "Pjovimas vandeniu",
  "Miltelinis dažymas",
];
export const valueProps = [
  { title: "Nuo 1998 m.", text: "Gamyba Juodšiliuose." },
  { title: "Nuo 1 vnt.", text: "Prototipas ir serija." },
  { title: "Nuo 20 min.", text: "Skubūs užsakymai." },
];
export const directions = ["A4, išvažiavimas Juodšiliai", "Baltosios Vokės g. 62"];
export const privacy = [
  "UAB Polikopija tvarko asmens duomenis užklausoms vykdyti.",
  "Slapukai naudojami svetainės veikimui. Kontaktas: gamyba@polikopija.lt.",
];
