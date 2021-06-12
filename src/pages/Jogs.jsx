import React from 'react';
import JogsEmpty from "../components/JogsEmpty";
import JogsAdd from "../components/JogsAdd";
import JogsResults from "../components/JogsResults";
import {useSelector} from "react-redux";
import {root} from "../state/reducers/rootReducer";
import {jogs} from "../state/reducers/jogsReducer";

const Jogs = () => {
    const {jogsAddIsOpen}=useSelector(root)
    const {allPages}=useSelector(jogs)
    return (
        <>
            {jogsAddIsOpen?<JogsAdd/>:(allPages===0?<JogsEmpty/>:<JogsResults/>)}
        </>
    );
};

export default Jogs;