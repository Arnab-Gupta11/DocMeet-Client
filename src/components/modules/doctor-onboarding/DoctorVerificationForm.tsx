"use client";

import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import CustomSelect from "@/components/form/CustomSelect";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { SelectItem } from "@/components/ui/select";
import { doctorTypeOptions } from "@/constants/user.constant";
import { doctorDepartments } from "@/data/doctorDepartment";
import useCustomForm from "@/hooks/useCustomForm";
import { doctorOnboardingSchema } from "@/schema/doctorOnboarding.schema";
import Link from "next/link";
import React, { useState } from "react";
import { ImSpinner6 } from "react-icons/im";
import { z } from "zod";
import CustomImageInput from "@/components/form/CustomImageInput";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
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
  const [imgPreview, setImagePreview] = useState<string | null>(null);
  const {
    formState: { isSubmitting },
  } = form;

  const handleSubmit = (data: z.infer<typeof doctorOnboardingSchema>) => {
    console.log("Submitting:", data);
  };

  return (
    <div className="max-w-2xl mx-auto card-bg-gradient  my-10 p-5  md:p-10 rounded-xl ">
      {/* Logo  */}
      <div className="flex justify-center">
        <Link href={"/"}>
          <Logo width={40} height={40} />
        </Link>
      </div>
      <h2 className="text-2xl md:text-3xl text-center font-semibold text-primary-text-light dark:text-primary-text-dark mt-8 ">
        Complete Your <span className="font-extrabold gradient-text">Doctor Verification</span>
      </h2>
      <p className="mt-2 mb-10 text-xs md:text-sm text-center text-secondary-text-light dark:text-secondary-text-dark font-medium">
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
        <div className="flex flex-col md:flex-row md:gap-5 w-full">
          <div className="md:w-1/2">
            <CustomInput fieldName="nationalId" form={form} label="National Id" placeholder="Enter national id" inputType="text" />
          </div>
          <div className="md:w-1/2">
            <CustomInput fieldName="phone" form={form} label="Phone No" placeholder="Enter active phone no" inputType="text" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-5 w-full">
          <div className="md:w-1/2">
            <CustomSelect fieldName="doctorType" form={form} label="Doctor Type" placeholder="Select doctor type">
              {doctorTypeOptions.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </CustomSelect>
          </div>
          <div className="w-full md:w-1/2">
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
        </div>
        <CustomInput fieldName="workplace" form={form} label="Current Workplace" placeholder="Enter Current workplace address" inputType="text" />

        <CustomInput fieldName="credentialsUrl" form={form} label="Credentials Url" placeholder="Enter credentialsUrl" inputType="text" />
        <Alert variant="default" className="mt-2 bg-sky-50 dark:bg-sky-800/5 border-2 border-dotted border-primary">
          <InfoIcon className="size-5 text-blue-500" />
          <AlertTitle className="text-primary-text-light dark:text-primary-text-dark font-semibold">What is a Credentials URL?</AlertTitle>
          <AlertDescription className="text-secondary-text-light dark:text-secondary-text-dark font-medium">
            Please enter a valid link to your certification or credentials, such as a PDF hosted on Google Drive, Dropbox, or a hospital database.
            Make sure the link is publicly accessible.
          </AlertDescription>
        </Alert>

        <CustomImageInput
          fieldName="certificateImage"
          form={form}
          imgPreview={imgPreview}
          setImagePreview={setImagePreview}
          label="Certificate Image"
        />
        <Alert variant="default" className=" bg-sky-50 dark:bg-sky-800/5 border-2 border-dotted border-primary">
          <InfoIcon className="size-5 text-blue-500 w-full" />
          <AlertTitle className="text-primary-text-light dark:text-primary-text-dark font-semibold">Upload a valid certificate image</AlertTitle>
          <AlertDescription className="text-secondary-text-light dark:text-secondary-text-dark font-medium">
            <p className="font-medium">
              Please upload a clear image of your original <span className="font-semibold">M.B.B.S.</span> or{" "}
              <span className="font-semibold">B.D.S.</span> certificate.
            </p>
          </AlertDescription>
        </Alert>

        <Button disabled={isSubmitting} type="submit" className="w-full mt-8 ">
          {isSubmitting ? <ImSpinner6 className="animate-spin " /> : "Submit Verification"}
        </Button>
      </CustomForm>
    </div>
  );
};

export default DoctorVerificationForm;
