import { TCustomInput } from "@/types/form.types";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Textarea } from "../ui/textarea";

const CustomTextarea = ({ form, fieldName, label, placeholder }: TCustomInput) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="mt-4">
          <FormLabel className="text-start ml-1 ">{label}</FormLabel>
          <FormControl>
            <Textarea placeholder={placeholder} className="resize-none" {...field} />
          </FormControl>
          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
};

export default CustomTextarea;
