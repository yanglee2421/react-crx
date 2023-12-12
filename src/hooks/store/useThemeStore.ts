// Zustand Imports
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useThemeStore = create(
  persist<ThemeStore>(
    (set) => {
      return {
        mode: "auto",
        setMode(mode) {
          return set({ mode });
        },
        bgAlpha: 0,
        setBgAlpha(bgAlpha) {
          return set({ bgAlpha });
        },
        bgBlur: 0,
        setBgBlur(bgBlur) {
          return set({ bgBlur });
        },
      };
    },
    {
      name: import.meta.env.VITE_REDUX_PERSISTER_KEY,
      storage: createJSONStorage(() => globalThis.sessionStorage),
    }
  )
);

interface ThemeStore {
  mode: ThemeMode;
  setMode(mode: ThemeMode): void;
  bgAlpha: number;
  setBgAlpha(v: number): void;
  bgBlur: number;
  setBgBlur(v: number): void;
}
type ThemeMode = "dark" | "light" | "auto";
