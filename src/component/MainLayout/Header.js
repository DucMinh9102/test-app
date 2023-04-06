import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NavDropdown, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import handleCloseDropdown from '../../service/closeDropdown';
import { logout } from '../Redux/Action/loginAction';
import DateTime from '../../service/datetime';
import '../../css/Header.css';

function Header() {
    const [dropdownTitle, setDropdownTitle] = useState("HOSE");
    const location = useLocation();
    const dispatch = useDispatch();  
    const handleLogout = () => {
          localStorage.removeItem('persist:root');      
          dispatch(logout());
        };

    useEffect(() => {
        if (location.pathname === "/hose") {
            setDropdownTitle("HOSE");
        } else if (location.pathname === "/vn30") {
            setDropdownTitle("VN30");
        } else {
            setDropdownTitle("HOSE");
        }
    }, [location]);

    const handleClick = () => {
        handleCloseDropdown();
      }

    return (
        <header>
            <div className="topHeader">
            <div className="logo">
                <img src="/logo_BVSC.2e992417.png" alt="Logo Company"/>
            </div>
            <DateTime />
            <div className="running-text">
                <div className="a">Dòng chữ chạy</div>
                <div className="b">KKK</div>
                <div className="c">HHH</div>
                <div className="d">MMM</div>
            </div>
            <div className="button">
                    <Button onClick={handleLogout} className="btn btn-primary">Logout</Button>   
            </div>
            <div className="userDropdown">
                <button class="" type="button">Dropdown</button>
                </div>
            </div>
            <div className="botHeader">
                <div className="searchBox">
                    <input placehoder="Search for symbol" spellCheck={false} />
                </div> 
                
                <NavDropdown title={dropdownTitle} className="dropdown">
                    <NavDropdown.Item className="dropdown-item" onClick={handleClick}>
                    <NavLink to="/hose">HOSE</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="dropdown-item" onClick={handleClick}>
                    <NavLink to="/vn30">VN30</NavLink>
                    </NavDropdown.Item>
                </NavDropdown>
                
                <Link to="/hnx">
                <button className="btnHnx">HNX</button>
                </Link>
            </div>
        </header>
    )
}

export default Header;