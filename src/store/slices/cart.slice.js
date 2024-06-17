import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartId: null,
        cartProducts: null,
    },
    reducers: {
        setCart: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
        updateMenu: (state, action) => {
            return {
                ...state,
                cartProducts: action.payload,
            };
        },
    },
});

export const { setPageData, updateMenu } = cartSlice.actions;

export default cartSlice.reducer;
