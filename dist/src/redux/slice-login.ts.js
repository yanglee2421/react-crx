import { createSlice, createAsyncThunk } from "/vendor/.vite-deps-@reduxjs_toolkit.js__v--bfcbcd02.js";
export const mutateLogin = createAsyncThunk(
  "login/mutate",
  async (payload) => {
    const { login } = await chrome.storage.sync.get("login");
    const prev = login || initialState();
    Object.assign(prev, payload);
    await chrome.storage.sync.set({ login: prev });
    const { login: newValue } = await chrome.storage.sync.get("login");
    return newValue;
  }
);
export const sliceLogin = createSlice({
  name: "login",
  initialState,
  reducers: {
    islogged(state, { payload }) {
      state.usr = payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(mutateLogin.fulfilled, (s, { payload }) => {
      s.isLoading = false;
      Object.assign(s, payload);
    });
    builder.addCase(mutateLogin.pending, (s) => {
      s.isLoading = true;
    });
  }
});
function initialState() {
  return {
    usr: null,
    isLoading: false
  };
}
