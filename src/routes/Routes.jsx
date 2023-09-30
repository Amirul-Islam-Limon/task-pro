import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AllTasks from "../pages/AllTasks/AllTasks";
import TodaysTask from "../pages/TodaysTask/TodaysTask";
import HighPriorityTask from "../pages/HighPriorityTask/HighPriorityTask";
import MediumPriorityTask from "../pages/MediumPriorityTask/MediumPriorityTask";
import LowPriorityTask from "../pages/LowPriorityTask/LowPriorityTask";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                
                index:true,
                element:<AllTasks></AllTasks>
            },
            {
                path:"/today",
                element:<TodaysTask></TodaysTask>
            },
            
            {
                path:"/highPriority",
                element:<HighPriorityTask></HighPriorityTask>
            },
            {
                path:"/medium-priority",
                element:<MediumPriorityTask></MediumPriorityTask>
            },
            {
                path:"/low-priority",
                element:<LowPriorityTask></LowPriorityTask>
            }
        ]
    },
])

export default routes