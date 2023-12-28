// Zustand Imports
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// React Imports
import React from "react";

export const useThemeStore = create(
  persist<ThemeStore>(
    (set, get) => {
      return {
        mode: "auto",
        setMode(mode) {
          return set({ mode });
        },

        bgAlpha: 0,
        setBgAlpha(action) {
          const bgAlpha = (() => {
            if (typeof action === "function") {
              return action(get().bgAlpha);
            }

            return action;
          })();

          return set({ bgAlpha });
        },
        bgBlur: 0,
        setBgBlur(action) {
          const bgBlur = (() => {
            if (typeof action === "function") {
              return action(get().bgBlur);
            }

            return action;
          })();

          return set({ bgBlur });
        },
      };
    },
    {
      name: import.meta.env.VITE_REDUX_PERSISTER_KEY,
      storage: createJSONStorage(() => globalThis.localStorage),
    }
  )
);

interface ThemeStore {
  mode: ThemeMode;
  setMode(mode: ThemeMode): void;
  bgAlpha: number;
  setBgAlpha: React.Dispatch<React.SetStateAction<number>>;
  bgBlur: number;
  setBgBlur: React.Dispatch<React.SetStateAction<number>>;
}
type ThemeMode = "dark" | "light" | "auto";
