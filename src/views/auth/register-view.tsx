import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { Form } from "../../components/common/hook-form/form";
import { RHFTextField } from "../../components/common/hook-form/rhf-text-field";
import Section from "../../components/common/section";
import LinkButton from "../../components/ui/link-button";
import Typography from "../../components/ui/typography";
import { useSignUpMutation } from "../../hooks/queries/use-auth-queries";
import { z as zod } from "zod";
import Button from "../../components/ui/button";

const signUpSchema = zod.object({
  email: zod
    .string()
    .min(3, "Email is required")
    .email("Invalid email address format"),
  password: zod.string().min(3, "password is required"),
  username: zod.string().min(3, "username is required"),
});

const RegisterView = () => {
  const methods = useForm({
    mode: "all",
    resolver: zodResolver(signUpSchema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const { mutate, isPending } = useSignUpMutation();

  const onSubmit = handleSubmit((data) => {
    const payload = {
      user: data,
    };
    mutate(payload);
  });
  return (
    <Section title="Sign Up" size="small">
      <Form methods={methods} onSubmit={onSubmit}>
        <div className={clsx("flex", "flex-col", "gap-y-5")}>
          <RHFTextField
            placeholder="enter your username"
            error={!!errors.username}
            label="Username"
            name="username"
          />
          <RHFTextField
            placeholder="enter your email"
            error={!!errors.email}
            label="Email"
            name="email"
          />
          <RHFTextField
            placeholder="enter your password"
            error={!!errors.password}
            label="Password"
            name="password"
            type="password"
          />
          <Button
            color="primary"
            type="submit"
            size="block"
            disabled={isPending}
            isLoading={isPending}
          >
            Sign Up
          </Button>
        </div>
      </Form>
      <div className="flex mt-3 justify-center gap-2">
        <Typography className="text-sm text-secondary-focus" weight="normal">
          Have an account??
        </Typography>
        <LinkButton to="/login">Sign in</LinkButton>
      </div>
    </Section>
  );
};

export default RegisterView;
