import { createSlice, createAction } from "@reduxjs/toolkit";
import { IAppState } from "../utils/interfaces";

const appState: IAppState = {
  articleList: [],
  dateRange: "1",
  loading: false,
  error: null,
};

export const fetchArticleListCreator = createAction<string>(
  "APP_HANDLER/FETCH_ARTICLE_LIST"
);
export const fetchArticleListCreatorTypeName = fetchArticleListCreator(
  appState.dateRange
).type;

const appStateHandler = createSlice({
  name: "app/appSlice",
  initialState: appState,
  reducers: {
    setArticleList: (prevState, action) => {
      return {
        ...prevState,
        articleList: action.payload,
        error: null,
      };
    },
    setLoading: (prevState, action) => {
      return {
        ...prevState,
        loading: action.payload,
      };
    },
    setDateRange: (prevState, action) => {
      return {
        ...prevState,
        dateRange: action.payload,
      };
    },
    setError: (prevState, action) => {
      return {
        ...prevState,
        error: action.payload,
      };
    },
  },
});

export const appStateActions = appStateHandler.actions;
export const appStateReducer = appStateHandler.reducer;
