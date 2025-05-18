import { createFileRoute } from "@tanstack/react-router";
import CreateArticlesView from "../../../../views/article-view/create-article-view";

export const Route = createFileRoute(
  "/_articles/_articles-layout/articles/create"
)({
  component: CreateArticlesView,
});
