import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";

export default function Blogs() {
    return (
        
        <>
           <div className="px-3 md:px-2">
            <div className="grid md:grid-flow-col md:grid-cols-3 gap-4 font-poppins">

                <Link to="/blog-details">
                    <div className="max-w-md py-4 px-4 bg-blue-200 rounded-lg h-44 overflow-hidden cursor-pointer" >
                        <div>
                            <p className="flex justify-between">
                                <span className="font-normal">
                                12/10/2021
                                </span>
                                <span className="flex ml-auto gap-3">
                                <Icon className="text-white" color="primary" title="Delete this article">deleteOutlineOutlined</Icon>
                                <Icon color="primary" title="review">note_alt</Icon>
                                </span>
                                    </p>
                            <h2 className="text-gray-800 text-base font-bold mt-4">Design Tools</h2>
                            <p className="mt-2 text-sm text-gray-600 max-h-16 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt labore quam recusandae!
                            </p>
                        </div>
                        {/* <div className="flex justify-end mt-4">
                            <a href="#" className="text-xl font-medium text-indigo-500">John Doe</a>
                        </div> */}
                    </div>
                </Link>
                    <div className="max-w-md py-4 px-4 bg-blue-200 rounded-lg cursor-pointer">
                        <div>
                            <p className="flex justify-between">
                                <span className="font-normal">
                                12/10/2021
                                </span>
                                <span className="flex ml-auto gap-3">
                                <Icon color="primary" title="Delete this article">deleteOutlineOutlined</Icon>
                                <Icon color="primary">note_alt</Icon>
                                </span>
                                    </p>
                            <h2 className="text-gray-800 text-base font-bold mt-4 max-h-16 overflow-hidden">Design Tools</h2>
                            <p className="mt-2 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error,!</p>
                        </div>
                        {/* <div className="flex justify-end mt-4">
                            <a href="#" className="text-xl font-medium text-indigo-500">John Doe</a>
                        </div> */}
                    </div>
                    <div className="max-w-md py-4 px-4 bg-blue-200 rounded-lg cursor-pointer">
                        <div>
                            <p className="flex justify-between">
                                <span className="font-normal">
                                12/10/2021
                                </span>
                                <span className="flex ml-auto gap-3">
                                <Icon color="primary" title="Delete this article">deleteOutlineOutlined</Icon>
                                <Icon color="primary">note_alt</Icon>
                                </span>
                                    </p>
                            <h2 className="text-gray-800 text-base font-bold mt-4 max-h-16 overflow-hidden">Design Tools</h2>
                            <p className="mt-2 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error,!</p>
                        </div>
                        {/* <div className="flex justify-end mt-4">
                            <a href="#" className="text-xl font-medium text-indigo-500">John Doe</a>
                        </div> */}
                    </div>
                </div>
                </div>
                        
          
        </>
            );
}