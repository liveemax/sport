import { put, takeEvery, all, call } from "redux-saga/effects";
import { selectIsAuth } from "../reducers/rootReducer";
import {
  selectAllPages,
  selectJogsResults,
} from "../reducers/jogsFilterReducer";
import { getToken } from "../../api/authApi";
import { getJogs, setJog } from "../../api/dataApi";
import moment from "moment";
import { sport } from "../../module/module";

export function* remoteToken() {
  return yield call(getToken);
}

export function* remoteJogs() {
  return yield call(getJogs);
}

export function* remoteSetJogs(date, time, distance) {
  return yield call(async () => await setJog(date, time, distance));
}

function* addAuth() {
  const token = yield remoteToken();
  localStorage.setItem(sport.tokenStorage, token);
  const jogs = yield remoteJogs();
  localStorage.setItem(sport.jogStorage, JSON.stringify(jogs));
  yield put(selectJogsResults(jogs));
  yield put(selectAllPages(sport.allPages(jogs)));
  yield put(selectIsAuth(true));
}
function* addJog(props) {
  const { date, time, distance } = props;
  const response = yield remoteSetJogs(date, time, distance);
  response.date = moment(response.date).format("X");
  let jogs = JSON.parse(localStorage.getItem(sport.jogStorage));
  console.log(response)
  console.log(jogs)
  if(!jogs)
    jogs=[]
  jogs.push(response);
  localStorage.setItem(sport.jogStorage, JSON.stringify(jogs));
  yield put(selectJogsResults(jogs));
  yield put(selectAllPages(sport.allPages(jogs)));
}

export function* watchAddAuth() {
  yield takeEvery("selectIsAuth_ASYNC", addAuth);
}
export function* watchAddJog() {
  yield takeEvery("selectAddJog_ASYNC", addJog);
}

export function* rootSaga() {
  yield all([watchAddAuth(), watchAddJog()]);
}
