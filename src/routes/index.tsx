import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  loader: () => {
    return "Hello World";
  },
  component: IndexComponent,
});

function IndexComponent() {
  return <div>hi</div>;
}
