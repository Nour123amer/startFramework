import React from "react";
import { NavLink ,Link } from "react-router-dom";
import styles from "./Nav.module.css";
export default function Nav(){
    return(
        <>
        <nav className={` py-4 bg-sky-900/100 fixed left-0 right-0 top-0 ${styles.nav}" `}>
          <div className="container  flex justify-between">
            <h1 className="text-lg font-bold text-white "><Link to="/"> START FRAMEWORK </Link></h1>

            <ul className="flex gap-3 list-none ms-auto">
                <li className="white font-bold"><NavLink to="/" className="uppercase no-underline text-white">ABOUT</NavLink></li>
                <li className="white font-bold"><NavLink to="/portfolio" className="uppercase no-underline text-white">PORTFOLIO</NavLink></li>
                <li className="white font-bold"><NavLink to="/contact" className="uppercase no-underline text-white">CONTACT</NavLink></li>
            </ul>
            </div>
        </nav>
        </>
    )
}