"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  step3SatisfactionSchema,
  Step3SatisfactionData,
} from "@/models/form/step3.satisfactions.schema";

export default function Step3Satisfaction({
  onSubmitFinal,
  onBack,
}: {
  onSubmitFinal: (data: Step3SatisfactionData) => void;
  onBack: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step3SatisfactionData>({
    resolver: zodResolver(step3SatisfactionSchema),
  });

  const onSubmit = (data: Step3SatisfactionData) => onSubmitFinal(data);

  const nivelesSatisfaccion = [
    "Muy satisfecho",
    "Satisfecho",
    "Neutral",
    "Insatisfecho",
    "Muy insatisfecho",
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-2xl font-bold text-emerald-700 mb-4">
        Paso 3: Satisfacción general
      </h2>

      {/* Nivel de satisfacción */}
      <div>
        <label className="block text-emerald-700 font-medium mb-2">
          ¿Cómo calificarías tu nivel de satisfacción con el destino?
        </label>
        <div className="grid sm:grid-cols-2 gap-3">
          {nivelesSatisfaccion.map((nivel) => (
            <label
              key={nivel}
              className="flex items-center gap-2 p-2 border border-emerald-300 rounded-lg cursor-pointer hover:bg-emerald-50"
            >
              <input
                type="radio"
                value={nivel}
                {...register("satisfaccion")}
                className="accent-emerald-600"
              />
              <span className="text-gray-700">{nivel}</span>
            </label>
          ))}
        </div>
        {errors.satisfaccion && (
          <p className="text-red-600 text-sm mt-1">
            {errors.satisfaccion.message}
          </p>
        )}
      </div>

      {/* Recomendarías */}
      <div>
        <label className="block text-emerald-700 font-medium mb-2">
          ¿Recomendarías este destino a otras personas?
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="Sí"
              {...register("recomendarias")}
              className="accent-emerald-600"
            />
            Sí
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="No"
              {...register("recomendarias")}
              className="accent-emerald-600"
            />
            No
          </label>
        </div>
        {errors.recomendarias && (
          <p className="text-red-600 text-sm mt-1">
            {errors.recomendarias.message}
          </p>
        )}
      </div>

      {/* Comentarios */}
      <div>
        <label className="block text-emerald-700 font-medium mb-1">
          Comentarios adicionales
        </label>
        <textarea
          rows={4}
          {...register("comentarios")}
          placeholder="Cuéntanos tu experiencia..."
          className="w-full border border-emerald-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-400 outline-none"
        />
        {errors.comentarios && (
          <p className="text-red-600 text-sm mt-1">
            {errors.comentarios.message}
          </p>
        )}
      </div>

      {/* Botones */}
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
          Enviar encuesta
        </button>
      </div>
    </form>
  );
}