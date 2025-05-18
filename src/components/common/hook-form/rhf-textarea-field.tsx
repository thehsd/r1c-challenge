import { type FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { RHFTextareaFieldProps } from "./type";
import TextareaField from "../../ui/textarea-field/textarea-field";

export const RHFTextareaField: FC<RHFTextareaFieldProps> = ({
  name,
  helperText,
  type = "text",
  disabled = false,
  label = "",
  placeholder,
  rows = 4,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextareaField
          {...field}
          rows={rows}
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
