import { FaTasks } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useForm, useWatch } from "react-hook-form"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, googleLogin } from '../../redux/features/user/userSlice';
import { useAddUserMutation } from '../../redux/features/user/userApi';
import Swal from 'sweetalert2'

const SignUp=()=>{
    const {register, handleSubmit, control, formState: { errors },} = useForm()
    const password = useWatch({ control, name: 'password' });
    const confirmPassword = useWatch({control, name: "confirmPassword"});
    const [disableSignUp, setDisableSighUp] = useState(true);
    const dispatch = useDispatch();
    const userInfo = useSelector(state=> state.userSlice);
    const navigate = useNavigate();
    const [addUser, {data:userUpdatedData, error}] = useAddUserMutation()

    console.log("from Sign Up page", userInfo);
    console.log("userUpdatedData", userUpdatedData);
    

    const onSubmit = (data) => {
        const submitedUser = {displayName:data.name, email:data.email}
        addUser(submitedUser);
        dispatch(createUser({email:data.email, password:data.password, name:data.name}));
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'User created successfully',
            showConfirmButton: false,
            timer: 1500
        })     
    };

    const handleGoogleLogin=()=>{
        console.log("Clicked Google Login");
        dispatch(googleLogin());
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'User created successfully',
            showConfirmButton: false,
            timer: 1500
        })
    }


    useEffect(()=>{
        if(!userInfo.isLoading && userInfo.email){
            navigate("/tasks");
        }
    },[userInfo.email, userInfo.isLoading])


    useEffect(()=>{
        if(
            password !== undefined &&
            password !== "" && 
            confirmPassword !== undefined &&
            confirmPassword !== "" &&
            password === confirmPassword
            ){
                setDisableSighUp(false)
            }
            else{
                setDisableSighUp(true);
            }
    },[password, confirmPassword])

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
                            <h3 className='text-3xl font-bold'>Sign up</h3>
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
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="your name" {...register("name", { required: true })} className="input input-bordered"/>
                                {errors.name && <span className='text-red-500'>This field is required</span>}
                            </div>
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
                                <input type="password" placeholder="type your password" {...register("password", { required:true, pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/i })} className="input input-bordered"/>
                                {errors.password && <span className='text-red-500'>password must be atleast 6 character with one number and one special character</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="password(confirm)" {...register("confirmPassword", { required: true })} className="input input-bordered"/>
                                {errors.confirmPassword && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <button disabled={disableSignUp} className='btn disabled:cursor-not-allowed w-full bg-red-600 mt-7 text-white rounded py-3 font-semibold hover:bg-red-600' type="submit" value="Sign up with email">Sign up with email</button>
                        </form>
                        <div className="divider pt-3"></div>
                        <div className='flex justify-center font-semibold'>
                            <p>Alredy signed up?</p><Link to="/login" className='text-red-600 ps-1'>Go to login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;