// Providers Imports
import { ThemeProvider } from "@/theme";
import { QueryProvider } from "@/api/provider";
import { ReduxProvider } from "@/redux";

// Pages Imports
import { Blank } from "@/pages/blank";

export function BlankApp() {
  return (
    <ReduxProvider>
      <QueryProvider>
        <ThemeProvider>
          <Blank />
        </ThemeProvider>
      </QueryProvider>
    </ReduxProvider>
  );
}
