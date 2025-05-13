import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/articles/__layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/articles/__layout"!</div>;
}
