import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Copyright from "../Copyright/Copyright";


export default function Layout(){
    return(
        <>
        <Nav />
        <Outlet />
        <Footer/>
        <Copyright />
        </>
    )
}