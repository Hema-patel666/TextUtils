import React from 'react'
import '../sidebar/Sidebar.css'
import { FaHome,FaInfoCircle,FaShoppingCart,FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Sidebar = () => {
    return (     
    <div className="sidebar">
                
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
                    <li><Link className="nav-link active text-light my-2" aria-current="page" to="/"><FaUser className='home-icon' size={30}/><span className='home-txt' size={30}>  Customers</span> </Link>
                    </li></ul><hr />

    </div>
    );
  };
  
  export default Sidebar;
