import ArticleForm from "./components/article-form";
import { useMemo } from "react";
import type { createArticle } from "../../services/type";

const CreateArticleView = () => {
  const defaultValues: createArticle = useMemo(() => {
    return {
      title: "",
      description: "",
      body: "",
      tagList: [],
    };
  }, []);
  return (
    <>
      <ArticleForm defaultValues={defaultValues} />
    </>
  );
};
export default CreateArticleView;
