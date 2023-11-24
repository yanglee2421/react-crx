// Redux Toolkit Imports
import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Localforage Imports
import localforage from "localforage";

export const loadBgImg = createAsyncThunk<string, void>(
  "get/bgImg",
  async () => {
    try {
      const dataURL = await localforage.getItem<string>("bgImg");
      if (typeof dataURL === "string") {
        return dataURL;
      }
    } catch (error) {
      console.error(error);
    }

    return "";
  }
);

export const sliceTheme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    isDark(state, { payload }: PayloadAction<boolean>) {
      state.isDark = payload;
    },
    isDarkToggle(state, { payload }: PayloadAction<boolean | void>) {
      switch (payload) {
        case true:
        case false:
          state.isDark = payload;
          break;
        default:
          state.isDark = !state.isDark;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(loadBgImg.pending, (s) => {
      s.isLoading = true;
      s.bgImg = "";
    });
    builder.addCase(loadBgImg.rejected, (s) => {
      s.isLoading = false;
      s.bgImg = "";
    });
    builder.addCase(loadBgImg.fulfilled, (s, ctx) => {
      s.isLoading = false;
      s.bgImg = ctx.payload;
    });
  },
});

function initialState(): ThemeSettings {
  return {
    isDark: false,
    isLoading: false,
    bgImg: "",
  };
}

export interface ThemeSettings {
  isDark: boolean;
  isLoading: boolean;
  bgImg: string;
}
