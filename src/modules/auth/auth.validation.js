import { z } from "zod";

const userRegisterSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
  }),
});

const userLoginSchema = z.object({
  body: z.object({
    email: z.string(),
    password: z.string(),
  }),
});

export const userValidationSchema = { userLoginSchema, userRegisterSchema };
