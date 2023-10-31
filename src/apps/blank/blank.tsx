// Theme Imports
import { ThemeProvider } from "@/theme";
import { QueryProvider } from "@/api/provider";
import { ReduxProvider } from "@/redux";

export function BlankApp() {
  return (
    <ReduxProvider>
      <QueryProvider>
        <ThemeProvider></ThemeProvider>
      </QueryProvider>
    </ReduxProvider>
  );
}
