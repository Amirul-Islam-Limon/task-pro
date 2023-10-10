import { configureStore } from "@reduxjs/toolkit";
import userInfo from "./features/user/userSlice";
import baseApi from "./features/api/baseApi";



const store = configureStore({
    reducer:{
        [baseApi.reducerPath] : baseApi.reducer,
        userSlice:userInfo,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

export default store;