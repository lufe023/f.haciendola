import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
    name: "dashboard",
    initialState: {
        usersToday: "Cargando",
        usersSinceSevenDay: "Cargando",
        usersThisMonth: "Cargando",
        usersLastMonth: "Cargando",
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
    },
});

export const {
    setDashboardData,
    updateUsersToday,
    updateUsersSinceSevenDay,
    updateUsersThisMonth,
    updateUsersLastMonth,
} = playerSlice.actions;

export default playerSlice.reducer;
