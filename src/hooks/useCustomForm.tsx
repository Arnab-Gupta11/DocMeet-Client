import { useForm, UseFormReturn, DefaultValues } from "react-hook-form";
import { z, ZodTypeAny } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type UseFormHookReturn<TFormSchema extends ZodTypeAny> = [UseFormReturn<z.infer<TFormSchema>>];

const useCustomForm = <TFormSchema extends ZodTypeAny>(
  formSchema: TFormSchema,
  defaultValues: DefaultValues<z.infer<TFormSchema>>
): UseFormHookReturn<TFormSchema> => {
  const form = useForm<z.infer<TFormSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: "onChange",
  });

  return [form];
};

export default useCustomForm;
