import { z } from "zod";

export const step3SatisfactionSchema = z.object({
  satisfaccion: z.enum([
    "Muy satisfecho",
    "Satisfecho",
    "Neutral",
    "Insatisfecho",
    "Muy insatisfecho",
  ]),
  recomendarias: z.enum(["Sí", "No"]),
  comentarios: z
    .string()
    .max(300, { message: "Máximo 300 caracteres." })
    .optional(),
});

export type Step3SatisfactionData = z.infer<typeof step3SatisfactionSchema>;
