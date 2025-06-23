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

export const doctorEducationSchema = z.object({
  education: z.array(
    z.object({
      degree: z.string().min(1, "Degree is required"),
      institution: z.string().min(1, "Institution is required"),
      startDate: z.date({ required_error: "Start date is required" }),
      endDate: z.date({ required_error: "End date is required" }),
    })
  ),
  // .nonempty("At least one education entry is required"),

  // awards: z.array(
  //   z.object({
  //     awardName: z.string().min(1, "Award name is required"),
  //     date: z.string().min(1, "Award date is required"),
  //     description: z.string().min(1, "Description is required"),
  //   })
  // ),
});
