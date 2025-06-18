"use client";

import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import CustomSelect from "@/components/form/CustomSelect";
import { SelectItem } from "@/components/ui/select";
import { doctorTypeOptions } from "@/constants/user.constant";
import { doctorDepartments } from "@/data/doctorDepartment";
import useCustomForm from "@/hooks/useCustomForm";
import { doctorOnboardingSchema } from "@/schema/doctorOnboarding.schema";
import React from "react";

const initialState = {
  bmdcNumber: "",
  doctorType: "",
  certificateImage: undefined,
  credentialsUrl: "",
  nationalId: "",
  workplace: "",
  department: "",
  phone: "",
};

const DoctorVerificationForm = () => {
  const [form] = useCustomForm(doctorOnboardingSchema, initialState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting:", form);
    // Submit to backend here
  };

  return (
    <div className="max-w-xl mx-auto card-bg-gradient  my-10 p-5  md:p-10 rounded-xl ">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Complete Your Doctor Verification</h2>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
        Please fill out the form below to verify your medical credentials. All fields are required for verification.
      </p>
      <CustomForm form={form} onSubmit={handleSubmit}>
        <CustomInput
          fieldName="bmdcNumber"
          form={form}
          label="BM&DC Registration Number"
          placeholder="Enter BM&DC Full Registration Number"
          inputType="text"
        />
        <CustomSelect fieldName="doctorType" form={form} label="Doctor Type" placeholder="Select doctor type">
          {doctorTypeOptions.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </CustomSelect>
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
        <CustomInput fieldName="nationalId" form={form} label="National Id" placeholder="Enter national id" inputType="text" />
        <CustomInput fieldName="workplace" form={form} label="Current Workplace" placeholder="Enter Current workplace address" inputType="text" />
        <CustomInput fieldName="phone" form={form} label="Phone No" placeholder="Enter active phone no" inputType="text" />
        <CustomInput fieldName="credentialsUrl" form={form} label="Credentials Url" placeholder="Enter credentialsUrl" inputType="text" />

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200">
          Submit Verification
        </button>
      </CustomForm>
    </div>
  );
};

export default DoctorVerificationForm;
