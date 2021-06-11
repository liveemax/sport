import React from 'react';
import JogsSvgSad from "./JogsSvgSad";
import {Button} from "react-bootstrap";

const JogsEmpty = () => {
    return (
        <div className="jogEmpty">
                <JogsSvgSad/>
                <p className="jogEmptyText">Nothing is there</p>
                <Button className="loginButton" variant="outline-primary">Create your jog first</Button>
        </div>
    );
};

export default JogsEmpty;