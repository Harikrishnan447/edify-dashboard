
// import Icon from "@material-ui/core/Icon";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Icon } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import profileImage from './../assets/img/team-1-800x800.jpg';



export default function Navbar(e:any) {
    // console.log(e)
    var setShowSidebar:any = e.setShowSidebar;
    var showSidebar:any = e.showSidebar;
    const location = useLocation().pathname;
    return (
        <>
    <nav className="bg-gray-100 md:ml-64 py-6 px-3 fixed max-w-full left-0 right-0">
            <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
                <div className="md:hidden">
                    <button className="text-white text-base"
                        onClick={() => setShowSidebar('left-0')}
                    >
                        <Icon color="primary">menu</Icon>
                    </button>
                    <div
                        className={`absolute top-2 md:hidden ${
                            showSidebar === 'left-0' ? 'left-64' : '-left-64'
                        } z-50 transition-all duration-300`}
                    >
                        <button className=""  onClick={() => setShowSidebar('-left-64')} >
                        <Icon color="primary">close</Icon>
                        </button>
                    </div>
                </div>
                <div className="flex justify-between items-center w-full">
                    <h4 className="capitalize text-sm tracking-wide font-medium font-poppins sm:mr-4">
                        {location === '/'
                            ? 'dashboard'
                            : location.toLowerCase().replace('/', '')}
                    </h4>
                    <div className="flex gap-8 items-center">
                    <time className="capitalize text-sm tracking-wide font-medium font-poppins">June 17, 2021</time>
                        <div className="w-12">
                        <img className="rounded-full" src={profileImage}/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}
