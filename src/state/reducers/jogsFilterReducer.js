import { createSlice } from "@reduxjs/toolkit";
import { sport } from "../../module/module";

const jogsFilterReducer = createSlice({
  name: "jogs",
  initialState: {
    jogsResults: sport.localBuffer(),
    startPage: sport.startPage,
    pageSize: sport.pageSize,
    allPages: sport.allPages(JSON.parse(localStorage.getItem("jogs"))),
    dateFrom: "",
    dateTo: "",
  },
  reducers: {
    selectStartPage: (state, actions) => {
      state.startPage = actions.payload;
    },
    selectAllPages: (state, actions) => {
      state.allPages = actions.payload;
    },
    selectJogsResults: (state, actions) => {
      state.jogsResults = actions.payload;
    },
    selectDataFrom: (state, actions) => {
      sport.filterDataHandler('dateFrom',state,actions)
    },
    selectDataTo: (state, actions) => {
      sport.filterDataHandler('dateTo',state,actions)

    },
  },
});

export const jogs = (state) => state.jogs;

export const {
  selectStartPage,
  selectAllPages,
  selectJogsResults,
  selectDataTo,
  selectDataFrom,
} = jogsFilterReducer.actions;

export default jogsFilterReducer.reducer;
