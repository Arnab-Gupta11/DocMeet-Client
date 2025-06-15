/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "../../ui/button";
import { z } from "zod";
import CustomForm from "../../form/CustomForm";
import Link from "next/link";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useParams, useRouter } from "next/navigation";
import useCustomForm from "@/hooks/useCustomForm";
import { emailOtpVerificationSchema } from "@/schema/auth.schema";
import Logo from "@/components/shared/Logo";
import { verifyEmail } from "@/services/auth";
import { toast } from "sonner";
import { ImSpinner6 } from "react-icons/im";

export const emailOtpVerificationDefaultValue = {
  otp: "",
};

const VerifyEmail = () => {
  const { id } = useParams();
  const router = useRouter();
  const [form] = useCustomForm(emailOtpVerificationSchema, emailOtpVerificationDefaultValue);
  const {
    formState: { isSubmitting },
  } = form;
  const onSubmit = async (values: z.infer<typeof emailOtpVerificationSchema>) => {
    try {
      const res = await verifyEmail({ ...values }, id as string);
      if (res?.success) {
        toast.success(res?.message);
        form.reset();
        router.push("/login");
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="card-bg-gradient max-w-[450px] mx-auto mt-16 lg:mt-40 p-10">
        <div>
          <div className="flex justify-center">
            <Link href={"/"}>
              <Logo width={40} height={40} />
            </Link>
          </div>
          <p className="text-center  font-semibold text-primary-text-light dark:text-primary-text-dark text-xl sm:text-3xl mt-5">
            Verify Your Email.
          </p>
        </div>
        <div>
          <CustomForm onSubmit={onSubmit} form={form}>
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem className="space-y-5">
                  <p className="text-secondary-text-light dark:text-secondary-text-dark text-center text-sm font-medium  my-2">
                    Enter the 4-digit code sent to your email address.
                  </p>
                  <FormControl>
                    <InputOTP maxLength={4} {...field} className="mb-4">
                      <InputOTPGroup className="mx-auto">
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage className="text-red-500 text-center" />
                </FormItem>
              )}
            />

            <Button disabled={isSubmitting} type="submit" className="w-full mt-8 ">
              {isSubmitting ? <ImSpinner6 className="animate-spin" /> : "Sign Up"}
            </Button>
          </CustomForm>
        </div>
        <div>
          <p className="text-sm font-medium text-center text-secondary-text-light dark:text-secondary-text-dark mt-4">
            <Link href="/register">
              Don&apos;t have an Account? <span className="font-semibold text-primary hover:underline">Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
