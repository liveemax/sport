import {createSlice} from '@reduxjs/toolkit'
import {jogStorage,tokenStorage} from "../../sportsModule/stateReuse";


const rootReducer = createSlice({
    name: 'root',
    initialState: {
        expanded: false,
        filterOpen: false,
        isAuth:!!localStorage.getItem(tokenStorage),
    },
    reducers: {
        selectExpanded: (state, actions) => {
            state.expanded = actions.payload
        },
        selectFilterOpen: (state, actions) => {
            state.filterOpen = actions.payload
        },
        selectIsAuth: (state, actions) => {
            if(!actions.payload&&localStorage.getItem(tokenStorage))
                localStorage.removeItem(tokenStorage)
            if(!actions.payload&&localStorage.getItem(jogStorage))
                localStorage.removeItem(jogStorage)
            state.isAuth = actions.payload
        },
    }
});

export const root = (state) => state.root;

export const {selectExpanded, selectFilterOpen, selectIsAuth} = rootReducer.actions

export default rootReducer.reducer;
