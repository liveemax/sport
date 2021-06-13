import React, {useState} from 'react';
import JogsSvgCross from "./JogsSvgCross";
import {FormControl} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {dateExample, distanceExample, timeExample} from "../sportsModule/stateReuse";
import {jogsAdd, selectDate, selectDistance, selectJogsAddIsOpen, selectTime} from "../state/reducers/jogsAddReducer";

const JogsAdd = () => {
    const {distance,time,date}=useSelector(jogsAdd)
    const dispatch=useDispatch()
    return (
        <div className="jogsAdd">
            <button onClick={()=>{
                dispatch(selectJogsAddIsOpen(false))
                dispatch(selectDistance(''))
                dispatch(selectTime(''))
                dispatch(selectDate(''))

            }} className="jogsCross">
                <JogsSvgCross/>
            </button>
            <div className="jogsAddItem">
                <span className="jogsAddText">Distance</span>
                <FormControl onChange={(e)=>{dispatch(selectDistance(e.currentTarget.value))}} placeholder={distanceExample} className="jogsAddInput" value={distance}/>
            </div>
            <div className="jogsAddItem">
                <span className="jogsAddText">Time</span>
                <FormControl onChange={(e)=>{dispatch(selectTime(e.currentTarget.value))}} placeholder={timeExample} className="jogsAddInput" value={time}/>
            </div>
            <div className="jogsAddItem">
                <span className="jogsAddText">Date</span>
                <FormControl onChange={(e)=>{dispatch(selectDate(e.currentTarget.value))}} placeholder={dateExample} className="jogsAddInput" value={date}/>
            </div>
            <Button onClick={()=>{
                dispatch({type:"selectAddJog_ASYNC",date,time,distance})
                dispatch(selectJogsAddIsOpen(false))
                dispatch(selectDistance(''))
                dispatch(selectTime(''))
                dispatch(selectDate(''))
            }} className="jogsAddButton" variant="outline-light">Save</Button>
        </div>
    );
};

export default JogsAdd;