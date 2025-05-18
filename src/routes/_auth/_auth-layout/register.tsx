import { createFileRoute } from "@tanstack/react-router";
import RegisterView from "../../../views/auth/register-view";

export const Route = createFileRoute("/_auth/_auth-layout/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <RegisterView />
    </>
  );
}
