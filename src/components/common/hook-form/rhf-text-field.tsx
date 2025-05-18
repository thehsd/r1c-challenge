import { type FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import TextField from "../../ui/text-field";
import type { RHFTextFieldProps } from "./type";

export const RHFTextField: FC<RHFTextFieldProps> = ({
  name,
  helperText,
  type = "text",
  disabled = false,
  label = "",
  placeholder,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          type={type}
          defaultValue={
            type === "number" && field.value === 0 ? "" : field.value
          }
          onChange={(event) => {
            if (type === "number") {
              field.onChange(Number(event.target.value));
            } else {
              field.onChange(event.target.value);
            }
          }}
          error={!!error}
          readOnly={disabled}
          helperText={error?.message ?? helperText}
          label={label}
          placeholder={placeholder}
        />
      )}
    />
  );
};
