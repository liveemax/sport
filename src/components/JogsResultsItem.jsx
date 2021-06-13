import React from 'react';
import JogsRunner from "./JogsSvgRunner";
import moment from "moment";
import {dateFormat} from "../sportsModule/stateReuse";

const JogsResultsItem = (props) => {
    const {speed,distance,time,date}=props
    const DD_MM_YYYY=moment.unix(date).format(dateFormat)
    return (
        <div className="jogsResultsItem">
            <div className="jogsResultsSvg">
            <JogsRunner/>
            </div>
            <div className="jogsResultsStatistics">
                <span>{DD_MM_YYYY}</span>
                <span>Speed: <span>{speed}</span></span>
                <span>Distance: <span>{distance} km</span></span>
                <span>Time:<span> {time} min</span></span>
            </div>
        </div>
    );
};

export default JogsResultsItem;