"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomForm from "@/components/form/CustomForm";
import CustomImageInput from "@/components/form/CustomImageInput";
import CustomInput from "@/components/form/CustomInput";
import CustomSelect from "@/components/form/CustomSelect";
import CustomTextarea from "@/components/form/CustomTextarea";
import { Button } from "@/components/ui/button";
import { SelectItem } from "@/components/ui/select";
import { doctorDepartments } from "@/data/doctorDepartment";
import useCustomForm from "@/hooks/useCustomForm";
import { doctorProfilePersonalInfoSchema } from "@/schema/doctorProfile.schema";
import { useState } from "react";
import { ImSpinner6 } from "react-icons/im";
import { z } from "zod";

export const doctorProfilePersonalInfoDefaultValues = {
  firstName: "",
  lastName: "",
  profileImage: undefined, // for a file input
  bio: "",
  experienceYears: "",
  department: "",
  designation: "",
  specialties: "",
  qualifications: "",
  consultationFee: "",
};

const DoctorPersonalInfoForm = () => {
  const [imgPreview, setImagePreview] = useState<string | null>(null);
  const [form] = useCustomForm(doctorProfilePersonalInfoSchema, doctorProfilePersonalInfoDefaultValues);
  const {
    formState: { isSubmitting, isDirty },
  } = form;
  const onSubmit = async (data: z.infer<typeof doctorProfilePersonalInfoSchema>) => {
    console.log(data);
    try {
      // const personalInfo = {};
      // const res = await loginUser(userInfo);
      // if (res?.success) {
      //   toast.success(res?.message);
      // } else {
      //   toast.error(res?.message);
      // }
    } catch (err: any) {
      console.error(err);
    }
  };
  return (
    <div>
      <div className="card-bg-gradient mx-auto p-3 sm:p-5 md:p-10">
        <div>
          <CustomForm onSubmit={onSubmit} form={form}>
            {/* Image  */}
            <CustomImageInput fieldName="profileImage" form={form} imgPreview={imgPreview} setImagePreview={setImagePreview} label="Profile Image" />

            {/* Name  */}
            <div className="flex flex-col md:flex-row md:gap-5 w-full">
              <div className="md:w-1/2">
                <CustomInput fieldName="firstName" form={form} label="First Name" placeholder="Enter your first name (e.g., John)" inputType="text" />
              </div>
              <div className="md:w-1/2">
                <CustomInput fieldName="lastName" form={form} label="Last Name" placeholder="Enter your last name (e.g., Doe)" inputType="text" />
              </div>
            </div>

            {/* Fee and years of experience  */}
            <div className="flex flex-col md:flex-row md:gap-5 w-full">
              <div className="md:w-1/2">
                <CustomInput
                  fieldName="experienceYears"
                  form={form}
                  label="Total Years of Experience"
                  placeholder="Enter years of experience (e.g., 5)"
                  inputType="number"
                />
              </div>
              <div className="md:w-1/2">
                <CustomInput
                  fieldName="consultationFee"
                  form={form}
                  label="Consultation Fee"
                  placeholder="Enter your consultation fee in BDT (e.g., 500)"
                  inputType="number"
                />
              </div>
            </div>

            {/* Designation and Department  */}
            <div className="flex flex-col md:flex-row md:gap-5 w-full">
              <div className="md:w-1/2">
                <CustomSelect fieldName="department" form={form} label="Department" placeholder="Select your department">
                  {doctorDepartments.map((item) => {
                    const { name, icon: Icon } = item;
                    return (
                      <SelectItem key={item.name} value={item.name}>
                        <div className="flex items-center gap-1">
                          <Icon />
                          <span>{name}</span>
                        </div>
                      </SelectItem>
                    );
                  })}
                </CustomSelect>
              </div>
              <div className="md:w-1/2">
                <CustomInput
                  fieldName="designation"
                  form={form}
                  label="Designation"
                  placeholder="Enter your current designation (e.g., Senior Consultant)"
                  inputType="text"
                />
              </div>
            </div>
            <CustomInput
              fieldName="specialties"
              form={form}
              label="Specialties"
              placeholder="List your specialties (e.g., Heart Surgery, ECG Analysis)"
              inputType="text"
            />
            <CustomInput
              fieldName="qualifications"
              form={form}
              label="Qualifications"
              placeholder="List your qualifications (e.g., MBBS, MD - Cardiology)"
              inputType="text"
            />

            <CustomTextarea fieldName="bio" form={form} label="Bio" placeholder="Write a short bio..." />

            <Button disabled={!isDirty || isSubmitting} type="submit" className="mt-8">
              {isSubmitting ? <ImSpinner6 className="animate-spin" /> : "Save Changes"}
            </Button>
          </CustomForm>
        </div>
      </div>
    </div>
  );
};

export default DoctorPersonalInfoForm;
