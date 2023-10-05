import { configureStore } from "@reduxjs/toolkit";
import userInfo from "./features/user/userSlice";



const store = configureStore({
    reducer:{
        userSlice:userInfo
    }
})

export default store;