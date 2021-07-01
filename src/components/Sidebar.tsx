import { useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import logo from './../assets/img/elogo.png';
import Navbar from "./Navbar";

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState("-left-64");
    return (
        <>
         <Navbar
                showSidebar= {showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <div
                className={`h-screen fixed top-0 md:left-0 ${showSidebar} flex-row flex-nowrap shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex justify-center">
                    <img src={logo} className=" w-36 mt-1 mb-4" alt="logo" />
                </div>
                <div className="flex-col items-stretch min-h-full flex-nowrap py-8 relative">
                    <div className="flex flex-col">
                        <ul className="flex-col min-w-full flex list-none font-poppins">
                            <li className="rounded-lg mb-4">
                                <NavLink
                                    to="/"
                                    exact
                                    className="flex items-center gap-8 text-sm text-grey-200 font-base font-medium tracking-wide px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr text-black-200 bg-grey-100"
                                >
                                    <Icon color="primary">dashboard</Icon>
                                        Dashboard
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/blogs"
                                    className="flex items-center gap-8 text-sm text-grey-200 font-base font-medium tracking-wide px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr text-black-200 bg-grey-100"
                                >
                                    <Icon color="primary">note_alt</Icon>
                                  
                                        Blogs
                                 
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                <NavLink
                                    to="/leave"
                                    className="flex items-center gap-8 text-sm text-grey-200 font-base font-medium tracking-wide px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr text-black-200 bg-grey-100"
                                >
                                    <Icon color="primary">description</Icon>
                                  
                                        Request a leave
                                  
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                <NavLink
                                    to="/events"
                                    className="flex items-center gap-8 text-sm text-grey-200 font-base font-medium tracking-wide px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr text-black-200 bg-grey-100"
                                >
                                    <Icon color="primary">upcoming</Icon>
                                  
                                        Holidays/Events
                                   
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                <NavLink
                                    to="/timesheet"
                                    className="flex items-center gap-8 text-sm text-grey-200 font-base font-medium tracking-wide px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr text-black-200 bg-grey-100"
                                >
                                    <Icon color="primary">lock_clock</Icon>
                                  
                                        Timesheet
                                 
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-4">
                                <NavLink
                                    to="/employees"
                                    exact
                                    className="flex items-center gap-8 text-sm text-grey-200 font-base font-medium tracking-wide px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr text-black-200 bg-grey-100"
                                >
                                    <Icon color="primary">people_alt</Icon>
                                        Employees
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
