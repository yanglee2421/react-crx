// Query Imports
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useSettingsMutation() {
  const queryClient = useQueryClient();
  return useMutation<unknown>({
    async mutationFn(settings) {
      await chrome.storage.sync.set({
        settings,
      });
      const data = await chrome.storage.sync.get("settings");

      return data;
    },
    onError(error) {
      console.error(error);
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["chrome-settings"] });
    },
  });
}
