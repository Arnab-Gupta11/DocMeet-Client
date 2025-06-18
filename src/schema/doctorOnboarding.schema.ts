import { z } from "zod";

export const doctorOnboardingSchema = z.object({
  bmdcNumber: z.string().nonempty("BM&DC Registration Number is requires."),
  doctorType: z.string().nonempty("Doctor type must be either MBBS or BDS"),
  credentialsUrl: z.string().url("Valid credentials URL is required"),
  nationalId: z.string().min(1, "National ID is required"),
  workplace: z.string().min(1, "Workplace is required"),
  department: z.string().min(1, "Department is required"),
  phone: z.string().min(1, "Phone number is required"),
  certificateImage: z
    .instanceof(File)
    .refine((file) => file.size > 0, "Certificate image file is required")
    .refine((file) => file.size <= 5 * 1024 * 1024, "File size must be under 5MB")
    .refine((file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type), "Only JPG, PNG, or WEBP images are allowed"),
});
