import { put, takeEvery, all,select,call} from 'redux-saga/effects'
import {root, selectIsAuth} from "../reducers/rootReducer";
import {getToken} from "../../api/authApi";


function* addAuth() {
        const token=yield call(getToken)
        localStorage.setItem("token",token)
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