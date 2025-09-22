// src/forms/schemas.js
import { z } from "zod";

export const step1Schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z
    .string()
    .min(1, "Email is required") // <-- this fixes the test
    .email("Invalid email"), // will show "Invalid email" if format is wrong, "Email is required" if empty
});

export const step2Schema = z.object({
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  zip: z.string().min(3, "ZIP must be at least 3 characters"),
});

// ✅ Full schema for multi-step validation
export const fullSchema = step1Schema.merge(step2Schema);
