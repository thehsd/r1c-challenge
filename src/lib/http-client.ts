import StorageService from "./storage-service";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const request = async <TResponse, TBody = unknown>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  endpoint: string,
  body?: TBody
): Promise<TResponse> => {
  const token = StorageService.getLocalAccessToken();
  const url = `${BASE_URL}${endpoint}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const options: RequestInit = {
    method,
    headers,
  };

  if (body && method !== "GET") {
    options.body = JSON.stringify(body);
  }

  const res = await fetch(url, options);

  if (res.status === 401) {
    throw new Error("Unauthorized");
  }

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "Request failed");
  }

  if (res.status === 204) return null as TResponse;
  return res.json() as Promise<TResponse>;
};

export const httpClient = {
  get: <T>(endpoint: string) => request<T>("GET", endpoint),
  post: <T, B = unknown>(endpoint: string, body: B) =>
    request<T, B>("POST", endpoint, body),
  put: <T, B = unknown>(endpoint: string, body: B) =>
    request<T, B>("PUT", endpoint, body),
  delete: <T>(endpoint: string) => request<T>("DELETE", endpoint),
};
