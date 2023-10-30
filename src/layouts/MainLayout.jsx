import './MainLayout.css'
import Navbar from "../components/Navbar";
import { CiMenuBurger } from 'react-icons/ci';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsListTask } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import { FaComputer } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { AiFillDelete } from "react-icons/ai";
import { RiPsychotherapyFill } from "react-icons/ri";
import { Link, NavLink, Outlet } from "react-router-dom";
import AddTaskModal from '../components/AddTaskModal';
import { useState } from 'react';

const  MainLayout=()=>{
    const [isOpen, setIsOpen] = useState(false);
    
      function openModal() {
        setIsOpen(true)
      }


    return(
        <div className="max-w-screen-2xl">
            <Navbar></Navbar>
            <AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen}></AddTaskModal>
            <div>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        <Outlet></Outlet>
                        {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden flex"><span className="pt-1"><CiMenuBurger /></span>Open Side Menu</label>
                        
                    
                    </div> 
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                        <ul className="sideMenu menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        {/* <li className="text-xl"><a><span className="text-green-500"><AiOutlinePlus/></span>New Task</a></li> */}
                        <div>
                            <button onClick={openModal} className='w-full'><li className="text-xl"><a><span className="text-green-500"><AiOutlinePlus/></span>New Task</a></li></button>
                        </div>
                        <div className="divider"></div> 
                        {/* <Link to="/allTasks"><li className="text-xl py-1"><a><span className="text-blue-500"><BsListTask/></span>All Tasks</a></li></Link> */}
                        <NavLink
                         to="/tasks/"
                         className={({ isActive }) =>
                         isActive
                           ? 'bg-white cursor-pointer'
                           : ''
                        }
                         ><li className="text-xl py-1 flex"><a><BsListTask className="text-blue-500 px-1 pt-1 text-3xl"/>All Tasks</a></li>
                         </NavLink>
                         <NavLink
                         to="today"
                         className={({ isActive }) =>
                         isActive
                           ? 'bg-white cursor-pointer'
                           : ''
                        }
                         ><li className="text-xl py-1 flex"><a><SlCalender className="text-blue-500 px-1 pt-1 text-3xl"/>Today</a></li>  
                         </NavLink>
                        <div className="divider"></div>

                        <NavLink
                         to="highPriority"
                         className={({ isActive }) =>
                         isActive
                           ? 'bg-white cursor-pointer'
                           : ''
                        }
                         >
                        <li className="text-xl py-1 text-red-600"><a><span className="text-red-600"><SlCalender/></span>High Priority</a></li>
                        </NavLink>  
                        <NavLink
                         to="mediumPriority"
                         className={({ isActive }) =>
                         isActive
                           ? 'bg-white cursor-pointer'
                           : ''
                        }
                         >
                        <li className="text-xl py-1 text-yellow-500"><a><span className="text-yellow-500"><SlCalender/></span>Medium Priority</a></li>
                        </NavLink> 
                        <NavLink
                         to="lowPriority"
                         className={({ isActive }) =>
                         isActive
                           ? 'bg-white cursor-pointer'
                           : ''
                        }
                         >
                        <li className="text-xl py-1 text-green-700"><a><span className="text-green-700"><SlCalender/></span>Low Priority</a></li>
                        </NavLink>                                             
    
                        <div className="divider"></div>
                        <Link to="/tasks/"><li className="text-xl py-1 text-green-500"><a><span><AiOutlineHome/></span>Home</a></li></Link>
                         
                        <li className="text-xl py-1 text-blue-600"><a><span><FaComputer/></span>Work</a></li>
                        <li className="text-xl py-1 text-yellow-400"><a><span><GiTakeMyMoney/></span>Finance</a></li>
                        <li className="text-xl py-1 text-red-900"><a><span><AiFillDelete/></span>Archive</a></li>
                        <li className="text-xl py-1 text-cyan-500"><a><span><RiPsychotherapyFill/></span>Others</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainLayout;