// Redux Toolkit Imports
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// Persist Imports
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import session from "redux-persist/lib/storage/session";

// Slice Imports
import { sliceLoginLocal } from "./slice-login-local";
import { sliceLoginSession } from "./slice-login-session";
import { sliceTheme } from "./slice-theme";

// Create Store
export const store = configureStore({
  reducer: persistReducer(
    // Persist configuration
    {
      key: import.meta.env.VITE_REDUX_PERSISTER_KEY,
      version: 1,
      storage,
      blacklist: [sliceLoginSession.name],
    },

    // Root reducer
    combineReducers({
      [sliceLoginLocal.name]: sliceLoginLocal.reducer,
      [sliceLoginSession.name]: persistReducer(
        {
          key: sliceLoginSession.name,
          storage: session,
          blacklist: [],
        },
        sliceLoginSession.reducer
      ),
      [sliceTheme.name]: sliceTheme.reducer,
    })
  ),

  // ** Middleware
  middleware(getMiddleWare) {
    return getMiddleWare({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

// Create Persisted Store
export const persistor = persistStore(store);

// ** Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
