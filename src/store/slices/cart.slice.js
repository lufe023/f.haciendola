import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        id: null,
        CartItem: null,
    },
    reducers: {
        setCart: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
