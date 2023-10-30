import { MdOutlineFileDownloadDone } from "react-icons/md";
import { ImCross} from "react-icons/im";
import { useGetTaskQuery } from "../../redux/features/tasks/tasksApi";
import Loading from "../../components/Loading";
import { Link, useLoaderData } from "react-router-dom";
import noTaskSmile from '../../assets/images/noTaskSmile.gif'
import { useSelector } from "react-redux";
import { MdDownloadDone} from "react-icons/md";

const LowPriorityTask=()=>{

    const currentUser = useSelector(state=> state.userSlice);
    const {data:tasks, isLoading} = useGetTaskQuery(undefined,{
        pollingInterval:30000,
        refetchOnMountOrArgChange:true
    });
    console.log(tasks);

    const lowPriorityTasks = tasks?.filter(task=> task.priority === "low");
    // const assignedToMeTasks = tasks?.filter(task=> task.assignTo === currentUser.displayName);
    const assignedToMeTasks = tasks?.filter(task=> task.assignTo === currentUser.displayName && task.priority === "low");

    
    if(isLoading){
        return <Loading></Loading>
    }

    if(lowPriorityTasks.length === 0){
        return(
            <div className="flex justify-center flex-col items-center h-screen -mt-20">
                <h2 className="text-4xl font-semibold">No Low Priority Task Found!</h2>
                <img className="w-56" src={noTaskSmile} alt="" />
            </div>
        )
    }

    return(
        <div className="ps-10 pt-5">
            <div>
                <h2 className="text-3xl font-bold">Low Priority Tasks</h2>
                <div className="pt-5 overflow-x-auto">
                    <table className="table">
                        <tbody className="flex flex-col">
                            {
                                lowPriorityTasks?.map(task=> <Link
                                    key={task._id}
                                    to={`taskDetails/${task._id}`}
                                >
                                <tr className="flex justify-between bg-slate-100 mb-3">
                                <td>
                                    <div className="flex items-center">
                                        <div className="flex flex-row items-center space-x-2">
                                            <h6 className="font-bold">{task.taskTitle}</h6>
                                            <p className="text-gray-400 font-semibold">(Due: {task.dueDate}) </p>
                                            {
                                                task.status === "completed"? <MdOutlineFileDownloadDone className="bg-green-500 rounded-lg text-white text-xl p-1" />
                                                :
                                                <ImCross className="bg-red-500 rounded-lg text-white text-xl p-1" />
                                            }
                                        </div>
                                    </div>
                                </td>
                                <td className="flex flex-row space-x-1 justify-end">
                                    <p>Assigned to</p>
                                    <p className="font-bold">{task.assignTo}</p>
                                </td>
                            </tr>
                                </Link>)
                            }
                        </tbody>
                    </table>
                </div>
                <div className="mt-14">
                    <h2 className="text-3xl font-bold">Assigned to Me By Others</h2>
                    <div className="pt-5 overflow-x-auto">
                    <table className="table">
                        <tbody className="flex flex-col">
                            {
                                assignedToMeTasks?.map(task=> <Link
                                    key={task._id}
                                    to={`taskDetails/${task._id}`}
                                >
                                <tr className="flex justify-between bg-slate-100 mb-3">
                                <td>
                                    <div className="flex items-center">
                                        <div className="flex flex-row items-center space-x-2">
                                            <h6 className="font-bold">{task.taskTitle}</h6>
                                            <p className="text-gray-400 font-semibold">(Due: {task.dueDate}) </p>
                                            {
                                                task.status === "completed"? <MdOutlineFileDownloadDone className="bg-green-500 rounded-lg text-white text-xl p-1" />
                                                :
                                                <ImCross className="bg-red-500 rounded-lg text-white text-xl p-1" />
                                            }
                                        </div>
                                    </div>
                                </td>
                                <td className="flex flex-row space-x-1 justify-end">
                                    <p>Created by</p>
                                    <p className="font-bold">{task.createdBy.name}</p>
                                </td>
                            </tr>
                                </Link>)
                            }
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}

export default LowPriorityTask;