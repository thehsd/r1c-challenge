import { defaultOptions } from "./services/query-client";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient({
  defaultOptions,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <TanStackRouterDevtools router={router} initialIsOpen={false} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </>
);
