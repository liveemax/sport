import React from "react";
import JogsResultsItem from "./JogsResultsItem";
import {useDispatch, useSelector} from "react-redux";
import JogsSvgAdd from "./Svg/JogsSvgAdd";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import PaginateItem from "./PaginateItem";
import {jogs, selectStartPage} from "../state/reducers/jogsFilterReducer";

const JogsResults = () => {
    const {allPages, startPage, jogsResults, pageSize} = useSelector(jogs);
    const dispatch = useDispatch();
    return (
        <>
            <div className="jogsResultsContainer">
                    {jogsResults.map((el, ind) => {
                        if (
                            ind >= startPage * pageSize &&
                            ind < startPage * pageSize + pageSize
                        )
                            return (
                                <JogsResultsItem
                                    key={el.id}
                                    speed={(el.distance / (el.time / 60)).toFixed(1)}
                                    distance={el.distance}
                                    time={el.time}
                                    date={el.date}
                                />
                            );
                        return null;
                    })}
            </div>
            <ReactPaginate
                previousLabel={<PaginateItem icon={faChevronLeft}/>}
                nextLabel={<PaginateItem icon={faChevronRight}/>}
                pageCount={allPages}
                onPageChange={(page) => {
                    dispatch(selectStartPage(page.selected));
                }}
                forcePage={startPage}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                breakLabel="..."
                pageLinkClassName="btn-outline-dark"
                breakClassName="break-me "
                containerClassName="pagination"
                activeLinkClassName="active"
            />
            <JogsSvgAdd/>
        </>
    );
};
export default JogsResults;
