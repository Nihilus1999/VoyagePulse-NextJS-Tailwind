import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { routes } from "@/routes/routes";

export default function ThankYouPage() {
  return (
    <main className=" flex flex-col items-center justify-center bg-gradient-to-br from-white to-emerald-50 px-6 py-6">
      <section className="max-w-lg bg-white/90 backdrop-blur-sm border border-emerald-100 rounded-3xl shadow-xl p-10 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-emerald-100 rounded-full p-4">
            <CheckCircle
              size={70}
              className="text-emerald-600 drop-shadow-sm"
              strokeWidth={1.8}
            />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-emerald-700 mb-4">
          ¡Gracias por participar!
        </h1>
        <p className="text-gray-700 leading-relaxed mb-6 text-base max-w-md mx-auto">
          Agradecemos sinceramente el tiempo que ha dedicado a completar la{" "}
          <strong>Encuesta VoyagePulse 2025</strong>.  
          Sus respuestas son fundamentales para comprender las experiencias
          turísticas y contribuir al desarrollo sostenible del sector.
        </p>

        <p className="text-gray-600 mb-8 text-sm max-w-md mx-auto">
          La información recopilada será tratada con total confidencialidad y
          utilizada exclusivamente con fines de análisis y mejora continua.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href={routes.home.path}
            className="bg-emerald-600 text-white px-8 py-2 rounded-xl hover:bg-emerald-700 font-medium transition"
          >
            Volver al inicio
          </Link>
          <Link
            href={routes.contact.path}
            className="bg-white border border-emerald-500 text-emerald-600 px-8 py-2 rounded-xl hover:bg-emerald-50 font-medium transition"
          >
            Contactar soporte
          </Link>
        </div>
        <div className="mt-10 border-t border-emerald-100 pt-4 text-gray-500 text-xs">
          © {new Date().getFullYear()} VoyagePulse 2025 — Encuesta de Satisfacción Turística
        </div>
      </section>
    </main>
  );
}
