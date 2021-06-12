import {put, takeEvery, all, select, call} from 'redux-saga/effects'
import {selectIsAuth} from "../reducers/rootReducer";
import {selectAllPages, selectJogsResults} from "../reducers/jogsReducer";
import {getToken} from "../../api/authApi";
import {getJogs} from "../../api/dataApi";
import {allPages} from "../stateReuse";


function* addAuth() {
    const token = yield call(getToken)
    localStorage.setItem("token", token)
    const jogs = yield call(getJogs)
    localStorage.setItem("jogs", JSON.stringify(jogs))
    yield put(selectJogsResults(jogs))
    yield put(selectAllPages(allPages(jogs)))
    yield put(selectIsAuth(true))
}

export function* watchAddAuth() {
    yield takeEvery('selectIsAuth_ASYNC', addAuth)
    debugger
}

export function* rootSaga() {
    yield all([
        watchAddAuth()
    ])
}