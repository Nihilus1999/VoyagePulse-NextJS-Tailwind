import { z } from "zod";

export const step1VisitorInfoSchema = z.object({
  nombre: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres." })
    .regex(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, {
      message: "El nombre solo puede contener letras y espacios.",
    }),

  pais: z
    .string()
    .min(2, { message: "Debes indicar tu país de origen." }),

  edad: z
    .number()
    .int()
    .min(12, { message: "La edad mínima es 12 años." })
    .max(100, { message: "La edad máxima es 100 años." }),

  motivoVisita: z
    .string()
    .nonempty({ message: "Debes seleccionar un motivo de visita." }),
});

export type Step1VisitorInfoData = z.infer<typeof step1VisitorInfoSchema>;
