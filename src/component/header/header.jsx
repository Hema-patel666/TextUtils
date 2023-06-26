import React from 'react';
import PropTypes from 'prop-types';
import {FaUserCircle} from "react-icons/fa";
import { Link } from 'react-router-dom';
// import {Link} from 'react-router-dom';



export default function Header(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          <div className="d-flex" >
            <div className='bg-primary rounded mx-2' onClick={()=>props.toggleMode('primary')} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>            
            <div className='bg-danger rounded mx-2' onClick={()=>props.toggleMode('danger')} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>            
            <div className='bg-success rounded mx-2' onClick={()=>props.toggleMode('success')} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>            
            <div className='bg-warning rounded mx-2' onClick={()=>props.toggleMode('warning')} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>            
            <div className='bg-info rounded mx-2' onClick={()=>props.toggleMode('info')} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>            
          </div>

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={()=>props.toggleMode(null)} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
          </div>
          <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/login">
            <FaUserCircle className="user-icon-header" size={40} /></Link>
        </div>
      </div>
    </nav>
  );
}


Header.propTypes = { title: PropTypes.string.isRequired }
Header.defaultProps = {
  title: 'MYTEST APP',
  aboutText: 'About Us'
}