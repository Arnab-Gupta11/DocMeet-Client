/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { z } from "zod";
import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import CustomSelect from "@/components/form/CustomSelect";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CustomPassword from "@/components/form/CustomPassword";
import { registerSchema } from "@/schema/auth.schema";
import useCustomForm from "@/hooks/useCustomForm";
import Logo from "@/components/shared/Logo";
import { SelectItem } from "@/components/ui/select";
import { genderOptions, roleOptions } from "@/constants/user.constant";
import { createNewUser } from "@/services/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ImSpinner6 } from "react-icons/im";

export const registerFormDefaultValue = {
  fullName: "",
  email: "",
  password: "",
  confirmedPassword: "",
  role: "",
  gender: "",
};
const Register = () => {
  const router = useRouter();
  const [form] = useCustomForm(registerSchema, registerFormDefaultValue);
  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    try {
      const userInfo = {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        confirmedPassword: data.confirmedPassword,
        role: data.role,
        gender: data.gender,
      };
      const res = await createNewUser(userInfo);
      console.log(res);
      if (res?.success) {
        toast.success(res?.message);
        router.push(`/verify-email/${res?.data?._id}`);
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="px-3 md:px-5 lg:px-0">
      <div className="card-bg-gradient max-w-[450px] mx-auto my-10 p-10">
        <div>
          <div className="flex justify-center">
            <Link href={"/"}>
              <Logo width={40} height={40} />
            </Link>
          </div>
          <div className="text-center text-sm font-medium text-secondary-text-light dark:text-secondary-text-dark pt-4 tracking-wide">
            Create your account to explore jobs and grow your career.
          </div>
        </div>
        <div className="mt-5">
          <CustomForm onSubmit={onSubmit} form={form}>
            <CustomInput form={form} fieldName={"fullName"} label={"Full Name"} inputType={"text"} placeholder={"Enter your full name"} />
            <CustomInput form={form} fieldName={"email"} label={"Email"} inputType={"text"} placeholder={"Enter your email"} />

            <CustomSelect form={form} fieldName={"role"} label={"Role"} placeholder={"Select your role"}>
              {roleOptions.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </CustomSelect>
            <CustomSelect form={form} fieldName={"gender"} label={"Gender"} placeholder={"Select your gender"}>
              {genderOptions.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </CustomSelect>

            <CustomPassword form={form} fieldName={"password"} label={"Password"} inputType={"password"} placeholder={"Enter your password"} />
            <CustomPassword
              form={form}
              fieldName={"confirmedPassword"}
              label={"Confirmed Password"}
              inputType={"password"}
              placeholder={"Confirm your password"}
            />

            <Button disabled={isSubmitting} type="submit" className="w-full mt-8 ">
              {isSubmitting ? <ImSpinner6 className="animate-spin" /> : "Sign Up"}
            </Button>
          </CustomForm>
        </div>
        <div>
          <p className="text-[15px] font-medium text-center text-secondary-text-light dark:text-secondary-text-dark mt-5 tracking-wide">
            <Link href="/login">
              Already have an Account? <span className="font-semibold text-primary hover:underline">Sign In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
