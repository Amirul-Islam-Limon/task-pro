import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase/firebase.config";
import { setUser, toggleLoading } from "../redux/features/user/userSlice";
import Loading from "../components/Loading";

const PrivateRoutes=({children})=>{
    const userInfo = useSelector(state=> state.userSlice);
    const dispatch = useDispatch();
    const location = useLocation();

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
        return <Loading></Loading>
    }
    if(!userInfo.email && !userInfo.isLoading){
        // return <Navigate to="/login"></Navigate>
        try {
            return <Navigate to="/login" state={{ from: location }} replace />
        } catch (error) {
            console.log(error);
        }
    }
    
    if(userInfo.email){
        return children
    }
}

export default PrivateRoutes;
