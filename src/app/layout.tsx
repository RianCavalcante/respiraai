import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Respira.ai - respiracao guiada para momentos de calma",
  description:
    "Escolha tecnicas comprovadas, conduza sessoes guiadas e acompanhe o progresso da sua respiracao consciente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base text-foreground`}>
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-base/85 backdrop-blur-sm dark:border-white/10">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-10">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold tracking-tight text-primary-900 dark:text-primary-100"
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-sm font-bold text-white shadow-[0_12px_30px_rgba(98,76,216,0.45)]">
                  RA
                </span>
                <span className="hidden sm:inline">Respira.ai</span>
              </Link>

              <nav className="hidden items-center gap-6 text-sm font-medium text-muted-800 dark:text-muted-200 md:flex">
                <Link className="hover:text-primary-700 dark:hover:text-primary-200" href="#features">
                  Tecnicas
                </Link>
                <Link className="hover:text-primary-700 dark:hover:text-primary-200" href="#workflow">
                  Como funciona
                </Link>
                <Link className="hover:text-primary-700 dark:hover:text-primary-200" href="#testimonials">
                  Depoimentos
                </Link>
                <Link className="hover:text-primary-700 dark:hover:text-primary-200" href="#pricing">
                  Planos
                </Link>
              </nav>

              <div className="flex items-center gap-3">
                <button
                  id="theme-toggle"
                  type="button"
                  aria-label="Alternar tema"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/40 text-primary-700 shadow-[0_12px_32px_-20px_rgba(35,24,83,0.4)] transition hover:scale-105 dark:border-white/10 dark:bg-white/10 dark:text-primary-100"
                >
                  <svg
                    id="icon-theme"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5 text-current transition-transform duration-300"
                  >
                    <path
                      d="M12 4V2m0 20v-2m8-8h2M2 12H4m12.95 6.95 1.41 1.41M5.64 5.64 4.22 4.22m0 15.56 1.42-1.41M18.36 5.64l1.41-1.42M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <Link
                  href="#features"
                  className="hidden rounded-full bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 px-5 py-2 text-sm font-semibold text-white shadow-[0_20px_50px_-25px_rgba(78,58,186,0.6)] transition hover:scale-[1.02] md:inline-flex"
                >
                  Explorar tecnicas
                </Link>
              </div>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-white/10 bg-base/80 backdrop-blur-sm">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted-700 dark:text-muted-300 md:flex-row md:items-center md:justify-between md:px-10">
              <p>&copy; {new Date().getFullYear()} Respira.ai. Respire com consciencia todos os dias.</p>
              <div className="flex items-center gap-6">
                <Link href="#pricing" className="hover:text-primary-700 dark:hover:text-primary-200">
                  Planos
                </Link>
                <Link href="#settings" className="hover:text-primary-700 dark:hover:text-primary-200">
                  Preferencias
                </Link>
              </div>
            </div>
          </footer>
        </div>

        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                if (typeof window === "undefined") return;
                const storageKey = "respiraai-theme";
                const stored = localStorage.getItem(storageKey);
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                const theme = stored ?? (prefersDark ? "dark" : "light");
                document.body.dataset.theme = theme;
                document.body.classList.toggle("dark", theme === "dark");
                const icon = document.getElementById("icon-theme");
                if (theme === "dark" && icon) icon.classList.add("is-dark");
                const toggle = document.getElementById("theme-toggle");
                if (!toggle) return;
                toggle.addEventListener("click", () => {
                  const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
                  document.body.dataset.theme = nextTheme;
                  document.body.classList.toggle("dark", nextTheme === "dark");
                  localStorage.setItem(storageKey, nextTheme);
                  const iconRef = document.getElementById("icon-theme");
                  if (iconRef) iconRef.classList.toggle("is-dark", nextTheme === "dark");
                });
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
