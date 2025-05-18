import { Outlet, createFileRoute } from "@tanstack/react-router";
import MainLayout from "../../layouts/main/layout";

export const Route = createFileRoute("/_articles/_articles-layout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}
