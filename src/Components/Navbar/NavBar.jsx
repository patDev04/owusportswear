import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../Images/logo-black.svg";
import InformationStrip from "../../Components/InformationStrip/InformationS";
import { BiMenu } from "react-icons/bi";
import NavData from "../../Data/MenuData";
// import { useGlobalContext } from "../../Data/content";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import SideBar from "./../Sidebar/SideBar";

const { Search } = Input;

function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
    console.log("close");
  };

  // const displaySubMenu = (e) => {
  //   const page = e.target.textContent;
  //   const tempBtn = e.target.getBoundingClientRect();
  //   const center = (tempBtn.left + tempBtn.right) / 2;
  //   openSubMenu(page, { center });
  // };

  // const handleSubMenu = (e) => {
  //   if (!e.target.classList.contains("nav__mainNav-link")) {
  //     closeSubMenu();
  //   }
  // };

  return (
    <nav className="nav">
      <InformationStrip />

      <div className="nav__mainNav">
        <SideBar closeSidebar={closeSidebar} isSidebarOpen={isSidebarOpen} />
        <div className="nav__mainNav-hamburger" onClick={openSidebar}>
          <BiMenu />
        </div>
        <div className="nav__mainNav-con">
          <img className="nav__mainNav-logo" src={logo} alt="logo" />
          <ul className="nav__mainNav-menu">
            {NavData.map((data, idx) => {
              return (
                <li key={idx} className="nav__mainNav-item">
                  <NavLink to={data.url} className="nav__mainNav-link">
                    {data.page}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="nav__mainNav-icon-con">
          <Search
            placeholder="search product"
            // onSearch={onSearch}
            style={{ width: 400 }}
            className="seachInput"
          />
          <Link to={"/auth/login"}>
            <AiOutlineUser className="nav__mainNav-icons" />{" "}
          </Link>
          <AiOutlineShoppingCart className="nav__mainNav-icons" />
          <span className="nav__mainNav-badge">
            <sup>50</sup>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
