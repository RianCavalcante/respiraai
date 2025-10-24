import Link from "next/link";

const highlights = [
  { label: "Técnicas guiadas", value: "4" },
  { label: "Tempo médio", value: "5 min" },
  { label: "Sessões concluídas", value: "12k+" },
];

const featureItems = [
  {
    title: "Visualizador gentil",
    description:
      "Animações suaves sincronizadas com inspiração, retenção e expiração para manter o foco e o ritmo.",
  },
  {
    title: "Biblioteca de técnicas",
    description:
      "Protocolos 4-7-8, 5-5-5, Box Breathing e Wim Hof em português, com instruções claras e acessíveis.",
  },
  {
    title: "Histórico e jornada",
    description:
      "Resumo das sessões, streaks automáticos e recomendações para manter a prática constante.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-16 md:px-10 md:py-24">
      <section className="relative overflow-hidden rounded-[32px] border border-white/15 bg-gradient-to-br from-[#eef2ff] via-[#f1ebff] to-[#f7f4ff] p-10 shadow-[0_40px_120px_-60px_rgba(45,35,120,0.55)] dark:from-[#16112f] dark:via-[#1d163a] dark:to-[#251a48] md:p-16">
        <div className="relative z-10 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-6 text-center md:text-left">
            <span className="inline-flex items-center rounded-full bg-white/60 px-4 py-1 text-sm font-medium text-primary-700 shadow-sm ring-1 ring-white/40 backdrop-blur dark:bg-white/10 dark:text-primary-100 dark:ring-white/10">
              Respira.ai
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-primary-900 sm:text-5xl dark:text-white">
              Respiração guiada para momentos de calma
            </h1>
            <p className="text-lg text-muted-800 dark:text-muted-200">
              Escolha técnicas comprovadas, siga instruções visuais suaves e acompanhe o seu progresso em português.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#features"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 px-7 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_-25px_rgba(78,58,186,0.65)] transition hover:scale-[1.02]"
              >
                Explorar técnicas
              </Link>
              <Link
                href="/progresso"
                className="inline-flex items-center justify-center rounded-full border border-primary-500/40 px-7 py-3 text-sm font-semibold text-primary-700 transition hover:bg-primary-500/10 dark:border-primary-200/30 dark:text-primary-100"
              >
                Ver histórico
              </Link>
            </div>
          </div>

          <div className="grid gap-6 rounded-3xl border border-white/20 bg-white/70 p-6 shadow-[0_20px_60px_-45px_rgba(43,31,100,0.6)] backdrop-blur dark:border-white/10 dark:bg-white/5 md:w-80">
            {highlights.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-3xl font-semibold text-primary-700 dark:text-primary-100">
                  {item.value}
                </p>
                <p className="text-sm text-muted-800 dark:text-muted-200">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute -top-24 right-10 h-56 w-56 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-700/15 blur-[140px]" />
      </section>

      <section id="features" className="grid gap-10 rounded-[28px] border border-white/10 bg-white/75 p-10 shadow-[0_24px_80px_-50px_rgba(35,24,83,0.55)] backdrop-blur dark:border-white/10 dark:bg-white/10 md:grid-cols-3">
        {featureItems.map((feature) => (
          <div key={feature.title} className="space-y-3">
            <h2 className="text-xl font-semibold text-primary-900 dark:text-white">{feature.title}</h2>
            <p className="text-sm leading-relaxed text-muted-800 dark:text-muted-200">{feature.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
