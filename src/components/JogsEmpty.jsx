import React from 'react';
import PinkButton from "./PinkButton";
import JogsSad from "./JogsSad";

const JogsEmpty = () => {
    return (
        <div className="jogEmpty">
                <JogsSad/>
                <p className="jogEmptyText">Nothing is there</p>
                <PinkButton className="loginButton" variant="outline-primary">Create your jog first</PinkButton>
        </div>
    );
};

export default JogsEmpty;