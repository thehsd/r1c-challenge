import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z as zod } from "zod";
import { useSignInMutation } from "../../hooks/queries/use-auth-queries";
import { Form } from "../../components/common/hook-form/form";
import clsx from "clsx";
import { RHFTextField } from "../../components/common/hook-form/rhf-text-field";
import Section from "../../components/common/section";
import LinkButton from "../../components/ui/link-button";
import Typography from "../../components/ui/typography";
import Button from "../../components/ui/button";
import StorageService from "../../lib/storage-service";

const signInSchema = zod.object({
  email: zod
    .string()
    .min(3, "Email is required")
    .email("Invalid email address format"),
  password: zod.string().min(3, "password is required"),
});

const LoginView = () => {
  const methods = useForm({
    mode: "all",
    resolver: zodResolver(signInSchema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const { mutate, isPending } = useSignInMutation();

  const onSubmit = handleSubmit((data) => {
    const payload = {
      user: data,
    };
    mutate(payload, {
      onError: () => {
        alert("Sign-in Failed! Username and/or Password is invalid");
      },
      onSuccess: (data) => {
        StorageService.setLocalAccessToken(data.user.token);
      },
    });
  });
  return (
    <Section title="Sign in" size="small">
      <Form methods={methods} onSubmit={onSubmit}>
        <div className={clsx("flex", "flex-col", "gap-y-5")}>
          <RHFTextField
            error={!!errors.email}
            label="Email"
            placeholder="enter your email"
            name="email"
          />
          <RHFTextField
            error={!!errors.password}
            label="Password"
            placeholder="enter your password"
            type="password"
            name="password"
          />
          <Button
            color="primary"
            type="submit"
            size="block"
            disabled={isPending}
            isLoading={isPending}
          >
            Sign in
          </Button>
        </div>
      </Form>
      <div className="flex mt-3 justify-center gap-2">
        <Typography className="text-sm text-secondary-focus" weight="normal">
          Don’t have an account?
        </Typography>
        <LinkButton to="/register">Sign up now</LinkButton>
      </div>
    </Section>
  );
};

export default LoginView;
