import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/image 2.png"

const Header = () => {
    return (
       <div className='  shadow-md'>
         <div className='container flex items-center justify-between'>
            <img src={logo} alt="img" />
            <div className="flex items-center">
        <div>
            <img src={logo} alt="img" />
            <div className="flex items-center justify-between">
                <Link to={"/admin"}>Admin</Link>
                <Link className='mx-5' to={"/orders"}>Orders</Link>
                <Link to={"/menu"}>Menu</Link>
            </div>
        </div>
       </div>
    );
};

export default Header;