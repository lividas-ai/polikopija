import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { Cta } from "@/components/ui/cta";
import { faqs, processSteps } from "@/data/content";

export const Route = createFileRoute("/kaip-uzsakyti")({ component: How });

function How() {
  return (
    <div>
      <PageHero title="Nuo brėžinio iki gatavos detalės" />
      <section className="pb-[70px]">
        <div className="wrap">
          <div className="flex flex-wrap gap-x-10 gap-y-2 pb-8">
            <p className="fact">DXF, CDR, PLT, RLD, DWG</p>
            <p className="fact">Tiražas nuo 1 vnt.</p>
            <p className="fact">Terminas nuo 20 min.</p>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {processSteps.map((s, i) => (
              <div key={s.title} className="grid items-start gap-4 lg:grid-cols-[280px_1fr] lg:gap-8">
                <div className={i % 2 ? "lg:order-2" : ""}>
                  <span className="tile-lift tile-frame block">
                    <img src={s.image} alt="" className="wide-img" />
                  </span>
                </div>
                <div>
                  <h2 className="step-heading">{s.title}</h2>
                  <p className="mt-3 text-[16px] leading-relaxed text-muted">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex w-full flex-col items-stretch gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-4">
            <Cta to="/kontaktai" variant="solidLg">
              Siųsti užklausą
            </Cta>
            <Cta to="/kontaktai" variant="outline">
              Kontaktai
            </Cta>
          </div>
          <h2 className="section-title mt-[70px]">Klausimai</h2>
          <div className="mt-8 max-w-[900px] divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="py-4">
                <summary className="cursor-pointer font-display text-lg font-semibold transition-colors duration-300 hover:text-red">
                  {f.q}
                </summary>
                <p className="faq-open mt-2 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
