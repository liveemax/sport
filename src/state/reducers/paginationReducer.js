import {createSlice} from '@reduxjs/toolkit'
import {allPages, localBuffer, pageSize, startPage} from "../stateReuse";



const paginationReducer = createSlice({
    name: 'pagination',
    initialState: {
        jogsResults: localBuffer,
        startPage,
        pageSize,
        allPages:allPages(localBuffer),
    },
    reducers: {
        selectStartPage: (state, actions) => {
            state.startPage = actions.payload
        },
        selectAllPages: (state, actions) => {
            state.allPages = actions.payload
        },
        selectJogsResults: (state, actions) => {
            state.jogsResults = actions.payload
        },
    }
});

export const pagination = (state) => state.pagination;

export const {selectStartPage, selectAllPages,selectJogsResults} = paginationReducer.actions

export default paginationReducer.reducer;
