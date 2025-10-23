import { z } from "zod";


export const step2ExperienceSchema = z.object({
  calidadServicio: z
    .string()
    .nonempty({ message: "Selecciona una opción de calidad del servicio." }),
  limpieza: z
    .string()
    .nonempty({ message: "Selecciona una opción de limpieza." }),
  hospitalidad: z
    .string()
    .nonempty({ message: "Selecciona una opción de hospitalidad." }),
  transporte: z
    .string()
    .nonempty({ message: "Selecciona una opción de transporte." }),
});

export type Step2ExperienceData = z.infer<typeof step2ExperienceSchema>;
