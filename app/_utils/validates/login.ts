import { z } from "zod";

export type LoginFormData = z.infer<typeof LoginFormSchema>;

export const LoginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email format"),
  password: z.string().min(1, { message: "Password is required" }),
});
