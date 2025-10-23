// app/403/page.tsx
"use client";

import Link from "next/link";
import { routes } from "@/routes/routes";

export default function ForbiddenPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-emerald-50 px-6 py-16">
      <section className="relative max-w-xl w-full">
        <div
          className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-emerald-200/40 to-emerald-100/20 blur-xl"
          aria-hidden
        />
        <div className="relative bg-white/90 backdrop-blur-sm border border-emerald-100 rounded-3xl shadow-xl p-10">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 ring-1 ring-emerald-200">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-7 w-7 text-emerald-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M7 10V8a5 5 0 0 1 10 0v2" />
              <rect x="4" y="10" width="16" height="10" rx="2" />
              <path d="M12 14v3" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-emerald-700 text-center mb-2">
            403 — Acceso denegado
          </h1>
          <p className="text-center text-gray-600 mb-6">
            No cuentas con los permisos necesarios para ver esta página. Si
            crees que se trata de un error, contáctanos.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href={routes.home.path}
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-2.5 text-white font-medium shadow-sm transition
                         hover:bg-emerald-700 active:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              Ir al inicio
            </Link>

            <Link
              href={routes.contact.path}
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 text-emerald-700 font-medium border border-emerald-300
               hover:bg-emerald-50 transition shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              Contactar soporte
            </Link>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Código de estado:{" "}
              <span className="font-medium text-emerald-700">403</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
