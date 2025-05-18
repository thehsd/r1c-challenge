import { useMutation, useQuery } from "@tanstack/react-query";
import {
  _endpoints,
  createArticle,
  deleteArticle,
  getAllArticles,
  getArticle,
  updateArticle,
} from "../../services/articles-api-service";
import type {
  ArticlesResponse,
  createArticleParam,
  updateArticleParam,
} from "../../services/type";

export const useGetArticleQuery = (slug: string) => {
  return useQuery({
    queryKey: [_endpoints.get_article(slug)],
    queryFn: () => getArticle(slug),
    enabled: !!slug,
  });
};

export const useGetArticlesQuery = (page: string | number) => {
  return useQuery({
    queryKey: [_endpoints.get_all_articles(page)],
    queryFn: () => getAllArticles(page),
    select: (data) => {
      const { articles } = data as ArticlesResponse;
      return articles.map((article, index) => {
        const getExcerpt = (body: string) => {
          if (!body) return "";
          return body.split(" ").slice(0, 20).join(" ") + "...";
        };

        return {
          id: index,
          slug: article.slug,
          title: article.title,
          tags: article.tagList.join(", "),
          excerpt: getExcerpt(article.body),
          author: `@${article.author.username}`,
          created: new Date(article.createdAt).toLocaleDateString(),
        };
      });
    },
  });
};

export const useCreateArticleMutation = () => {
  return useMutation({
    mutationFn: (payload: createArticleParam) => createArticle(payload),
    mutationKey: [_endpoints.create_article],
  });
};

export const useUpdateArticleMutation = () => {
  return useMutation({
    mutationFn: (payload: updateArticleParam) => updateArticle(payload),
    mutationKey: [_endpoints.update_article("")],
  });
};

export const useDeleteArticleMutation = () => {
  return useMutation({
    mutationFn: (slug: string) => deleteArticle(slug),
    mutationKey: [_endpoints.delete_article],
  });
};
