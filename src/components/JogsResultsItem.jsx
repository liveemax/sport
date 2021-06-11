import React from 'react';
import JogsRunner from "./JogsRunner";

const JogsResultsItem = (props) => {
    const {speed,distance,time,date}=props
    return (
        <div className="jogsResultsItem">
            <div>
            <JogsRunner/>
            </div>
            <div className="jogsResultsStatistics">
                <span>{date}</span>
                <span>Speed:<span>{speed}</span></span>
                <span>Distance:<span>{distance} km</span></span>
                <span>Time:<span> {time}min</span></span>
            </div>
        </div>
    );
};

export default JogsResultsItem;