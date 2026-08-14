export function PageHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <section className="pt-32 pb-12 md:pt-44 md:pb-20">
      <div className="container-x">
        <p className="eyebrow rise">{eyebrow}</p>
        <h1
          className="rise mt-6 max-w-4xl text-[2.5rem] font-semibold leading-[1] sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "120ms" }}
        >
          {title}
        </h1>
        {copy ? (
          <p
            className="rise mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            style={{ animationDelay: "220ms" }}
          >
            {copy}
          </p>
        ) : null}
      </div>
    </section>
  );
}
