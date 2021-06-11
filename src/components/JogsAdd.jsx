import React, {useState} from 'react';
import JogsSvgCross from "./JogsSvgCross";
import {FormControl} from "react-bootstrap";
import {Button} from "react-bootstrap";

const JogsAdd = () => {
    const [jogsAddIsOpen,setJogsAddIsOpen]=useState(true)
    console.log(jogsAddIsOpen)
    return (
        <div className="jogsAdd">
            <button onClick={()=>{setJogsAddIsOpen(false)}} className="jogsCross">
                <JogsSvgCross/>
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
            <Button className="jogsAddButton" variant="outline-light">Save</Button>
        </div>
    );
};

export default JogsAdd;