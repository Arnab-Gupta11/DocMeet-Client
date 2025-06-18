/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "../../ui/button";
import { z } from "zod";
import CustomInput from "../../form/CustomInput";
import CustomForm from "../../form/CustomForm";
import Link from "next/link";
import CustomPassword from "@/components/form/CustomPassword";
import { loginSchema } from "@/schema/auth.schema";
import useCustomForm from "@/hooks/useCustomForm";
import Logo from "@/components/shared/Logo";
import { loginUser } from "@/services/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ImSpinner6 } from "react-icons/im";

export const loginFormDefaultValue = {
  email: "",
  password: "",
};

const Login = () => {
  const router = useRouter();
  const [form] = useCustomForm(loginSchema, loginFormDefaultValue);
  const {
    formState: { isSubmitting },
  } = form;
  // console.log(form);
  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await loginUser(userInfo);
      console.log("Response ", res);
      if (res?.success) {
        toast.success(res?.message);
        if (res?.data?.role === "DOCTOR") {
          router.push("/onboarding");
        } else if (res?.data?.role === "PATIENT") {
          router.push("/doctors");
        } else if (res?.data?.role === "ADMIN") {
          router.push("/");
        }
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="px-3 md:px-5 lg:px-0">
      <div className="card-bg-gradient max-w-[450px] mx-auto mt-10 md:mt-28 p-10">
        <div>
          <div className="flex justify-center">
            <Link href={"/"}>
              <Logo width={40} height={40} />
            </Link>
          </div>
          <p className="text-center text-sm font-medium text-secondary-text-light dark:text-secondary-text-dark pt-4 tracking-wide">
            Welcome back! Log in to access your account and stay connected.
          </p>
        </div>
        <div className="mt-6">
          <CustomForm onSubmit={onSubmit} form={form}>
            <CustomInput form={form} fieldName={"email"} label={"Email"} inputType={"text"} placeholder={"Enter your email"} />
            <CustomPassword form={form} fieldName={"password"} label={"Password"} inputType={"password"} placeholder={"Enter your password"} />
            <p className="text-base font-semibold text-primary hover:underline mt-2 pl-1">
              <Link href="/account/reset-password-link">Forgot password?</Link>
            </p>

            <Button disabled={isSubmitting} type="submit" className="w-full mt-8 ">
              {isSubmitting ? <ImSpinner6 className="animate-spin" /> : "Sign In"}
            </Button>
          </CustomForm>
        </div>
        <p className="text-[15px] font-medium text-center text-secondary-text-light dark:text-secondary-text-dark mt-5 tracking-wide">
          <Link href="/register">
            Don&apos;t have an Account? <span className="font-semibold text-primary hover:underline">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
