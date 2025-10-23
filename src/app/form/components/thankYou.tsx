import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { routes } from "@/routes/routes";

export default function thankYou() {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <div className="flex justify-center mb-6">
        <div className="bg-emerald-100 rounded-full">
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

      <p className="text-gray-700 leading-relaxed mb-6 text-base max-w-md">
        Agradecemos sinceramente el tiempo que ha dedicado a completar la{" "}
        <strong>Encuesta VoyagePulse 2025</strong>.  
        Sus respuestas son esenciales para comprender mejor las experiencias
        turísticas y fortalecer el desarrollo sostenible del sector.
      </p>

      <p className="text-gray-600 mb-8 text-sm max-w-md">
        La información recopilada será tratada de manera confidencial y utilizada
        únicamente con fines de análisis y mejora continua de los servicios turísticos.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
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
    </div>
  );
}
