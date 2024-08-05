import axios, { AxiosResponse } from "axios";
import { API_BASE_URL, API_PATH } from "../utils/constants";
import { appStateActions, fetchArticleListCreatorTypeName } from "./index";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  FetchArticleListAction,
  IFetchArticlesResponse,
} from "../utils/interfaces";

/**
 * Fetch Article List
 */
export function* fetchArticleListWatcher() {
  yield takeLatest(fetchArticleListCreatorTypeName, fetchArticleListWorker);
}

const fetchArticles = (dateRange: string) => {
  const url = `${API_BASE_URL}${API_PATH.articleList}${dateRange}.json?api-key=${process.env.REACT_APP_SECRET_API_KEY}`;
  return axios.get(url);
};

export function* fetchArticleListWorker(
  action: FetchArticleListAction
): Generator<unknown, void, AxiosResponse<IFetchArticlesResponse>> {
  try {
    yield put(appStateActions.setLoading(true));
    const response: AxiosResponse<IFetchArticlesResponse> = yield call(
      fetchArticles,
      action.payload
    );

    if (response?.status === 200) {
      yield put(appStateActions.setArticleList(response?.data?.results));
      yield put(appStateActions.setLoading(false));
    } else {
      throw new Error();
    }
  } catch (error: any) {
    yield put(appStateActions.setLoading(false));
    yield put(
      appStateActions.setError(
        "An error occurred while fetching articles. Please try after some time."
      )
    );
    console.error("Error fetching articles:", error);
  }
}
