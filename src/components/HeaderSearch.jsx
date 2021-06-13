import { FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  jogs,
  selectDataFrom,
  selectDataTo,
} from "../state/reducers/jogsFilterReducer";
import { sport } from "../module/module";

const HeaderSearch = () => {
  const { dateFrom, dateTo } = useSelector(jogs);
  const dispatch = useDispatch();
  return (
    <div className="headerSearch">
      <span>Date from</span>
      <FormControl
        placeholder={sport.dateExample}
        onChange={(e) => {
          dispatch(selectDataFrom(e.currentTarget.value));
        }}
        value={dateFrom}
      />
      <span>Date to</span>
      <FormControl
        placeholder={sport.dateExample}
        onChange={(e) => {
          dispatch(selectDataTo(e.currentTarget.value));
        }}
        value={dateTo}
      />
    </div>
  );
};

export default HeaderSearch;
