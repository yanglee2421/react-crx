// MUI Imports
import { TextField, TextFieldProps } from "@mui/material";

// Form Imports
import { useFormContext, useController } from "react-hook-form";

export function ItemText(props: ItemTextProps) {
  // ** Props
  const { name, disabled, ...restProps } = props;

  // Form Hooks
  const formCtx = useFormContext();
  const controller = useController({
    name,
    control: formCtx.control,
    defaultValue: "",
    disabled,
  });

  return (
    <TextField
      {...controller.field}
      error={!!controller.fieldState.error}
      helperText={controller.fieldState.error?.message}
      fullWidth
      {...restProps}
    />
  );
}

export type ItemTextProps = TextFieldProps & { name: string };
