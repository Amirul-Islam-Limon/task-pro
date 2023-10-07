import { FaTasks } from 'react-icons/fa';
import { Link} from 'react-router-dom';
import { useForm} from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../redux/features/user/userSlice';
// import { createUser } from '../../redux/features/user/userSlice';

const AddTaskModalForm=({isOpen, setIsOpen, closeModal})=>{
    const {register, handleSubmit, formState: { errors },} = useForm()
    const dispatch = useDispatch();
    const userInfo = useSelector(state=> state.userSlice);

    console.log("from Sign Up page", userInfo);

    const onSubmit = (data) => {
        dispatch(createUser({email:data.email, password:data.password, name:data.name}));
        console.log(data)
    };

    return(
        <div className='bg-gray-100'>
            <div className="flex justify-center items-center mx-auto">
                <div className='w-full border px-7 border-gray-300 py-12 rounded '>
                    <div className='w-full'>
                        <div className="flex justify-center pb-8">
                            <h3 className='text-3xl font-bold'>New Task</h3>
                        </div>
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
                            {/* <button className='btn disabled:cursor-not-allowed w-full bg-red-600 mt-7 text-white rounded py-3 font-semibold hover:bg-red-600' type="submit" value="Sign up with email">Sign up with email</button> */}
                        </form>
                        <div className='mt-5'>
                            <button className='rounded-right w-1/2 bg-red-600 text-white py-3 text-md font-semibold'>Create</button>
                            <button onClick={closeModal} className='w-1/2 bg-black text-white py-3 text-md font-semibold'>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTaskModalForm;