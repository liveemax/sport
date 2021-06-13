import moment from "moment";
import {
  selectExpanded,
  selectFilterOpen,
  selectIsAuth,
} from "../state/reducers/rootReducer";
import {
  selectAllPages,
  selectDataFrom,
  selectDataTo,
  selectJogsResults,
  selectStartPage,
} from "../state/reducers/jogsFilterReducer";
import {
  selectDate,
  selectDistance,
  selectJogsAddIsOpen,
  selectTime,
} from "../state/reducers/jogsAddReducer";

export const sport = {
  url: "https://jogtracker.herokuapp.com/api/v1",
  fakeToken: "eb8cdf9e61521369da24ab55f0095f5da870881990d9b75daefef50333178daf",
  pageSize: 2,
  dateFormat: "DD.MM.YYYY",
  timeExample: "15",
  dateExample: "28.12.2020",
  distanceExample: "2.2",
  startPage: 0,
  tokenStorage: "token",
  jogStorage: "jogs",
  path: {
    login: "/",
    jogs: "/jogs",
    contactUs: "/contact",
    info: "/info",
  },
  isValid: function (payload) {
    return moment(payload, this.dateFormat, true).isValid();
  },
  localBuffer: function () {
    return !!localStorage.getItem(this.jogStorage)
      ? JSON.parse(localStorage.getItem(this.jogStorage))
      : [];
  },
  authHeader: (token) => {
    return { Accept: "application/json", Authorization: `Bearer ${token}` };
  },
  allPages: function (allPages) {
    if (allPages) return Math.ceil(allPages.length / this.pageSize);
    return 0;
  },
  tokenHeader: () => {
    return {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    };
  },
  filterDataHandler: (name,state, actions) => {
    state[name] = actions.payload;
    state.jogsResults = sport.filterFunc(
      actions.payload,
      state.dateFrom,
      state.dateTo,
      state.jogsResults
    );
    state.startPage = sport.startPage;
    state.allPages = sport.allPages(state.jogsResults);
  },
  reduxReset: function (dispatch) {
    dispatch(selectIsAuth(false));
    dispatch(selectStartPage(0));
    dispatch(selectJogsResults([]));
    dispatch(selectAllPages(0));
    dispatch(selectExpanded(false));
    dispatch(selectFilterOpen(false));
    dispatch(selectJogsAddIsOpen(false));
    dispatch(selectDataTo(""));
    dispatch(selectDataFrom(""));
  },
  jogsAddClose: function (dispatch) {
    dispatch(selectJogsAddIsOpen(false));
    dispatch(selectDistance(""));
    dispatch(selectTime(""));
    dispatch(selectDate(""));
  },
  filterFunc: function (payload, dateFrom, dateTo, jogsResults) {
    if (!dateFrom) dateFrom = "00.00.0000";
    if (!dateTo) dateTo = moment(Date.now()).format(this.dateFormat);
    let jogsBuffer = [];
    if (this.isValid(payload)) {
      let dateFromNumber = moment(dateFrom, this.dateFormat).unix();
      let dateToNumber = moment(dateTo, this.dateFormat).unix();
      this.localBuffer().forEach((el) => {
        if (el.date >= dateFromNumber && el.date <= dateToNumber)
          jogsBuffer.push(el);
      });
    } else {
      jogsBuffer = jogsResults;
    }
    return jogsBuffer;
  },
  apiReuse: async (path, responseName, method, headers, body) => {
    try {
      let result = await fetch(`${path}`, {
        method: `${method}`,
        headers,
        body,
      });
      if (result.ok) {
        const { response } = await result.json();
        if (responseName) return response[responseName];
        return response;
      } else {
        throw new Error(`${result.statusText}`);
      }
    } catch (e) {
      alert(new Error(`${e}`));
    }
  },
};
