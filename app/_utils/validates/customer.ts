import { z } from "zod";

export type CustomerFormData = z.infer<typeof customerFormSchema>;

export const customerFormSchema = z.object({
  name: z.string().min(1, { message: "Fullname is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email format"),
  phone: z.string().min(1, { message: "Phone is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  last_contacted: z.string().date(),
});
