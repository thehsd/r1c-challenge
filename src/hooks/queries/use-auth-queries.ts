import { useMutation, useQuery } from "@tanstack/react-query";
import {
  _endpoints,
  getUserInfo,
  userSignIn,
  userSignUp,
} from "../../services/auth-api-service";
import type { UserSignInParam, UserSignUpParam } from "../../services/type";

export const useSignInMutation = () => {
  return useMutation({
    mutationFn: (payload: UserSignInParam) => userSignIn(payload),
    mutationKey: [_endpoints.sign_in],
  });
};

export const useSignUpMutation = () => {
  return useMutation({
    mutationFn: (payload: UserSignUpParam) => userSignUp(payload),
    mutationKey: [_endpoints.sign_up],
  });
};

export const useGetAllTags = () => {
  return useQuery({
    queryKey: [_endpoints.user_info()],
    queryFn: () => getUserInfo(),
  });
};
