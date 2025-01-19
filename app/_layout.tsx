import "../global.css";

import { Stack } from "expo-router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LocaleProvider } from "@common/hooks";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <LocaleProvider>
        <Stack />
      </LocaleProvider>
    </QueryClientProvider>
  );
}
