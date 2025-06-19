import React from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Input } from "../ui/input";
import Image from "next/image";
import { X } from "lucide-react";
import { TCustomImageInput } from "@/types/form.types";

const CustomImageInput = ({ form, fieldName, placeholder = "Upload Image", label, imgPreview, setImagePreview }: TCustomImageInput) => {
  return (
    <div className="mt-4">
      <FormLabel className="pb-1.5">{label}</FormLabel>
      <label
        htmlFor="img"
        className="group flex items-center justify-center gap-2 h-12 w-full rounded-xl tracking-wider border-2 border-dashed border-indigo-100 dark:border-dark-primary-border px-3 py-1.5 bg-slate-50 dark:bg-secondary-bg-dark-2 hover:bg-[#d5f1fc]  dark:hover:bg-[#172023] hover:border-sky-700 dark:hover:border-sky-700 cursor-pointer mt-1.5"
      >
        <AiOutlineCloudUpload className="text-xl text-slate-500 dark:text-slate-400 group-hover:text-primary dark:group-hover:text-primary" />
        <span className="tracking-wider font-medium text-slate-500 dark:text-slate-400 group-hover:text-primary dark:group-hover:text-primary">
          {placeholder}
        </span>
      </label>
      <FormField
        control={form.control}
        name={fieldName}
        render={({ field: { onChange, onBlur, name, ref } }) => (
          <FormItem className="mt-2 w-full">
            <FormControl>
              <Input
                id="img"
                type="file"
                accept=".png,.jpg,.jpeg,.webp"
                className="focus-within:ring-0 hidden"
                name={name}
                onBlur={onBlur}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    onChange(file); // ✅ update form state manually
                    setImagePreview(URL.createObjectURL(file));
                  }
                }}
                ref={ref}
              />
            </FormControl>
            <FormMessage className="text-red-500 mb-2" />
          </FormItem>
        )}
      />
      {imgPreview && (
        <div className=" relative w-44 h-44 overflow-hidden rounded-lg">
          <Image src={imgPreview} alt="Preview" width={180} height={180} className="mt-3 object-fill rounded-lg border w-44 h-44" />
          <span
            onClick={() => {
              form.setValue(fieldName, new File([], ""));
              setImagePreview(null);
            }}
            className="bg-red-500 dark:bg-red-500 w-8 h-8 rounded-lg flex items-center justify-center absolute top-3.5 right-0.5 cursor-pointer"
          >
            <X />
          </span>
        </div>
      )}
    </div>
  );
};

export default CustomImageInput;
