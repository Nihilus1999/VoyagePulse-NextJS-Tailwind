"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  step2ExperienceSchema,
  Step2ExperienceData,
} from "@/models/form/step2.experience.schema";

export default function Step2Experience({
  onNext,
  onBack,
}: {
  onNext: (data: Step2ExperienceData) => void;
  onBack: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step2ExperienceData>({
    resolver: zodResolver(step2ExperienceSchema),
  });

  const onSubmit = (data: Step2ExperienceData) => onNext(data);

  const opciones = ["Excelente", "Buena", "Regular", "Deficiente"];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-2xl font-bold text-emerald-700 mb-4">
        Paso 2: Experiencia turística
      </h2>

      {["calidadServicio", "limpieza", "hospitalidad", "transporte"].map(
        (field, i) => (
          <div key={i}>
            <label className="block text-emerald-700 font-medium mb-1 capitalize">
              {field.replace(/([A-Z])/g, " $1")}
            </label>
            <select
              {...register(field as keyof Step2ExperienceData)}
              className="w-full border border-emerald-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-400 outline-none"
            >
              <option value="">Selecciona...</option>
              {opciones.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors[field as keyof Step2ExperienceData] && (
              <p className="text-red-600 text-sm mt-1">
                {errors[field as keyof Step2ExperienceData]?.message}
              </p>
            )}
          </div>
        )
      )}

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={onBack}
          className="bg-white border border-emerald-500 text-emerald-600 px-6 py-2 rounded-xl hover:bg-emerald-50 transition font-medium"
        >
          Atrás
        </button>
        <button
          type="submit"
          className="bg-emerald-600 text-white px-6 py-2 rounded-xl hover:bg-emerald-700 transition font-medium"
        >
          Siguiente
        </button>
      </div>
    </form>
  );
}