import { z } from "zod";

export const formSchema = z.object({
  nombre: z.string().min(3, {
    message: "Este campo es obligatorio",
  }),
  email: z.string().min(3, {
    message: "Este campo es obligatorio",
  }),
  mensaje: z
    .string()
    .min(10, {
      message: "El mensaje debe tener al menos 10 caracteres",
    })
    .max(500, {
      message: "El mensaje no puede tener más de 500 caracteres",
    }),
});
