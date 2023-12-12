// Providers Imports
import { ThemeProvider } from "@/theme";
import { QueryProvider } from "@/api/provider";

// Pages Imports
import { Blank } from "@/pages/blank";

export function BlankApp() {
  return (
    <QueryProvider>
      <ThemeProvider>
        <Blank />
      </ThemeProvider>
    </QueryProvider>
  );
}
