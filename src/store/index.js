import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./slices/page.slice";
import dashboardSlice from "./slices/dashboard.slice";
import userSlice from "./slices/user.slice";
export default configureStore({
    reducer: {
        pageSlice,
        userSlice,
        dashboardSlice,
    },
});
