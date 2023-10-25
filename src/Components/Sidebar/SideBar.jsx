import React from "react";
import "./Sidebar.scss";
import SubLinks from "../../Data/MenuData";
import SidebarItems from "./SidebarItems";
import logo from "../../Images/logo-white.svg";
import { GrFormClose } from "react-icons/gr";

function SideBar({ isSidebarOpen, closeSidebar }) {
  return (
    <div className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar__con">
        <img className="sidebar__logo" src={logo} alt="logo" />
        <span>
          <GrFormClose className="sidebar__close-btn" onClick={closeSidebar} />
        </span>
      </div>
      <div className="sidebar__header">
        <p>+200 582 7425</p>
        <p>+200 294 5006</p>
      </div>
      <div className="sidebar__link-container">
        {SubLinks.map((items, idx) => {
          return <SidebarItems key={idx} items={items} className="sidebar " />;
        })}
      </div>
    </div>
  );
}

export default SideBar;
