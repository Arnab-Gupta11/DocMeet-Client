"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { z } from "zod";
import CustomInput from "../../form/CustomInput";
import CustomForm from "../../form/CustomForm";
import useFormHook from "@/hooks/useFormHook";
import { loginFormDefaultValue, loginSchema } from "@/schemas/auth/austhSchema";
import Logo from "../shared/Logo";
import Link from "next/link";
import CustomPassword from "@/components/form/CustomPassword";

const Login = () => {
  const [form] = useFormHook(loginSchema, loginFormDefaultValue);
  // console.log(form);
  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
    form.reset();
  }

  return (
    <div>
      <Card className="bg-primary-bg-light dark:bg-primary-bg-dark shadow-card-shadow-light dark:shadow-card-shadow-dark border-none">
        <CardHeader>
          <CardTitle className="mx-auto">
            <Logo width={200} />
          </CardTitle>
          <CardDescription className="text-center text-sm font-medium text-slate-800 dark:text-slate-200">
            Welcome back! Log in to access your account and stay connected.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CustomForm onSubmit={onSubmit} form={form}>
            <CustomInput form={form} fieldName={"email"} label={"Email"} inputType={"text"} placeholder={"Enter your email"} />
            <CustomPassword form={form} fieldName={"password"} label={"Password"} inputType={"password"} placeholder={"Enter your password"} />
            <p className="text-sm font-semibold text-primary-text hover:underline mt-2">
              <Link href="/account/reset-password-link">Forgot password?</Link>
            </p>

            <Button type="submit" className="w-full mt-8">
              Sign In
            </Button>
          </CustomForm>
        </CardContent>
        <CardFooter>
          <p className="text-sm font-medium text-center text-slate-700 dark:text-slate-300">
            <Link href="/account/register">
              Don&apos;t have an Account? <span className="font-semibold text-primary-text hover:underline">Sign Up</span>
            </Link>
          </p>
        </CardFooter>
      </Card>
      {/* </TabsContent> */}
    </div>
  );
};

export default Login;

