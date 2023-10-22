import { useLoaderData, useNavigate } from "react-router-dom";
import { SlCalender } from 'react-icons/sl';
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5"; // icon completed
import { HiMiniXCircle } from "react-icons/hi2";
import { useChangeTaskStatusMutation, useDeleteTaskMutation } from "../../redux/features/tasks/tasksApi";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'

const TaskDetails=()=>{
    const task = useLoaderData();
    const navigate = useNavigate();
    const [deleteTask, {data, error}] = useDeleteTaskMutation();
    const [changeTaskStatus, {data:status, error:statusError}] = useChangeTaskStatusMutation();

    const handleCompleteTask= async (taskId)=>{
        try {
            const response = await changeTaskStatus(taskId)
            if (error) {
                console.error("Error deleting task:", error);
              } else {
                console.log(response.data);
                if(response.data.acknowledged){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your task has been completed',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    navigate(-1);
                }
              }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }
    
    const handleDeleteTask= async (taskId)=>{
        try {
            const response = await deleteTask(taskId)
            if (error) {
                console.error("Error deleting task:", error);
              } else {
                if(response.data.deletedCount > 0){
                    navigate(-1);
                }
              }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

    return(
        <div className="ps-10 pt-10">
            <div>
                <h2 className="text-3xl font-bold">{task.taskTitle}</h2>
                <div className="ms-5 mt-7 space-y-4">
                    <p className="text-lg">Created by <span className="font-semibold">{task.createdBy?.name}</span> | Assigned to <span className="font-semibold">{task.assignTo}</span></p>
                    <p className="text-lg font-normal">Category: <span className="font-semibold uppercase">{task.category}</span></p>
                    <p className="text-lg">Deadline: <span className="font-semibold uppercase">{task.dueDate}</span></p>
                    <p className="text-lg flex flex-row items-center">Priority:<span className={`px-1 ${task.priority ==="high"? "text-red-600" :""} ${task.priority === "medium"? "text-yellow-500":""} ${task.priority === "low"? "text-green-500":""}`}> <SlCalender/></span><span className=" font-semibold uppercase">{task.priority}</span></p>
                    <p className="text-lg flex flex-row items-center">Completed: {task.status !== "completed"? <span><HiMiniXCircle className="text-2xl text-red-600"/></span>  :<span><IoCheckmarkDoneCircleSharp className="text-2xl text-green-600"/></span>} </p>
                </div>
                <div className="space-x-3 mt-6">
                    <button className="btn btn-sm hover:bg-gray-600 bg-gray-500 w-36 text-white font-bold rounded-md py-1">Edit</button>
                    <button onClick={()=>handleDeleteTask(task._id)} className="btn btn-sm hover:bg-red-600 bg-red-500 w-36 text-white font-bold rounded-md py-1">Delete</button>
                    {
                        task.status !== "completed" && <button onClick={()=>handleCompleteTask(task._id)} className="btn btn-sm hover:bg-green-700 bg-green-600 w-36 text-white font-bold rounded-md py-1">Complete</button>
                    }
        
                </div>
            </div>
        </div>
    )
}

export default TaskDetails;
HiMiniXCircle

