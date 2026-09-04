import poliPagesJson from "./poli-pages.json";
import poliNewsJson from "./poli-news.json";
import poliProjectsJson from "./poli-projects.json";

export type PoliSection = { heading: string; items: string[]; text: string[] };
export type PoliMaterial = { name: string; image: string };
export type PoliChild = { path: string; title: string; image: string };
export type ServicePage = {
  kind: string;
  path: string;
  slug: string;
  parent: string | null;
  title: string;
  body: string[];
  sections: PoliSection[];
  specs: { label: string; value: string }[];
  materials: PoliMaterial[];
  gallery: string[];
  children: PoliChild[];
  youtube: string;
  image: string;
  processImage: string;
};
export type NewsItem = { slug: string; date: string; title: string; image: string; body: string[]; gallery: string[] };
export type ProjectItem = { title: string; image: string };

export const allPages = poliPagesJson as ServicePage[];
export const news = poliNewsJson as NewsItem[];
export const projects = poliProjectsJson as ProjectItem[];

const TOP_ORDER = [
  "metalo-apdirbimas",
  "prekybine-iranga",
  "baldai",
  "metalo-gaminiai",
  "reklamos-gamyba",
  "medziagu-frezavimas",
  "vakuuminis-formavimas",
  "pjovimas-vandeniu",
  "plastiko-apdirbimas",
  "miltelinis-dazymas",
  "projektavimas",
  "pavyzdziu-gamyba",
];

const byPath = new Map(allPages.map((p) => [p.path, p]));
const uniqueSlug = new Map<string, ServicePage>();
const slugCount = new Map<string, number>();
for (const p of allPages) slugCount.set(p.slug, (slugCount.get(p.slug) ?? 0) + 1);
for (const p of allPages) {
  if ((slugCount.get(p.slug) ?? 0) === 1) uniqueSlug.set(p.slug, p);
}

export const services = TOP_ORDER.map((path) => byPath.get(path)).filter((p): p is ServicePage => Boolean(p));
export const metalProcesses = allPages.filter((p) => p.parent === "metalo-apdirbimas");
export const allServices = allPages.filter((p) => p.kind === "paslauga");

export function getService(pathOrSlug: string | undefined): ServicePage | undefined {
  if (!pathOrSlug) return undefined;
  const key = pathOrSlug.replace(/^\/+|\/+$/g, "");
  return byPath.get(key) ?? uniqueSlug.get(key);
}
export function childrenOf(path: string): ServicePage[] {
  const page = getService(path);
  if (!page) return [];
  return page.children.map((c) => getService(c.path)).filter((p): p is ServicePage => Boolean(p));
}
export function relatedOf(page: ServicePage): ServicePage[] {
  if (page.parent) return allPages.filter((p) => p.parent === page.parent && p.path !== page.path).slice(0, 4);
  return services.filter((p) => p.path !== page.path).slice(0, 4);
}
export function isContentPhoto(src: string | undefined): boolean {
  if (!src) return false;
  if (src.startsWith("/images/process/") || src.startsWith("/images/work/") || src.startsWith("/images/services/") || src.startsWith("/images/materials/")) return true;
  return src.startsWith("/images/poli/");
}
export function tileImage(page: ServicePage | PoliChild): string {
  const full = getService(page.path);
  const image = (full?.image || ("image" in page ? page.image : "")) as string;
  const process = full?.processImage || "";
  const nested = Boolean(full?.parent);
  if (nested && isContentPhoto(image)) return image;
  if (!nested && process) return process;
  if (isContentPhoto(image)) return image;
  if (process) return process;
  return "/images/process/cutting.png";
}
export function pageTo(path: string): "/paslauga/$" | "/spalvos/$" {
  return path.startsWith("spalvos/") ? "/spalvos/$" : "/paslauga/$";
}
export function pageSplat(path: string): string {
  return path.startsWith("spalvos/") ? path.slice("spalvos/".length) : path;
}
