import type { ReactNode } from "@tanstack/react-router";
import {
  FormProvider as RHFForm,
  type FieldValues,
  type UseFormReturn,
} from "react-hook-form";

type FormProps<TFieldValues extends FieldValues = FieldValues> = {
  children: ReactNode;
  onSubmit: (e?: React.BaseSyntheticEvent) => void;
  methods: UseFormReturn<TFieldValues>;
};

export function Form<TFieldValues extends FieldValues = FieldValues>({
  children,
  onSubmit,
  methods,
}: FormProps<TFieldValues>) {
  return (
    <RHFForm {...methods}>
      <form onSubmit={onSubmit} noValidate autoComplete="off">
        {children}
      </form>
    </RHFForm>
  );
}
