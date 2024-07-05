import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./slices/page.slice";
import dashboardSlice from "./slices/dashboard.slice";
import userSlice from "./slices/user.slice";
import cartSlice from "./slices/cart.slice";
export default configureStore({
    reducer: {
        pageSlice,
        userSlice,
        dashboardSlice,
        cartSlice,
    },
});
