import {put, takeEvery, all, select, call} from 'redux-saga/effects'
import {selectIsAuth} from "../reducers/rootReducer";
import {selectAllPages, selectJogsResults} from "../reducers/jogsFilterReducer";
import {getToken} from "../../api/authApi";
import {getJogs, setJog} from "../../api/dataApi";
import {allPages, tokenStorage} from "../../sportsModule/stateReuse";
import {jogStorage} from "../../sportsModule/stateReuse"
import moment from "moment";


function* addAuth() {
    const token = yield call(getToken)
    localStorage.setItem(tokenStorage, token)
    const jogs = yield call(getJogs)
    localStorage.setItem(jogStorage, JSON.stringify(jogs))
    yield put(selectJogsResults(jogs))
    yield put(selectAllPages(allPages(jogs)))
    yield put(selectIsAuth(true))
}
function* addJog(props) {
    const {date,time,distance}=props
    const response = yield call(async ()=>await setJog(date,time,distance))
    response.date=moment(response.date).format('X')
    const jogs =JSON.parse(localStorage.getItem(jogStorage))
    jogs.push(response)
    localStorage.setItem(jogStorage, JSON.stringify(jogs))
    yield put(selectJogsResults(jogs))
    yield put(selectAllPages(allPages(jogs)))
}

export function* watchAddAuth() {
    yield takeEvery('selectIsAuth_ASYNC', addAuth)
}
export function* watchAddJog() {
    yield takeEvery('selectAddJog_ASYNC', addJog)
}


export function* rootSaga() {
    yield all([
        watchAddAuth(),
        watchAddJog(),
    ])
}