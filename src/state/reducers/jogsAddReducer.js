import { createSlice } from "@reduxjs/toolkit";

const jogsAddReducer = createSlice({
  name: "jogsAdd",
  initialState: {
    jogsAddIsOpen: false,
    distance: "",
    time: "",
    date: "",
  },
  reducers: {
    selectJogsAddIsOpen: (state, actions) => {
      state.jogsAddIsOpen = actions.payload;
    },
    selectDistance: (state, actions) => {
      state.distance = actions.payload;
    },
    selectTime: (state, actions) => {
      state.time = actions.payload;
    },
    selectDate: (state, actions) => {
      state.date = actions.payload;
    },
  },
});

export const jogsAdd = (state) => state.jogsAdd;

export const { selectJogsAddIsOpen, selectDistance, selectTime, selectDate } =
  jogsAddReducer.actions;

export default jogsAddReducer.reducer;
