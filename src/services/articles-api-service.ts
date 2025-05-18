import { httpClient } from "../lib/http-client";
import type {
  ArticleResponse,
  createArticleParam,
  updateArticleParam,
} from "./type";

export const _endpoints = {
  get_all_articles: (page: string | number = 0) => `/articles/?page=${page}`,
  get_article: (slug: string = "") => `/articles/${slug}`,
  create_article: () => `/articles`,
  update_article: (slug: string = "") => `/articles/${slug}`,
  delete_article: (slug: string = "") => `/articles/${slug}`,
};

export const getAllArticles = (page: string | number = 0) => {
  return httpClient.get(_endpoints.get_all_articles(page));
};

export const getArticle = (slug: string) => {
  return httpClient.get<ArticleResponse>(_endpoints.get_article(slug));
};

export const createArticle = (payload: createArticleParam) => {
  return httpClient.post(_endpoints.create_article(), payload);
};

export const updateArticle = (payload: updateArticleParam) => {
  return httpClient.put(
    _endpoints.update_article(payload.article.slug),
    payload
  );
};

export const deleteArticle = (slug: string) => {
  return httpClient.delete(_endpoints.delete_article(slug));
};
