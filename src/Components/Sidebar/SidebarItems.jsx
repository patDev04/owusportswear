import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiCaretDown } from "react-icons/bi";

function SidebarItems({ items }) {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  if (items.links) {
    return (
      <div className={openSubMenu ? "sidebar-items open" : "sidebar-items"}>
        <div
          className="sidebar-title"
          onClick={() => {
            setOpenSubMenu(!openSubMenu);
          }}
        >
          {items.page}
          <BiCaretDown className="toggle-btn" />
        </div>
        <div className="sidebar-content">
          {items.links.map((sub, idx) => {
            return (
              <Link to={sub.url} key={idx} className="sidebar-link">
                {sub.label}
              </Link>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="sidebar-items open">
        <div className="sidebar-title">
          <span>{items.page}</span>
        </div>
      </div>
    );
  }
}

export default SidebarItems;
