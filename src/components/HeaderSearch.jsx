import {FormControl} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {jogs, selectDataFrom, selectDataTo} from "../state/reducers/jogsReducer";


const HeaderSearch = () => {
    const {dateFrom,dateTo}=useSelector(jogs)
    const dispatch=useDispatch()
    const datePlaceholder="28.12.2020"
    return (
        <div className="headerSearch">
            <span>Date from</span>
            <FormControl placeholder={datePlaceholder} onChange={(e)=>{dispatch(selectDataFrom(e.currentTarget.value))}} value={dateFrom}/>
            <span>Date to</span>
            <FormControl placeholder={datePlaceholder}  onChange={(e)=>{dispatch(selectDataTo(e.currentTarget.value))}} value={dateTo}/>
        </div>
    );
};

export default HeaderSearch;