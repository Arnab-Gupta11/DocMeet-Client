/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

//Custom Select Component type
export type TCustomSelect = {
  form: any;
  fieldName: string;
  label: string;
  placeholder: string;
  children: ReactNode;
};

//Custom Input Component type
export type TCustomInput = { form: any; fieldName: string; inputType?: string; label: string; placeholder: string };

//Custom Form Component type
export type TCustomForm = {
  children: ReactNode;
  form: any;
  onSubmit: any;
};

//Custom Image Component type
export type TCustomImageInput = {
  form: any;
  placeholder?: string;
  fieldName: string;
  label: string;
  imgPreview: string | null;
  setImagePreview: React.Dispatch<React.SetStateAction<string | null>>;
};
