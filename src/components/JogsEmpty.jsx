import React from 'react';
import JogsSad from "./JogsSad";
import {Button} from "react-bootstrap";

const JogsEmpty = () => {
    return (
        <div className="jogEmpty">
                <JogsSad/>
                <p className="jogEmptyText">Nothing is there</p>
                <Button className="loginButton" variant="outline-primary">Create your jog first</Button>
        </div>
    );
};

export default JogsEmpty;