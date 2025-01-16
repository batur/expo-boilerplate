import "../global.css";

import { Stack } from "expo-router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
