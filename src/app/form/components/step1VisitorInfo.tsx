"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  step1VisitorInfoSchema,
  Step1VisitorInfoData,
} from "@/models/form/step1.visitorInfo.schema";

export default function Step1VisitorInfo({
  onNext,
}: {
  onNext: (data: Step1VisitorInfoData) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step1VisitorInfoData>({
    resolver: zodResolver(step1VisitorInfoSchema),
  });

  const onSubmit = (data: Step1VisitorInfoData) => onNext(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-2xl font-bold text-emerald-700 mb-4">
        Paso 1: Información del visitante
      </h2>

      {/* Nombre */}
      <div>
        <label className="block text-emerald-700 font-medium mb-1">
          Nombre
        </label>
        <input
          type="text"
          {...register("nombre")}
          className="w-full border border-emerald-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-400 outline-none"
        />
        {errors.nombre && (
          <p className="text-red-600 text-sm mt-1">{errors.nombre.message}</p>
        )}
      </div>

      {/* País */}
      <div>
        <label className="block text-emerald-700 font-medium mb-1">
          País de origen
        </label>
        <input
          type="text"
          {...register("pais")}
          className="w-full border border-emerald-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-400 outline-none"
        />
        {errors.pais && (
          <p className="text-red-600 text-sm mt-1">{errors.pais.message}</p>
        )}
      </div>

      {/* Edad */}
      <div>
        <label className="block text-emerald-700 font-medium mb-1">Edad</label>
        <input
          type="number"
          {...register("edad", { valueAsNumber: true })}
          className="w-full border border-emerald-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-400 outline-none"
        />
        {errors.edad && (
          <p className="text-red-600 text-sm mt-1">{errors.edad.message}</p>
        )}
      </div>

      {/* Motivo de visita */}
      <div>
        <label className="block text-emerald-700 font-medium mb-1">
          Motivo de visita
        </label>
        <select
          {...register("motivoVisita")}
          className="w-full border border-emerald-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-400 outline-none"
        >
          <option value="">Selecciona...</option>
          <option value="Vacaciones">Vacaciones</option>
          <option value="Trabajo">Trabajo</option>
          <option value="Estudio">Estudio</option>
          <option value="Otro">Otro</option>
        </select>
        {errors.motivoVisita && (
          <p className="text-red-600 text-sm mt-1">
            {errors.motivoVisita.message}
          </p>
        )}
      </div>

      {/* Botón siguiente */}
      <button
        type="submit"
        className="bg-emerald-600 text-white px-6 py-2 rounded-xl hover:bg-emerald-700 transition w-full font-medium"
      >
        Siguiente
      </button>
    </form>
  );
}
