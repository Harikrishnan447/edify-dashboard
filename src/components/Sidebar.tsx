import { useState } from 'react';
import {NavLink} from 'react-router-dom'
import logo from '../edify-logo.png'
import  Icon  from '@material-ui/core/Icon';

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    return (
        <>
            <div
                className={`h-screen fixed top-0 md:left-0 flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-1/5 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex justify-center">
                    <img src={logo} className="h-14 w-48 mt-6 mb-4" alt="logo" />
                </div>
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">

                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />

                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg mb-4">
                                <NavLink
                                    to="/"
                                    exact
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr bg-blue-200 text-white shadow-md"
                                >
                                    <Icon color="primary">dashboard</Icon>
                                    <p className="ml-8 text-lg font-semibold font-mono">Dashboard</p>
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/blogs"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr bg-blue-200 text-white shadow-md"
                                >
                                    <Icon color="primary">note_alt</Icon>
                                    <p className="ml-8 text-lg font-semibold font-mono">Blogs</p>
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 ">
                                <NavLink
                                    to="/leave"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr bg-blue-200 text-white shadow-md"
                                >
                                    <Icon color="primary">description</Icon>
                                    <p className="ml-8 text-lg font-semibold font-mono">Request a leave</p>
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                <NavLink
                                    to="/events"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr bg-blue-200 text-white shadow-md"
                                >
                                    <Icon color="primary">upcoming</Icon>
                                    <p className="ml-8 text-lg font-semibold font-mono">Holidays/Events</p>
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                <NavLink
                                    to="/timesheet"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr bg-blue-200 text-white shadow-md"
                                >
                                    <Icon color="primary">lock_clock</Icon>
                                    <p className="ml-8 text-lg font-semibold font-mono">Timesheet</p>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
