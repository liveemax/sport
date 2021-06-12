import {createSlice} from '@reduxjs/toolkit'
import {allPages, filterFunc, localBuffer, pageSize, startPage} from "../stateReuse";


const jogsReducer = createSlice({
    name: 'jogs',
    initialState: {
        jogsResults: localBuffer,
        startPage,
        pageSize,
        allPages:allPages(localBuffer),
        dateFrom:"",
        dateTo:"",
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
        selectDataFrom: (state, actions) => {
            state.dateFrom = actions.payload
            state.jogsResults = filterFunc(actions.payload,state.dateFrom,state.dateTo,state.jogsResults)
            state.allPages = allPages(state.jogsResults)
        },
        selectDataTo: (state, actions) => {
            state.dateTo = actions.payload
            state.jogsResults = filterFunc(actions.payload,state.dateFrom,state.dateTo,state.jogsResults)
            state.allPages = allPages(state.jogsResults)
        },
    }
});

export const jogs = (state) => state.jogs;

export const {selectStartPage, selectAllPages,selectJogsResults,selectDataTo,selectDataFrom} = jogsReducer.actions

export default jogsReducer.reducer;
