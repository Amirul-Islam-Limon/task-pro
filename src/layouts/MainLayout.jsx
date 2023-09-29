import Navbar from "../components/Navbar";
import { CiMenuBurger } from 'react-icons/ci';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsListTask } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';


const  MainLayout=()=>{
    return(
        <div className="max-w-screen-2xl">
            <Navbar></Navbar>
            <div>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {/* Page content here */}
                        {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden flex"><span className="pt-1"><CiMenuBurger /></span>Open Side Menu</label>
                        
                    
                    </div> 
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li className="text-xl"><a><span className="text-green-500"><AiOutlinePlus/></span>New Task</a></li>
                        <div className="divider"></div> 
                        <li className="text-xl py-1"><a><span className="text-blue-400"><BsListTask/></span>All Tasks</a></li>
                        <li className="text-xl py-1"><a><span className="text-green-600"><SlCalender/></span>Today</a></li>
                        <div className="divider"></div>
                        <li className="text-xl py-1 text-red-600"><a><span className="text-red-600"><BsListTask/></span>High Priority</a></li>
                        <li className="text-xl py-1 text-yellow-500"><a><span className="text-yellow-500"><SlCalender/></span>Medium Priority</a></li>
                        <li className="text-xl py-1 text-green-700"><a><span className="text-green-700"><SlCalender/></span>Low Priority</a></li>
                        <div className="divider"></div>
                        <li className="text-xl py-1 text-blue-600"><a><span><BsListTask/></span>Work</a></li>
                        <li className="text-xl py-1 text-green-500"><a><span><SlCalender/></span>Home</a></li>
                        <li className="text-xl py-1 text-yellow-400"><a><span><SlCalender/></span>Finance</a></li>
                        <li className="text-xl py-1 text-red-900"><a><span><SlCalender/></span>Archive</a></li>
                        </ul>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainLayout;