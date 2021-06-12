import React from 'react';
import JogsRunner from "./JogsRunner";
import moment from "moment";
import {dateFormat} from "../state/stateReuse";

const JogsResultsItem = (props) => {
    const {speed,distance,time,date}=props
    const DD_MM_YYYY=moment(date).format(dateFormat)
    return (
        <div className="jogsResultsItem">
            <div>
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