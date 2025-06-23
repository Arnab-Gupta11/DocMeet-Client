"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomForm from "@/components/form/CustomForm";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import useCustomForm from "@/hooks/useCustomForm";
import { cn } from "@/lib/utils";
import { doctorEducationSchema, doctorProfilePersonalInfoSchema } from "@/schema/doctorProfile.schema";
import { format } from "date-fns";
import { CalendarIcon, Plus } from "lucide-react";
import { useFieldArray } from "react-hook-form";
import { ImSpinner6 } from "react-icons/im";
import { z } from "zod";

export const doctorProfilePersonalInfoDefaultValues = {
  education: [{ degree: "", institution: "", startDate: undefined, endDate: undefined }],
  // awards: [{ awardName: "", date: "", description: "" }],
};

const DoctorEducationForm = () => {
  const [form] = useCustomForm(doctorEducationSchema, doctorProfilePersonalInfoDefaultValues);
  const {
    formState: { isSubmitting, isDirty },
  } = form;

  const {
    fields: educationFields,
    // append: appendEducation,
    // remove: removeEducation,
  } = useFieldArray({
    name: "education",
    control: form.control,
    rules: { minLength: 1 },
  });
  const onSubmit = async (data: z.infer<typeof doctorEducationSchema>) => {
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
            {/* Education  */}
            <div>
              <div className="flex gap-3 border-light-border dark:border-dark-muted-bg items-center border-t border-b py-3 my-5">
                <p className="text-light-primary-text dark:text-dark-primary-txt font-semibold text-base">Specification</p>
                <span
                  // onClick={() => appendEducation({ degree: "", institution: "", startDate: "", endDate: "" })}
                  className="size-7 flex items-center  justify-center border-2 dark:border-gray-900 rounded-xl hover:shadow-box-shadow-light hover:dark:shadow-box-shadow-dark cursor-pointer hover:scale-105 active:scale-95 transition-all ease-in-out hover:border-primary dark:hover:border-primary duration-500"
                >
                  <Plus className="text-primary" />
                </span>
              </div>
              <div>
                {educationFields.map((field, index) => {
                  return (
                    <div key={field.id} className="flex flex-col gap-2 mt-4 w-full">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                        <div className="w-full sm:w-1/2 ">
                          <FormField
                            control={form.control}
                            name={`education.${index}.degree`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Degree Name</FormLabel>
                                <FormControl>
                                  <Input {...field} placeholder="Enter your degree name" value={field.value || ""} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="w-full sm:w-1/2 ">
                          <FormField
                            control={form.control}
                            name={`education.${index}.institution`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Institution Name</FormLabel>
                                <FormControl>
                                  <Input {...field} value={field.value || ""} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                        <div className="w-full sm:w-1/2 ">
                          <FormField
                            control={form.control}
                            name={`education.${index}.startDate`}
                            render={({ field }) => (
                              <FormItem className="flex flex-col">
                                <FormLabel>Start Date</FormLabel>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant={"outline"}
                                        className={cn(
                                          "w-full rounded-xl pl-3 text-left font-normal h-12 focus:border tracking-wider border-2 border-indigo-100 dark:border-dark-primary-border px-3 py-1.5 bg-slate-50 dark:bg-secondary-bg-dark-2 text-primary-text-light dark:text-primary-text-dark hover:shadow-none hover:dark:shadow-none ",
                                          !field.value && "text-muted-foreground"
                                        )}
                                      >
                                        {field.value ? (
                                          format(field.value, "PPP")
                                        ) : (
                                          <span className="text-slate-500 dark:text-slate-400 font-medium text-[12px] sm:text-[14px]">
                                            Pick start date
                                          </span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                                      captionLayout="dropdown"
                                    />
                                  </PopoverContent>
                                </Popover>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="w-full sm:w-1/2 ">
                          <FormField
                            control={form.control}
                            name={`education.${index}.endDate`}
                            render={({ field }) => (
                              <FormItem className="flex flex-col">
                                <FormLabel>End Date</FormLabel>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant={"outline"}
                                        className={cn(
                                          "w-full rounded-xl pl-3 text-left font-normal h-12 focus:border tracking-wider border-2 border-indigo-100 dark:border-dark-primary-border px-3 py-1.5 bg-slate-50 dark:bg-secondary-bg-dark-2 text-primary-text-light dark:text-primary-text-dark hover:shadow-none hover:dark:shadow-none ",
                                          !field.value && "text-muted-foreground"
                                        )}
                                      >
                                        {field.value ? (
                                          format(field.value, "PPP")
                                        ) : (
                                          <span className="text-slate-500 dark:text-slate-400 font-medium text-[12px] sm:text-[14px]">
                                            Pick end date
                                          </span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                                      captionLayout="dropdown"
                                    />
                                  </PopoverContent>
                                </Popover>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      {/* <Button
                        type="button"
                        variant={"primary"}
                        onClick={() => index > 0 && removeSpecification(index)}
                        className="rounded-2xl py-5 px-4 mt-2  sm:mt-7"
                      >
                        <IoMdRemove />
                      </Button> */}
                    </div>
                  );
                })}
              </div>
            </div>
            <Button disabled={!isDirty || isSubmitting} type="submit" className="mt-8">
              {isSubmitting ? <ImSpinner6 className="animate-spin" /> : "Save Changes"}
            </Button>
          </CustomForm>
        </div>
      </div>
    </div>
  );
};

export default DoctorEducationForm;
