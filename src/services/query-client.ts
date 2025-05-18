import type { DefaultOptions } from "@tanstack/react-query";

export const defaultOptions: DefaultOptions = {
  queries: {
    retry: 2,
    retryDelay: 1500,
    staleTime: 0.5 * 60 * 1000,
    gcTime: 0.5 * 60 * 1000,
    refetchOnWindowFocus: false,
  },
};
