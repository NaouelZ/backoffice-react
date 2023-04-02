import React, { useState } from "react";
import css from './Sidebar.module.css';
import { FaTasks } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import {RiDashboardFill,RiDashboardLine } from "react-icons/ri";

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState("dashboard");

    const handleClick = (item) => {
      setActiveItem(item);
    };

    return (
        <div className={css.container}>

            <img src="./logo.png" alt="logo" className={css.logo} />


            <div className={css.menu}>
                <NavLink to="dashboard" className={activeItem !== "dashboard" ? css.item : css.active} title={"Dashboard"}  onClick={() => handleClick("dashboard")}>
                    {activeItem === "dashboard" ? <RiDashboardLine size={25} /> : <RiDashboardFill size={25} />}
                </NavLink>
                <NavLink
                    to="board"
                    title="Calendar"
                    className={activeItem !== "trello" ? css.item : css.active}
                    onClick={() => handleClick("trello")}
                >
                   <FaTasks size={25} />
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar