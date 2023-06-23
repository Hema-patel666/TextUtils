import React from 'react'
import '../sidebar/Sidebar.css'
import { FaHome,FaInfoCircle,FaShoppingCart,FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Sidebar = () => {
    return (
     
    <div className="sidebar">
        {/* <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-primary"> */}
          
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                    <li> <Link className="nav-link active my-3 md-2 text-light" aria-current="page" to="/"><FaHome className='home-icon' size={30} />
                    <span className='home-txt' size={30}> Home</span></Link>
                    </li>
                    <li>
                   <Link className="nav-link active text-light my-2" to="/about"><FaInfoCircle className='home-icon' size={30} /><span className='home-txt' size={30}>  About Us </span> </Link>
                    </li>
                   
                    <li>
                       <Link className="nav-link active text-light my-2" aria-current="page" to="/"><FaShoppingCart className='home-icon' size={30}/><span className='home-txt' size={30}> Orders</span></Link>
                    </li>
                    <li>
                        <Link className="nav-link active text-light my-2" aria-current="page" to="/"><FaUser className='home-icon' size={30}/><span className='home-txt' size={30}>  Customers</span> </Link>
                          
                    </li>
                </ul>
                <hr />
                {/* <div className="dropdown pb-4">
                   <Link href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                        <span className="d-none d-sm-inline mx-1">loser</span>
                   </Link>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a className="dropdown-item" href="/">New project...</a></li>
                        <li><a className="dropdown-item" href="/">Settings</a></li>
                        <li><a className="dropdown-item" href="/">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="/">Sign out</a></li>
                    </ul>
                </div> */}
            {/* </div> */}
        
    </div>
    );
  };
  
  export default Sidebar;
