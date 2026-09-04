import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "@/components/brand/logo";
import { company } from "@/data/content";
import { pageSplat, pageTo, services } from "@/data/pages";

export function Footer() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  return (
    <footer className="bg-header text-bg">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-4 py-10 md:px-5 md:py-16 lg:grid-cols-4">
        <div>
          <Logo light />
          <form
            className="mt-6"
            onSubmit={(e) => {
              e.preventDefault();
              setOk(true);
            }}
          >
            <label className="footer-heading text-bg/80">Naujienlaiškis</label>
            <div className="mt-2 flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="El. paštas"
                className="min-w-0 flex-1 rounded-btn bg-header-2 px-3 py-2 text-sm outline-none ring-1 ring-white/15"
              />
              <button type="submit" className="rounded-btn bg-red px-3 py-2 font-display text-xs font-extrabold uppercase">
                OK
              </button>
            </div>
            {ok ? <p className="mt-2 text-xs text-blue">Ačiū, užregistravome.</p> : null}
          </form>
        </div>
        <div>
          <h3 className="footer-heading">Įmonė</h3>
          <ul className="mt-4 space-y-2 text-sm text-bg/75">
            <li><Link to="/apie-mus" className="hover:text-bg">Apie mus</Link></li>
            <li><Link to="/projektai" className="hover:text-bg">Projektai</Link></li>
            <li><Link to="/klientai" className="hover:text-bg">Klientai</Link></li>
            <li><Link to="/partneriai" className="hover:text-bg">Partneriai</Link></li>
            <li><Link to="/donoryste" className="hover:text-bg">Donorystė</Link></li>
            <li><Link to="/kontaktai" className="hover:text-bg">Kontaktai</Link></li>
            <li><Link to="/privatumas" className="hover:text-bg">Privatumas</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="footer-heading">Paslaugos</h3>
          <ul className="mt-4 space-y-2 text-sm text-bg/75">
            {services.map((s) => (
              <li key={s.path}>
                <Link to={pageTo(s.path)} params={{ _splat: pageSplat(s.path) }} className="hover:text-bg">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="footer-heading">Kontaktai</h3>
          <p className="mt-4 text-sm text-bg/75">
            {company.address}<br />{company.city}<br />{company.hours}
          </p>
          <p className="mt-3">
            <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-bg">{company.phone}</a>
          </p>
          <a href={`mailto:${company.email}`} className="text-red">{company.email}</a>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-bg/50">
        © {new Date().getFullYear()} {company.legal}
      </p>
    </footer>
  );
}
