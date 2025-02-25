import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfigs = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth"],
};

const rootReducer = (state, action) => {
  if (action.type.includes("logout")) {
    // localStorage.clear();
    console.log("Action called Logout", action.type);
    return appReducer({ auth: state.auth }, action);
  }

  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfigs, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
