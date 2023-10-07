import { FaTasks } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm} from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux';
import { googleLogin, loginWithEmailPass } from '../../redux/features/user/userSlice';
import { useEffect } from 'react';


const Login=()=>{
    const {register, handleSubmit, formState: { errors },} = useForm();
    const dispatch = useDispatch();
    const {email, isLoading} = useSelector(state=> state.userSlice);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = (data) => {
        console.log("data from login page", data);
        dispatch(loginWithEmailPass({email:data.email, password:data.password}))
    };

    const handleGoogleLogin=()=>{
        console.log("Clicked Google Login");
        dispatch(googleLogin());
    }

    useEffect(()=>{
        if(!isLoading && email){
            try {
                navigate(from, { replace: true });
            } catch (error) {
                console.log(error);
            }
        }
    },[email,isLoading])

    return(
        <div className='bg-gray-100'>
            <div className="md:w-2/5 flex justify-center items-center h-screen mx-auto">
                <div className='w-full border px-7 border-gray-300 py-12 rounded bg-white'>
                    <div className='w-full'>
                        <div className="flex justify-center pb-10">
                            <Link className='flex' to="/">
                                <span className='text-red-600 text-3xl pr-2 pt-1'><FaTasks /></span>
                                <span className="normal-case font-semibold text-3xl text-red-600">Task Pro</span>
                            </Link>
                        </div>
                        <div>
                            <h3 className='text-3xl font-bold'>Login</h3>
                            <button onClick={handleGoogleLogin} className='btn flex w-full mt-6 py-2 items-center justify-center text-md rounded font-semibold'>
                                <FcGoogle className='pr-1 text-2xl' />
                                <p>Continue with Google</p>
                            </button>
                            <button className='btn flex w-full mt-5 py-2 items-center justify-center text-md rounded font-semibold'>
                                <FaFacebook className='text-blue-500 pr-1 text-2xl' />
                                <p>Continue with Facebook</p>
                            </button>
                        </div>
                        <div className="divider pt-5">OR</div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email address" {...register("email", { required: true })} className="input input-bordered"/>
                                {errors.email && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="type your password" {...register("password", { required:true})} className="input input-bordered"/>    
                            </div>
                            <button className='btn w-full bg-red-600 mt-7 text-white rounded py-3 font-semibold hover:bg-red-500' type="submit">Login</button>
                        </form>
                        <div className="divider pt-3"></div>
                        <div className='flex justify-center font-semibold'>
                            <p>Don&apos;t have an account?</p><Link to="/signup" className='text-red-600 ps-1'>Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;