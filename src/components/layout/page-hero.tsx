export function PageHero({ title }: { title: string }) {
  return (
    <header className="wrap py-10 md:py-16">
      <h1 className="section-title">{title}</h1>
    </header>
  );
}
