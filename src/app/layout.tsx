// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { routes } from "@/routes/routes";

export const metadata: Metadata = {
  title: "VoyagePulse 2025",
  description:
    "Encuesta turística multietapa para analizar la satisfacción de turistas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gradient-to-br from-white to-emerald-50 text-gray-800 antialiased flex flex-col">
        {/* Header */}
        <header className="bg-emerald-700 text-white shadow-md sticky top-0 z-50">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link
              href={routes.home.path}
              className="text-2xl font-bold tracking-tight"
            >
              VoyagePulse
            </Link>
          </nav>
        </header>

        {/* Main content */}
        <main className="flex-1 mx-auto w-full max-w-6xl px-6 py-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300">
          <div className="mx-auto max-w-7xl px-6 py-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-white mb-2">
                Sobre el proyecto
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                VoyagePulse 2025 es un estudio digital de satisfacción turística
                que busca evaluar las percepciones, expectativas y niveles de
                satisfacción de los visitantes en distintos destinos.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-2">
                Navegación
              </h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href={routes.home.path} className="hover:text-white">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href={routes.about.path} className="hover:text-white">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href={routes.contact.path} className="hover:text-white">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-2">
                Conecta con nosotros
              </h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="https://www.instagram.com/nihilus1999/" className="hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/jose-el-asmar-3756501a2/" className="hover:text-white">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} VoyagePulse — Todos los derechos
            reservados
          </div>
        </footer>
      </body>
    </html>
  );
}
