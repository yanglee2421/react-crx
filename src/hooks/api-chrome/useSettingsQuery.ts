// Query Imports
import { useQuery } from "@tanstack/react-query";

export function useSettingsQuery() {
  return useQuery({
    queryKey: ["chrome-settings"],
    queryFn() {
      return chrome.storage.sync.get("settings");
    },
    retry: false,
  });
}
