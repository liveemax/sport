import React, {useState} from 'react';
import JogsCross from "./JogsCross";
import {FormControl} from "react-bootstrap";
import {Button} from "react-bootstrap";

const JogsAdd = () => {
    const [jogsAddIsOpen,setJogsAddIsOpen]=useState(true)
    console.log(jogsAddIsOpen)
    return (
        <div className="jogsAdd">
            <button onClick={()=>{setJogsAddIsOpen(false)}} className="jogsCross">
                <JogsCross/>
            </button>
            <div className="jogsAddItem">
                <span className="jogsAddText">Distance</span>
                <FormControl className="jogsAddInput"/>
            </div>
            <div className="jogsAddItem">
                <span className="jogsAddText">Time</span>
                <FormControl className="jogsAddInput"/>
            </div>
            <div className="jogsAddItem">
                <span className="jogsAddText">Date</span>
                <FormControl className="jogsAddInput"/>
            </div>
            <Button className="jogsAddButton" variant="outline-light">asdf</Button>
        </div>
    );
};

export default JogsAdd;