import { httpClient } from "../lib/http-client";
import type { UserResponse, UserSignInParam, UserSignUpParam } from "./type";

export const _endpoints = {
  sign_in: () => `/users/login`,
  sign_up: () => `/users`,
  user_info: () => `/user`,
};

export const userSignIn = (payload: UserSignInParam) => {
  return httpClient.post<UserResponse>(_endpoints.sign_in(), payload);
};

export const userSignUp = (payload: UserSignUpParam) => {
  return httpClient.post(_endpoints.sign_up(), payload);
};

export const getUserInfo = () => {
  return httpClient.get<UserResponse>(_endpoints.user_info());
};
