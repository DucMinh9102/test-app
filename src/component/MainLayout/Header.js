import React from "react";
import { Button } from "react-bootstrap";
import DateTime from '../../service/datetime'
import '../../css/Header.css';



function Header() {
    return (
        <header>
            <div className="topHeader">
            <div className="logo">
                <img src="/logo_BVSC.2e992417.png" alt="Logo Company"/>
            </div>
            <DateTime />
            <div className="running-text">
                <p>Dòng chữ chạy</p>
            </div>
            <div className="button">
                    <Button type="submit" className="btn btn-primary">Logout</Button>   
            </div>
            <div className="dropDown">
            <button class="btn btn-secondary dropdown-toggle" type="button">Dropdown</button> 
            </div>
            </div>
            <div className="botHeader">
                <div className="searchBox">

                </div> 
                <div className="listMenu">
                    <button className="btnHose">HOSE</button>
                    <button className="btnHnx">HNX</button>
                </div>
            </div>
        </header>
    )
}

export default Header;