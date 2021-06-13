import React from "react";
import JogsSvgSad from "./Svg/JogsSvgSad";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { selectJogsAddIsOpen } from "../state/reducers/jogsAddReducer";

const JogsEmpty = () => {
  const dispatch = useDispatch();
  return (
    <div className="jogEmpty">
      <JogsSvgSad />
      <p className="jogEmptyText">Nothing is there</p>
      <Button
        onClick={() => {
          dispatch(selectJogsAddIsOpen(true));
        }}
        className="loginButton"
        variant="outline-primary"
      >
        Create your jog first
      </Button>
    </div>
  );
};

export default JogsEmpty;
