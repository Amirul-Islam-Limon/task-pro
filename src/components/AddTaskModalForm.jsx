import { FaTasks } from 'react-icons/fa';
import { Link} from 'react-router-dom';
import { useForm} from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../redux/features/user/userSlice';
import { useGetUserQuery } from '../redux/features/user/userApi';
import { useAddTaskMutation } from '../redux/features/tasks/tasksApi';
// import { createUser } from '../../redux/features/user/userSlice';

const AddTaskModalForm=({isOpen, setIsOpen, closeModal})=>{
    const {register, handleSubmit, formState: { errors },} = useForm();
    const [addTask, {data, error}] = useAddTaskMutation();
    const {data:users, isLoading} = useGetUserQuery(undefined, {
        pollingInterval:30000,
        refetchOnMountOrArgChange:true
    })

    console.log(users);

    const onSubmit = (data) => {
        const selectedInfo = {...data, status:"pending"}
        addTask(selectedInfo);
        setIsOpen(!isOpen);
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
                                    <span className="label-text">Task Title</span>
                                </label>
                                <input type="text" placeholder="type task title" {...register("taskTitle", { required: true })} className="input input-bordered"/>
                                {errors.taskTitle && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <select {...register("category", { required:true})} className="input input-bordered">
                                    <option disabled selected value="">Select a Cetegory</option>
                                    <option value="frontEnd">Front End</option>
                                    <option value="backEnd">Back End</option>
                                    <option value="server">Server</option>
                                    <option value="other">Other</option>
                                </select>
                                {errors.category && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Due Date</span>
                                </label>
                                <input type="date" placeholder="select your date" {...register("dueDate", { required:true})} className="input input-bordered"/>
                                {errors.dueDate && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Priority Level</span>
                                </label>
                                <select {...register("priority", { required:true})} className="input input-bordered">
                                    <option disabled selected value="">Select a Priority Level</option>
                                    <option value="high">High</option>
                                    <option value="medium">Medium</option>
                                    <option value="low">Low</option>
                                </select>
                                {errors.priority && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Assign to</span>
                                </label>
                                <select {...register("assignTo", { required:true})} className="input input-bordered">
                                    <option disabled selected value="">Select an Assignee</option>
                                    {
                                        users?.map(user=><option
                                        key={user._id}
                                        value={user.displayName}
                                        >{user.displayName}</option>)
                                    }
                                </select>
                                {errors.assignTo && <span className='text-red-500'>This field is required</span>}
                            </div>
                        </form>
                        <div className='mt-5'>
                            <button onClick={handleSubmit(onSubmit)} className='rounded-right w-1/2 bg-red-600 text-white py-3 text-md font-semibold'>Create</button>
                            <button onClick={closeModal} className='w-1/2 bg-black text-white py-3 text-md font-semibold'>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTaskModalForm;