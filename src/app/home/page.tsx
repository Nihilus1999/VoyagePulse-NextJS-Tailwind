import Link from "next/link";
import { Info, Mail, LifeBuoy } from "lucide-react";
import { routes } from "@/routes/routes";

export default function HomePage() {
  return (
    <main className="flex items-center justify-center bg-gradient-to-br from-white to-emerald-50 px-6">
      <section className="max-w-5xl w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-10">
        <h1 className="text-3xl font-bold text-emerald-700 mb-4 text-center">
          Bienvenido a la Encuesta VoyagePulse 2025
        </h1>
        <p className="text-gray-700 mb-10 text-center leading-relaxed max-w-3xl mx-auto">
          Esta encuesta busca conocer la <strong>satisfacción de los turistas</strong> 
          y sus experiencias en los principales destinos del país.  
          Tu opinión es esencial para mejorar la calidad del turismo nacional y 
          promover un desarrollo sostenible.
        </p>

        {/* Tarjetas en fila */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Nosotros */}
          <div className="bg-emerald-50 rounded-xl p-6 shadow-sm border border-emerald-100 hover:shadow-md transition">
            <div className="flex items-center justify-center mb-4">
              <Info size={36} className="text-emerald-600" />
            </div>
            <h2 className="text-lg font-semibold text-emerald-700 mb-2 text-center">
              Nosotros
            </h2>
            <p className="text-sm text-gray-600 text-center mb-4">
              Conoce más sobre el propósito de VoyagePulse 2025 y cómo nuestra
              encuesta contribuye al fortalecimiento del turismo en el país.
            </p>
            <div className="flex justify-center">
              <Link
                href={routes.about.path}
                className="text-emerald-700 font-medium hover:underline"
              >
                Más información →
              </Link>
            </div>
          </div>

          {/* Contacto */}
          <div className="bg-emerald-50 rounded-xl p-6 shadow-sm border border-emerald-100 hover:shadow-md transition">
            <div className="flex items-center justify-center mb-4">
              <Mail size={36} className="text-emerald-600" />
            </div>
            <h2 className="text-lg font-semibold text-emerald-700 mb-2 text-center">
              Contacto
            </h2>
            <p className="text-sm text-gray-600 text-center mb-4">
              Si tienes dudas, sugerencias o deseas colaborar, comunícate con
              nuestro equipo a través del formulario de contacto.
            </p>
            <div className="flex justify-center">
              <Link
                href={routes.contact.path}
                className="text-emerald-700 font-medium hover:underline"
              >
                Contáctanos →
              </Link>
            </div>
          </div>

          {/* Soporte */}
          <div className="bg-emerald-50 rounded-xl p-6 shadow-sm border border-emerald-100 hover:shadow-md transition">
            <div className="flex items-center justify-center mb-4">
              <LifeBuoy size={36} className="text-emerald-600" />
            </div>
            <h2 className="text-lg font-semibold text-emerald-700 mb-2 text-center">
              Soporte
            </h2>
            <p className="text-sm text-gray-600 text-center mb-4">
              Accede a la sección de ayuda técnica o revisa las preguntas
              frecuentes sobre el funcionamiento de la encuesta.
            </p>
            <div className="flex justify-center">
              <Link
                href={routes.contact.path}
                className="text-emerald-700 font-medium hover:underline"
              >
                Obtener soporte →
              </Link>
            </div>
          </div>
        </div>

        {/* Botón de comenzar */}
        <div className="text-center mt-12">
          <Link
            href="/form"
            className="bg-emerald-600 text-white px-8 py-3 rounded-xl hover:bg-emerald-700 transition font-medium shadow-sm"
          >
            Comenzar Encuesta
          </Link>
        </div>
      </section>
    </main>
  );
}