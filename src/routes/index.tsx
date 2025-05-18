import { createFileRoute } from "@tanstack/react-router";
import LinkButton from "../components/ui/link-button";
import Section from "../components/common/section";

export const Route = createFileRoute("/")({
  component: IndexComponent,
});
function IndexComponent() {
  return (
    <div className="bg-secondary-light h-screen ">
      <Section title="R1C Frontend Challenge">
        <div className="flex gap-x-3">
          <LinkButton to="/articles"> Articles List </LinkButton>
          <LinkButton to="/login"> Login </LinkButton>
        </div>
      </Section>
    </div>
  );
}
