import { z } from "zod";

export const todoValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    details: z.string(),
    isDone: z.boolean(),
  }),
});
