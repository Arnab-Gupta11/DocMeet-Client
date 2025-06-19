"use client";
import React from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { TCustomInput } from "@/types/form.types";

const CustomInput = ({ form, fieldName, inputType, label, placeholder }: TCustomInput) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="mt-4 w-full">
          <FormLabel className="">{label}</FormLabel>
          <FormControl>
            <Input type={inputType} placeholder={placeholder} {...field} className="focus-within:ring-0" />
          </FormControl>
          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
