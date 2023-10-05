import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import auth from "../../../firebase/firebase.config";
import { createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";


const initialState = {
    displayName:"",
    email:"",
    isLoading:true,
    isError:false,
    error:""
}


export const createUser = createAsyncThunk("userSlice/createUser", async({email, password, name})=>{
    const data = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser,{
        displayName:name
    })
    console.log(data);
    return{
        name:data.user.displayName,
        email:data.user.email
    }
})

const userSlice = createSlice({
    name:"userSlice",
    initialState:initialState,
    reducers:{
        setUser:(state,action)=>{
            state.email = action.payload.email,
            state.displayName = action.payload.displayName
        },
        toggleLoading:(state, action)=>{
            state.isLoading = action.payload
        },
        logOut:(state, action)=>{
            state.email="",
            state.displayName=""
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(createUser.pending, (state, action)=>{
            state.displayName= "",
            state.email= "",
            state.isLoading= true,
            state.isError= false,
            state.error= ""
        })
        builder.addCase(createUser.fulfilled, (state, action)=>{
            state.displayName= action.payload.name,
            state.email= action.payload.email,
            state.isLoading= false,
            state.isError= false,
            state.error= ""
        })
        builder.addCase(createUser.rejected, (state, action)=>{
            state.displayName= "",
            state.email= "",
            state.isLoading= false,
            state.isError= true,
            state.error= action.error.message
        })
        
    }
})

export const {setUser, toggleLoading, logOut} = userSlice.actions
export default userSlice.reducer;