import { createSelector } from "@reduxjs/toolkit";
import { IRootState } from "../utils/interfaces";

const appState = (state: IRootState) => state.appState;

const getArticleListSelector = createSelector(
  [appState],
  (data) => data.articleList
);

const getLoadingSelector = createSelector([appState], (data) => data.loading);

const getErrorSelector = createSelector([appState], (data) => data.error);

const getDateRangeSelector = createSelector(
  [appState],
  (data) => data.dateRange
);

export const appSelector = {
  getArticleList: () => getArticleListSelector,
  getLoading: () => getLoadingSelector,
  getError: () => getErrorSelector,
  getDateRange: () => getDateRangeSelector,
};
