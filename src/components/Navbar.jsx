import { FaTasks } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar=()=>{
    return(
        <div className="navbar bg-red-600 px-16">
            <div className="flex-1">
                <Link className='flex' to="/tasks/">
                    <span className='text-white text-3xl pr-2 pt-1'><FaTasks /></span>
                    <span className="normal-case text-3xl text-white">Task Pro</span>
                </Link>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                        {/* <span className="badge">New</span> */}
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;