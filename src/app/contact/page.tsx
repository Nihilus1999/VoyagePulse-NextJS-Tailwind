"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/models/contact.schemas";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    reset();
  };

  return (
    <main className=" flex items-center justify-center bg-gradient-to-br from-white to-emerald-50 px-6">
      <section className="max-w-3xl w-full bg-white rounded-2xl shadow-md p-10">
        <h1 className="text-3xl font-bold text-emerald-700 mb-4">
          Contáctanos
        </h1>
        <p className="text-gray-700 mb-6">
          ¿Tienes alguna pregunta o necesitas soporte? Completa el formulario y
          te responderemos lo antes posible.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Nombre"
              {...register("nombre")}
              className="w-full border border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400 rounded-lg px-4 py-2 outline-none transition"
            />
            {errors.nombre && (
              <p className="text-red-600 text-sm mt-1">
                {errors.nombre.message}
              </p>
            )}
          </div>

          {/* Mail */}
          <div>
            <input
              type="email"
              placeholder="Correo electrónico"
              {...register("correo")}
              className="w-full border border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400 rounded-lg px-4 py-2 outline-none transition"
            />
            {errors.correo && (
              <p className="text-red-600 text-sm mt-1">
                {errors.correo.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              type="text"
              placeholder="Teléfono"
              {...register("telefono")}
              className="w-full border border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400 rounded-lg px-4 py-2 outline-none transition"
            />
            {errors.telefono && (
              <p className="text-red-600 text-sm mt-1">
                {errors.telefono.message}
              </p>
            )}
          </div>

          {/* subject */}
          <div>
            <input
              type="text"
              placeholder="Asunto"
              {...register("asunto")}
              className="w-full border border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400 rounded-lg px-4 py-2 outline-none transition"
            />
            {errors.asunto && (
              <p className="text-red-600 text-sm mt-1">
                {errors.asunto.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              rows={4}
              placeholder="Mensaje"
              {...register("mensaje")}
              className="w-full border border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400 rounded-lg px-4 py-2 outline-none transition"
            />
            {errors.mensaje && (
              <p className="text-red-600 text-sm mt-1">
                {errors.mensaje.message}
              </p>
            )}
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-emerald-600 text-white px-6 py-2 rounded-xl hover:bg-emerald-700 active:bg-emerald-800 transition w-full font-medium"
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
          </button>
        </form>
      </section>
    </main>
  );
}
