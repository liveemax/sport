import {createSlice} from '@reduxjs/toolkit'

const rootReducer = createSlice({
    name: 'root',
    initialState: {
        expanded: false,
        filterOpen: false,
        jogsAddIsOpen: false,
        isAuth:!!localStorage.getItem("token"),
    },
    reducers: {
        selectExpanded: (state, actions) => {
            state.expanded = actions.payload
        },
        selectFilterOpen: (state, actions) => {
            state.filterOpen = actions.payload
        },
        selectJogsAddIsOpen: (state, actions) => {
            state.jogsAddIsOpen = actions.payload
        },
        selectIsAuth: (state, actions) => {
            if(!actions.payload&&localStorage.getItem("token"))
                localStorage.removeItem("token")
            if(!actions.payload&&localStorage.getItem("jogs"))
                localStorage.removeItem("jogs")
            state.isAuth = actions.payload
        },
    }
});

export const root = (state) => state.root;

export const {selectExpanded, selectFilterOpen, selectJogsAddIsOpen,selectIsAuth} = rootReducer.actions

export default rootReducer.reducer;
