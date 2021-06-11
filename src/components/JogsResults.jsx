import React from 'react';
import JogsResultsItem from "./JogsResultsItem";

const JogsResults = () => {
    return (
        <>
        <JogsResultsItem speed={15} distance={10} time={60} date={`20.12.2017`}/>
        <JogsResultsItem speed={15} distance={10} time={60} date={`20.12.2017`}/>
        <JogsResultsItem speed={15} distance={10} time={60} date={`20.12.2017`}/>
        </>
    );
};

export default JogsResults;