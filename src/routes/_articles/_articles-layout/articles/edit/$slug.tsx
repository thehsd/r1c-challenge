import { createFileRoute } from "@tanstack/react-router";
import EditArticleView from "../../../../../views/article-view/edit-article-view";

export const Route = createFileRoute(
  "/_articles/_articles-layout/articles/edit/$slug"
)({
  component: EditArticleView,
});
