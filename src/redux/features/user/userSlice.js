import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import auth from "../../../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";


const initialState = {
    userName:"",
    email:"",
    isLoading:true,
    isError:false,
    error:""
}


export const createUser = createAsyncThunk("userSlice/createUser", async({email, password})=>{
    const data = await createUserWithEmailAndPassword(auth, email, password);
    console.log(data);
})

const userSlice = createSlice({
    name:"userSlice",
    initialState:initialState,
    reducers:{

    }
})


export default userSlice.reducer;