import { httpClient } from "../lib/http-client";
import type { TagsResponse } from "./type";

export const _endpoints = {
  get_tags: () => `/tags`,
};

export const getAllTags = () => {
  return httpClient.get<TagsResponse>(_endpoints.get_tags());
};
