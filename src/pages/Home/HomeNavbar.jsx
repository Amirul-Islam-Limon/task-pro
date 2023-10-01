import { FaTasks } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeNavbar=()=>{
    return(
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link className='flex' to="/">
                    <span className='text-red-600 text-3xl pr-2 pt-1'><FaTasks /></span>
                    <span className="normal-case font-semibold text-3xl text-red-600">Task Pro</span>
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 pt-1">
                <Link to="/login" className='text-xl px-2'><a className='hover:border-b-2 border-red-500 pb-1'>Login</a></Link>
                <Link to="/signup" className='text-xl text-red-600 px-2' ><a className='hover:border-b-2 border-black pb-1'>Signup</a></Link>
                </ul>
            </div>
        </div>
    )
}

export default HomeNavbar;



                