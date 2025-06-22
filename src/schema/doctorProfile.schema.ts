import { z } from "zod";

export const doctorProfilePersonalInfoSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  profileImage: z
    .instanceof(File)
    .refine((file) => file.size <= 5 * 1024 * 1024, "File size must be under 5MB")
    .refine((file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type), "Only JPG, PNG, or WEBP images are allowed")
    .optional(),
  bio: z.string().optional(),
  experienceYears: z.string().optional(),
  department: z.string().optional(),
  designation: z.string().optional(),
  specialties: z.string().optional(),
  qualifications: z.string().optional(),
  consultationFee: z.string().optional(),
});
