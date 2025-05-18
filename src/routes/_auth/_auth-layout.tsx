import { createFileRoute, Outlet } from "@tanstack/react-router";
import AuthLayout from "../../layouts/auth/layout";

export const Route = createFileRoute("/_auth/_auth-layout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
}
