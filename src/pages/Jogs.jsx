import React from 'react';
import JogsEmpty from "../components/JogsEmpty";
import JogsAdd from "../components/JogsAdd";
import JogsResults from "../components/JogsResults";
import {useSelector} from "react-redux";
import {jogs} from "../state/reducers/jogsFilterReducer";
import {jogsAdd} from "../state/reducers/jogsAddReducer";

const Jogs = () => {
    const {jogsAddIsOpen}=useSelector(jogsAdd)
    const {allPages}=useSelector(jogs)
    return (
        <>
            {jogsAddIsOpen?<JogsAdd/>:(allPages===0?<JogsEmpty/>:<JogsResults/>)}
        </>
    );
};

export default Jogs;