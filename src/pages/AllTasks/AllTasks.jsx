import { MdOutlineFileDownloadDone } from "react-icons/md";
import { ImCross} from "react-icons/im";
import { useGetTaskQuery } from "../../redux/features/tasks/tasksApi";


const AllTasks=()=>{
    const {data:tasks, isLoading} = useGetTaskQuery(undefined,{
        pollingInterval:30000,
        refetchOnMountOrArgChange:true
    })

    console.log("from all task pages",tasks);
    return(
        <div className="ps-10 pt-5">
            <div>
                <h2 className="text-3xl font-bold">All Tasks</h2>
                <div className="pt-5 overflow-x-auto">
                    <table className="table">
                        <tbody className="flex flex-col">
                            {
                                tasks?.map(task=><tr className="flex justify-between bg-slate-100 mb-3"
                                key={task._id}
                                >
                                <td>
                                    <div className="flex items-center">
                                        <div className="flex flex-row items-center space-x-2">
                                            <h6 className="font-bold">{task.taskTitle}</h6>
                                            <p className="text-gray-400 font-semibold">(Due: {task.dueDate}) </p>
                                            {/* <MdOutlineFileDownloadDone className="bg-green-500 rounded-lg text-white text-xl p-1" /> */}
                                            <ImCross className="bg-red-500 rounded-lg text-white text-xl p-1" />
                                        </div>
                                    </div>
                                </td>
                                <td className="flex flex-row space-x-1 justify-end">
                                    <p>Assigned to</p>
                                    <p className="font-bold">{task.assignTo}</p>
                                </td>
                            </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <div className="mt-14">
                    <h2 className="text-3xl font-bold">Assigned to Me By Others</h2>
                </div>
            </div>
        </div>
    )
}

export default AllTasks;

