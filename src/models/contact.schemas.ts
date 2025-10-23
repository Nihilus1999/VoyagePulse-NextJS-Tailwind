import { z } from "zod";

export const contactSchema = z.object({
  nombre: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres." })
    .max(50, { message: "El nombre no puede exceder los 50 caracteres." })
    .regex(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, {
      message: "El nombre solo puede contener letras y espacios.",
    }),

  correo: z.email({ message: "Debe ser un correo electrónico válido." }),

  telefono: z
    .string()
    .regex(/^[0-9]+$/, {
      message: "El teléfono solo puede contener números.",
    })
    .min(7, { message: "El teléfono debe tener al menos 7 dígitos." })
    .max(15, { message: "El teléfono no puede exceder los 15 dígitos." }),

  asunto: z
    .string()
    .min(3, { message: "El asunto debe tener al menos 3 caracteres." })
    .max(100, { message: "El asunto no puede exceder los 100 caracteres." }),

  mensaje: z
    .string()
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres." })
    .max(500, { message: "El mensaje no puede exceder los 500 caracteres." }),
});


export type ContactFormData = z.infer<typeof contactSchema>;
