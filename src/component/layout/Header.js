import React from "react";
import { Button } from "react-bootstrap";
import '../../css/Header.css';


const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();

function Header() {
    return (
        <header>
            <div className="topheader">
            <div className="logo">
                <img src="/logo_BVSC.2e992417.png" alt="Logo Company"/>
            </div>
            <div className="datetime">
                <span>{currentDate}</span>
                <span>{currentTime}</span>
            </div>
            <div className="running-text">
                <p>Dòng chữ chạy</p>
            </div>
            <div className="button">
                <Button className="btn btn-primary">Login</Button>
            </div>
            <div className="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button">Dropdown</button> 
            </div>
            </div>
        </header>
    )
}

export default Header;