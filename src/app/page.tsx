import Link from "next/link";

import { BreathingOrb } from "@/features/hero/breathing-orb";
import { BlurFade } from "@/shared/components/ui/blur-fade";
import { MagicCard } from "@/shared/components/ui/magic-card";
import { NumberTicker } from "@/shared/components/ui/number-ticker";

type Highlight = {
  label: string;
  value: number;
  suffix?: string;
};

const highlights: Highlight[] = [
  { label: "Técnicas guiadas", value: 4 },
  { label: "Tempo médio por sessão", value: 5, suffix: " min" },
  {
    label: "Sessões concluídas",
    value: 12,
    suffix: "k+",
  },
];

const featureItems = [
  {
    title: "Visualizador gentil",
    description:
      "Animações e indicações respiratórias sincronizadas com cada fase para manter mente e corpo no mesmo ritmo.",
    icon: "🌬️",
  },
  {
    title: "Biblioteca de técnicas",
    description:
      "Protocolos 4-7-8, 5-5-5, Box Breathing e Wim Hof guiados em português, com instruções acessíveis.",
    icon: "📚",
  },
  {
    title: "Histórico e jornada",
    description: "Resumo diário, streaks automáticos e recomendações para manter a prática constante.",
    icon: "📈",
  },
];

const workflowSteps = [
  {
    title: "1. Prepare-se",
    description: "Escolha a técnica, ajuste tempo e receba dicas de postura para começar em menos de 60 segundos.",
    cue: "Atmosfera + som ambiente",
  },
  {
    title: "2. Respire no ritmo",
    description: "Siga as animações e instruções sonoras para inspirar, segurar e expirar com segurança.",
    cue: "Feedback visual + áudio",
  },
  {
    title: "3. Reflita e avance",
    description: "Finalize com insights, notas rápidas e recomendações para a próxima sessão.",
    cue: "Recomendações inteligentes",
  },
];

const testimonials = [
  {
    quote:
      "Em 5 minutos de Respira.ai eu desacelero mais do que em 30 minutos tentando meditar sozinho. A cadência guiada faz toda a diferença.",
    name: "Gabriela N.",
    role: "Fundadora do Estúdio Namu",
    rating: 5,
  },
  {
    quote:
      "Uso entre reuniões para resetar o foco. Os gráficos mostram como manter a consistência e o layout dá vontade de voltar sempre.",
    name: "Diego Alvarez",
    role: "Head de Produto",
    rating: 5,
  },
  {
    quote:
      "Finalmente encontrei instruções claras em português. Os lembretes e o modo silencioso me acompanham em qualquer lugar.",
    name: "Letícia A.",
    role: "Psicóloga clínica",
    rating: 5,
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-16 md:px-10 md:py-24">
      <section className="relative overflow-hidden rounded-[32px] border border-white/15 bg-gradient-to-br from-[#eef2ff] via-[#f1ebff] to-[#f7f4ff] p-10 shadow-[0_40px_120px_-60px_rgba(45,35,120,0.55)] dark:from-[#16112f] dark:via-[#1d163a] dark:to-[#251a48] md:p-16">
        <div className="relative z-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="max-w-xl space-y-8 text-center lg:text-left">
            <span className="inline-flex items-center rounded-full bg-white/60 px-4 py-1 text-sm font-medium text-primary-700 shadow-sm ring-1 ring-white/40 backdrop-blur dark:bg-white/10 dark:text-primary-100 dark:ring-white/10">
              Respira.ai
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-primary-900 sm:text-5xl dark:text-white">
                Respiração guiada para momentos de foco e calma
              </h1>
              <p className="text-lg text-muted-800 dark:text-muted-200">
                Escolha técnicas comprovadas, siga instruções visuais suaves e acompanhe o progresso da sua prática em
                português.
              </p>
            </div>
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

            <div className="grid gap-4 rounded-3xl border border-white/20 bg-white/70 p-6 shadow-[0_20px_60px_-45px_rgba(43,31,100,0.6)] backdrop-blur dark:border-white/10 dark:bg-white/5 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="text-center">
                  <NumberTicker
                    value={item.value}
                    suffix={item.suffix}
                    className="text-3xl font-semibold text-primary-700 dark:text-primary-100"
                  />
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-700 dark:text-muted-200">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <BreathingOrb />
        </div>
        <div className="pointer-events-none absolute -top-24 right-10 h-56 w-56 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-700/15 blur-[140px]" />
      </section>

      <section id="features" className="space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-300">
            Técnicas guiadas
          </p>
          <h2 className="text-3xl font-semibold text-primary-900 dark:text-white">Tudo o que você precisa para respirar</h2>
          <p className="text-base text-muted-800 dark:text-muted-200">
            Combine animações, áudio e acompanhamento inteligente para transformar micro pausas em rituais de autocuidado.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featureItems.map((feature, index) => (
            <BlurFade key={feature.title} delay={index * 0.08}>
              <MagicCard className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-2xl">
                  {feature.icon}
                </div>
                <div className="mt-6 space-y-3">
                  <h3 className="text-xl font-semibold text-primary-900 dark:text-white">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-800 dark:text-muted-200">{feature.description}</p>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </section>

      <section
        id="workflow"
        className="space-y-10 rounded-[28px] border border-white/10 bg-white/75 p-10 shadow-[0_24px_80px_-50px_rgba(35,24,83,0.55)] backdrop-blur dark:border-white/10 dark:bg-white/10"
      >
        <div className="space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-300">Fluxo</p>
          <h2 className="text-3xl font-semibold text-primary-900 dark:text-white">Respire em três etapas</h2>
          <p className="text-base text-muted-800 dark:text-muted-200">
            Cada sessão já vem com contexto, instruções e fechamento guiados para você não precisar pensar em nada.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {workflowSteps.map((step, index) => (
            <BlurFade key={step.title} delay={0.1 * index}>
              <div className="h-full rounded-3xl border border-white/20 bg-white/70 p-6 shadow-[0_24px_60px_-45px_rgba(45,35,120,0.4)] backdrop-blur dark:border-white/10 dark:bg-white/5">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-600 dark:text-primary-200">
                  {step.cue}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-primary-900 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-800 dark:text-muted-200">{step.description}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="testimonials" className="space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-300">
            Prova social
          </p>
          <h2 className="text-3xl font-semibold text-primary-900 dark:text-white">Respira.ai na rotina real</h2>
          <p className="text-base text-muted-800 dark:text-muted-200">
            Criadores, terapeutas e equipes usam sessões guiadas para resetar o corpo em minutos.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <BlurFade key={testimonial.name} delay={index * 0.1}>
              <MagicCard className="h-full">
                <div className="flex items-center gap-1 text-sm text-primary-600 dark:text-primary-300">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <span key={`${testimonial.name}-star-${starIndex}`}>★</span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-800 dark:text-muted-200">{testimonial.quote}</p>
                <div className="mt-6 space-y-1">
                  <p className="text-sm font-semibold text-primary-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-700 dark:text-muted-300">
                    {testimonial.role}
                  </p>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </section>
    </main>
  );
}
