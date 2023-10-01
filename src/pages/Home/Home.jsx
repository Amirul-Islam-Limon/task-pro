import { Link } from 'react-router-dom';
import HomeBg from '../../assets/images/taskProHome.png'
import HomeNavbar from './HomeNavbar';

const Home=()=>{
    return(
        <div>
            <HomeNavbar></HomeNavbar>
                <div className='mt-8 leading-snug text-center text-8xl font-bold'>
                    <h2>Organize your life</h2>
                    <h2>with Task Pro</h2>
                </div>
                <div className='text-center mt-5'>
                    <Link to="/tasks/"><button className='bg-red-600 text-white px-8 py-3 rounded-md font-semibold text-xl'>Get Started</button></Link>
                </div>
            <div className="-mt-64 bg-cover bg-center h-screen" style={{backgroundImage:`url(${HomeBg})`}}>
            </div>
        </div>
    )
}

export default Home;