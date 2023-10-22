import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AllTasks from "../pages/AllTasks/AllTasks";
import TodaysTask from "../pages/TodaysTask/TodaysTask";
import HighPriorityTask from "../pages/HighPriorityTask/HighPriorityTask";
import MediumPriorityTask from "../pages/MediumPriorityTask/MediumPriorityTask";
import LowPriorityTask from "../pages/LowPriorityTask/LowPriorityTask";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import TaskDetails from "../pages/TaskDetails/TaskDetails";


const routes = createBrowserRouter([
    {
        path:"/",
        element:<Home></Home>
    },
    {
        path:"/home",
        element:<Home></Home>
    },
    {
        path:"/tasks",
        element:(
            <PrivateRoutes><MainLayout></MainLayout></PrivateRoutes>
        ),
        children:[
            {
                
                index:true,
                element:<AllTasks></AllTasks>
            },
            {
                path:"today",
                element:<TodaysTask></TodaysTask>
            },
            
            {
                path:"highPriority",
                element:<HighPriorityTask></HighPriorityTask>
            },
            {
                path:"medium-priority",
                element:<MediumPriorityTask></MediumPriorityTask>
            },
            {
                path:"low-priority",
                element:<LowPriorityTask></LowPriorityTask>
            },
            {
                path:"taskDetails/:id",
                loader:(props)=>{
                    return fetch(`http://localhost:5000/task/${props.params.id}`);
                },
                element:<TaskDetails></TaskDetails>
            }
        ]
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/signup",
        element:<SignUp></SignUp>
    }
])

export default routes