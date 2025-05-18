import { useParams } from "@tanstack/react-router";
import { useGetArticleQuery } from "../../hooks/queries/use-article-queries";
import ArticleForm from "./components/article-form";
import { useMemo } from "react";
import type { createArticle } from "../../services/type";

const EditArticleView = () => {
  const { slug } = useParams({
    from: "/_articles/_articles-layout/articles/edit/$slug",
  });
  const { data, isLoading } = useGetArticleQuery(slug);

  const defaultValues: createArticle = useMemo(() => {
    return {
      title: data?.article?.title || "",
      description: data?.article?.description || "",
      body: data?.article?.body || "",
      tagList: data?.article?.tagList || [],
    };
  }, [isLoading]);
  return (
    <>
      {!isLoading && <ArticleForm defaultValues={defaultValues} slug={slug} />}
    </>
  );
};
export default EditArticleView;
