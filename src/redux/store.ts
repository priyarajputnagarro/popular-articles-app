import { configureStore } from "@reduxjs/toolkit";
import { appStateReducer } from "./slice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from ".";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    appState: appStateReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const getStore = () => store;
