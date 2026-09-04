import { useState } from "react";
import { services } from "@/data/pages";
import { company } from "@/data/content";

export function InquiryForm({ preset }: { preset?: string }) {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState(preset ?? "");
  if (sent) {
    return (
      <div className="rounded-[16px] bg-wash p-8">
        <h2 className="section-title">Ačiū</h2>
        <p className="mt-3 text-muted">Užklausa išsiųsta. Atsakysime darbo valandomis.</p>
      </div>
    );
  }
  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const lines = [...data.entries()].map(([k, v]) => `${k}: ${v}`);
        window.location.href = `mailto:${company.email}?subject=${encodeURIComponent("Užklausa") }&body=${encodeURIComponent(lines.join("\n"))}`;
        setSent(true);
      }}
    >
      <h2 className="section-title">Užklausos forma</h2>
      <label className="grid gap-1 text-sm">
        Paslauga
        <select name="paslauga" value={service} onChange={(e) => setService(e.target.value)} className="rounded-btn border border-line px-3 py-2">
          <option value="">Pasirinkite</option>
          {services.map((s) => (
            <option key={s.path} value={s.title}>{s.title}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-sm">Medžiaga<input name="medziaga" className="rounded-btn border border-line px-3 py-2" /></label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">Matmenys<input name="matmenys" className="rounded-btn border border-line px-3 py-2" /></label>
        <label className="grid gap-1 text-sm">Kiekis<input name="kiekis" className="rounded-btn border border-line px-3 py-2" /></label>
      </div>
      <label className="grid gap-1 text-sm">Terminas<input name="terminas" className="rounded-btn border border-line px-3 py-2" /></label>
      <label className="grid gap-1 text-sm">Aprašymas<textarea name="aprasymas" rows={4} className="rounded-btn border border-line px-3 py-2" /></label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">Vardas<input required name="vardas" className="rounded-btn border border-line px-3 py-2" /></label>
        <label className="grid gap-1 text-sm">El. paštas<input required type="email" name="elpastas" className="rounded-btn border border-line px-3 py-2" /></label>
      </div>
      <label className="grid gap-1 text-sm">Telefonas<input name="telefonas" className="rounded-btn border border-line px-3 py-2" /></label>
      <button type="submit" className="btn-sink mt-2 rounded-[12px] bg-red px-6 py-4 font-display text-bg">
        Siųsti užklausą
      </button>
    </form>
  );
}
