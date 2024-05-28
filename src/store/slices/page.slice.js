import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
    name: "page",
    initialState: {
        open: false,
    },
    reducers: {
        setPageData: (state, action) => action.payload,
    },
});

export const { setPageData } = pageSlice.actions;

export default pageSlice.reducer;
