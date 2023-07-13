import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/image 2.png"

const Header = () => {
    return (
        <div>
            <img src={logo} alt="" />
            <div className="flex items-center justify-between">
                <Link to={"/admin"}>Admin</Link>
                <Link to={"/orders"}>Orders</Link>
                <Link to={"/menu"}>Menu</Link>
            </div>
        </div>
    );
};

export default Header;