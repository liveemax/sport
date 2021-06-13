import React from "react";
import JogsSvgCross from "./Svg/JogsSvgCross";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  jogsAdd,
  selectDate,
  selectDistance,
  selectTime,
} from "../state/reducers/jogsAddReducer";
import { sport } from "../module/module";

const JogsAdd = () => {
  const { distance, time, date } = useSelector(jogsAdd);
  const dispatch = useDispatch();
  return (
    <div className="jogsAdd">
      <button
        onClick={() => {
          sport.jogsAddClose(dispatch);
        }}
        className="jogsCross"
      >
        <JogsSvgCross />
      </button>
      <div className="jogsAddItem">
        <span className="jogsAddText">Distance</span>
        <FormControl
          onChange={(e) => {
            dispatch(selectDistance(e.currentTarget.value));
          }}
          placeholder={sport.distanceExample}
          className="jogsAddInput"
          value={distance}
        />
      </div>
      <div className="jogsAddItem">
        <span className="jogsAddText">Time</span>
        <FormControl
          onChange={(e) => {
            dispatch(selectTime(e.currentTarget.value));
          }}
          placeholder={sport.timeExample}
          className="jogsAddInput"
          value={time}
        />
      </div>
      <div className="jogsAddItem">
        <span className="jogsAddText">Date</span>
        <FormControl
          onChange={(e) => {
            dispatch(selectDate(e.currentTarget.value));
          }}
          placeholder={sport.dateExample}
          className="jogsAddInput"
          value={date}
        />
      </div>
      <Button
        onClick={() => {
          dispatch({ type: "selectAddJog_ASYNC", date, time, distance });
          sport.jogsAddClose(dispatch);
        }}
        className="jogsAddButton"
        variant="outline-light"
      >
        Save
      </Button>
    </div>
  );
};

export default JogsAdd;
