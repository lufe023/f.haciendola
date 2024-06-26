import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
    name: "page",
    initialState: {
        menu: false,
    },
    reducers: {
        setPageData: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
        updateMenu: (state, action) => {
            return {
                ...state,
                menu: action.payload,
            };
        },
    },
});

export const { setPageData, updateMenu } = pageSlice.actions;

export default pageSlice.reducer;
