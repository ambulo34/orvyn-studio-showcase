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
    <section className="pt-32 pb-14 md:pt-40 md:pb-20">
      <div className="container-x">
        <p className="eyebrow rise">{eyebrow}</p>
        <h1
          className="rise mt-6 max-w-[18ch] text-[2.25rem] font-semibold leading-[1.04] tracking-[-0.02em] sm:text-5xl lg:text-[3.5rem]"
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
