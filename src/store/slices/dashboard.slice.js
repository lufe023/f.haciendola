import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        usersToday: "Cargando",
        usersSinceSevenDay: "Cargando",
        usersThisMonth: "Cargando",
        usersLastMonth: "Cargando",
        categories: null,
    },
    reducers: {
        setDashboardData: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },

        updateUsersToday: (state, action) => {
            return {
                ...state,
                usersToday: action.payload,
            };
        },

        updateUsersSinceSevenDay: (state, action) => {
            return {
                ...state,
                usersSinceSevenDay: action.payload,
            };
        },

        updateUsersThisMonth: (state, action) => {
            return {
                ...state,
                usersThisMonth: action.payload,
            };
        },

        updateUsersLastMonth: (state, action) => {
            return {
                ...state,
                usersLastMonth: action.payload,
            };
        },
        updateCategories: (state, action) => {
            return {
                ...state,
                categories: action.payload,
            };
        },
    },
});

export const {
    setDashboardData,
    updateUsersToday,
    updateUsersSinceSevenDay,
    updateUsersThisMonth,
    updateUsersLastMonth,
    updateCategories,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
