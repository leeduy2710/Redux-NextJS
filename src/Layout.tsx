import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

const Layout = () => {
    return (
        <div className="layout-wrapper">
            <SideBar />
            <div className="right_side">
                <Header />
                <Body />
            </div>
        </div>
    );
};

export default Layout;