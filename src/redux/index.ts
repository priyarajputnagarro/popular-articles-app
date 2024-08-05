import { fetchArticleListWatcher } from "./saga";
import { call, spawn, all } from "redux-saga/effects";

export {
  appStateActions,
  appStateReducer,
  fetchArticleListCreator,
  fetchArticleListCreatorTypeName,
} from "./slice";

export { appSelector } from "./selector";

export { getStore } from "./store";

export function* rootSaga() {
  const sagas = [fetchArticleListWatcher];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {}
        }
      })
    )
  );
}
