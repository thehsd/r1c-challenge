import { createFileRoute } from "@tanstack/react-router";
import LoginView from "../../../views/auth/login-view";

export const Route = createFileRoute("/_auth/_auth-layout/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <LoginView />
    </>
  );
}
