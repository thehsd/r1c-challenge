import { createFileRoute } from "@tanstack/react-router";

import ArticlesView from "../../../../views/articles-view";

export const Route = createFileRoute("/_articles/_articles-layout/articles/")({
  component: ArticlesView,
});
