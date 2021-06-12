import React from 'react';
import JogsResultsItem from "./JogsResultsItem";
import {useDispatch, useSelector} from "react-redux";
import JogsSvgAdd from "./JogsSvgAdd";
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';
import PaginateItem from "./PaginateItem";
import {pagination, selectStartPage} from "../state/reducers/paginationReducer";

const JogsResults = () => {
    const {allPages,startPage,jogsResults,pageSize}=useSelector(pagination)
    const dispatch=useDispatch()
    return (
        <>
            {
                jogsResults.map((el,ind)=>{
                    if(ind>=startPage*pageSize&&ind<startPage*pageSize+pageSize)
                    return <JogsResultsItem key={el.id} speed={(el.distance/el.time).toFixed(2)} distance={el.distance} time={el.time} date={el.date}/>
                })
            }
            <ReactPaginate
                previousLabel={<PaginateItem icon={faChevronLeft} />}
                nextLabel={<PaginateItem icon={faChevronRight} />}
                pageCount={allPages}
                onPageChange={(page) => {
                    dispatch(selectStartPage(page.selected))
                }}
                initialPage={startPage}
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