import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import auth from "../firebase/firebase.config";
import { setUser, toggleLoading } from "../redux/features/user/userSlice";

const PrivateRoutes=({children})=>{
    const userInfo = useSelector(state=> state.userSlice);
    const dispatch = useDispatch();

    console.log("userInfo from Private Route", userInfo);

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                dispatch(setUser({email:user.email, displayName:user.displayName}))
                dispatch(toggleLoading(false));
            }
            else{
                dispatch(toggleLoading(false));
            }
        })
    },[])
    
    
    if(userInfo.isLoading){
        return <div>Loading</div>
    }
    if(!userInfo.email && !userInfo.isLoading){
        return <Navigate to="/login"></Navigate>
    }
    
    if(userInfo.email){
        return children
    }
}

export default PrivateRoutes;
