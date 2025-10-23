// app/not-found.tsx
"use client";

import Link from "next/link";
import { routes } from "@/routes/routes";

export default function NotFoundPage() {
  return (
    <main className=" flex items-center justify-center bg-gradient-to-br from-white to-emerald-50 px-6 py-16">
      <section className="max-w-xl text-center bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-emerald-100">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 ring-1 ring-emerald-200">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-7 w-7 text-emerald-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-emerald-700 mb-2">
          404 — Página no encontrada
        </h1>
        <p className="text-gray-600 mb-6">
          Lo sentimos, la página que intentas visitar no existe o ha sido movida.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href={routes.home.path}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Ir al inicio
          </Link>
          <Link
            href={routes.contact.path}
            className="bg-white text-emerald-700 border border-emerald-600 hover:bg-emerald-50 font-medium py-2 px-4 rounded-md transition-colors"
          >
            Contactar soporte
          </Link>
        </div>
      </section>
    </main>
  );
}
