"use client";

import { useState } from "react";
import { User, Briefcase, Smile } from "lucide-react";
import FormPage from "./page";

export default function FormLayout() {
  const [step, setStep] = useState(1);

  const stepClasses = (index: number) =>
    `flex items-center justify-center w-14 h-14 rounded-full border-4 transition-all ${
      step >= index
        ? "bg-emerald-600 border-emerald-600 text-white shadow-lg"
        : "border-gray-300 text-gray-400 bg-gray-100"
    }`;

  const labelClasses = (index: number) =>
    `mt-3 text-sm font-semibold ${
      step >= index ? "text-emerald-700" : "text-gray-400"
    }`;

  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-white to-emerald-50 px-6 py-10">
      <section className="max-w-3xl w-full bg-white rounded-3xl shadow-xl border border-emerald-100 p-10">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-emerald-700 tracking-tight">
            Encuesta VoyagePulse 2025
          </h1>
          <p className="text-gray-600 mt-3 text-base">
            Completa los siguientes pasos para ayudarnos a conocer tu experiencia turística.
          </p>
        </div>

        {/* Barra de progreso */}
        <div className="flex justify-between items-center mb-12">
          {/* Paso 1 */}
          <div className="flex flex-col items-center">
            <div className={stepClasses(1)}>
              <User size={26} strokeWidth={2.2} />
            </div>
            <span className={labelClasses(1)}>Datos</span>
          </div>

          {/* Paso 2 */}
          <div className="flex flex-col items-center">
            <div className={stepClasses(2)}>
              <Briefcase size={26} strokeWidth={2.2} />
            </div>
            <span className={labelClasses(2)}>Experiencia</span>
          </div>

          {/* Paso 3 */}
          <div className="flex flex-col items-center">
            <div className={stepClasses(3)}>
              <Smile size={26} strokeWidth={2.2} />
            </div>
            <span className={labelClasses(3)}>Satisfacción</span>
          </div>
        </div>

        {/* Contenido dinámico: page.tsx */}
        <FormPage step={step} setStep={setStep} />
      </section>
    </main>
  );
}
