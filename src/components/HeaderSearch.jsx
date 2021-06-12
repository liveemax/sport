import {useState} from "react";
import {FormControl} from "react-bootstrap";


const HeaderSearch = () => {
    const [dataFrom,setDataFrom]=useState("")
    const [dataTo,setDataTo]=useState("")
    const dateFormat="28.12.99"
    return (
        <div className="headerSearch">
            <span>Date to</span>
            <FormControl placeholder={dateFormat} onChange={(e)=>{setDataFrom(e.currentTarget.value)}} value={dataFrom}/>
            <span>Date from</span>
            <FormControl placeholder={dateFormat}  onChange={(e)=>{setDataTo(e.currentTarget.value)}} value={dataTo}/>
        </div>
    );
};

export default HeaderSearch;