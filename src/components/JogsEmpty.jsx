import React from 'react';
import JogsSvgSad from "./JogsSvgSad";
import {Button} from "react-bootstrap";
import {selectJogsAddIsOpen} from "../state/reducers/rootReducer";
import {useDispatch} from "react-redux";

const JogsEmpty = () => {
    const dispatch=useDispatch()
    return (
        <div className="jogEmpty">
                <JogsSvgSad/>
                <p className="jogEmptyText">Nothing is there</p>
                <Button onClick={()=>{dispatch(selectJogsAddIsOpen(true))}} className="loginButton" variant="outline-primary">Create your jog first</Button>
        </div>
    );
};

export default JogsEmpty;