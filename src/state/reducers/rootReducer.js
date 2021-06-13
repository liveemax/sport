import { createSlice } from "@reduxjs/toolkit";
import { sport } from "../../module/module";

const rootReducer = createSlice({
  name: "root",
  initialState: {
    expanded: false,
    filterOpen: false,
    isAuth: !!localStorage.getItem("token"),
  },
  reducers: {
    selectExpanded: (state, actions) => {
      state.expanded = actions.payload;
    },
    selectFilterOpen: (state, actions) => {
      state.filterOpen = actions.payload;
    },
    selectIsAuth: (state, actions) => {
      if (!actions.payload) {
        localStorage.removeItem(sport.tokenStorage);
        localStorage.removeItem(sport.jogStorage);
      }
      state.isAuth = actions.payload;
    },
  },
});

export const root = (state) => state.root;

export const { selectExpanded, selectFilterOpen, selectIsAuth } =
  rootReducer.actions;

export default rootReducer.reducer;
