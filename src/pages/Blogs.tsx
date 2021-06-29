import Icon from "@material-ui/core/Icon";
import { useState } from "react";
import { Link } from "react-router-dom";
import ImageUploader from 'react-images-upload';

const blogs = [
    {
        title: "😃 William",
        date:"28/06/2021",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt labore quam recusandae!"
    },
    {
        title: "😃 Chris",
        date:"29/06/2021",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt labore quam recusandae!"
    },
    {
        title: " 😃 Rose",
        date:"30/06/2021",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt labore quam recusandae!"
    }
]

export default function Blogs() {
    const [showSidebar, setShowSidebar] = useState("-left-80");

    function onDrop(picture : any) {
        console.log(picture);
    }

    return (
        <>
        <div className="flex justify-end px-4 md:px-12">
            <button className="text-white text-base"
                onClick={() => setShowSidebar('right-0')}
            >
                <Icon color="primary">edit</Icon>
            </button>
        </div>
        <div className="px-3 md:px-2">
            <div className="grid md:grid-flow-col md:grid-cols-3 gap-4 font-poppins">
                {blogs.map((blog, index) => (
                <div key={index}>
                    <Link to="/blog-details">
                        <div className="max-w-md py-4 px-4 bg-blue-200 rounded-lg h-44 overflow-hidden cursor-pointer" >
                            <div>
                                <p className="flex justify-between">
                                    <span className="font-normal">{blog.date}</span>
                                    <span className="flex ml-auto gap-3">
                                        <Icon className="text-white" color="primary" title="Delete this article">deleteOutlineOutlined</Icon>
                                        <Icon color="primary" title="review">note_alt</Icon>
                                    </span>
                                </p>
                                <h2 className="text-gray-800 text-base font-bold mt-4">{blog.title}</h2>
                                <p className="mt-2 text-sm text-gray-600 max-h-16 overflow-hidden">{blog.content}</p>
                            </div>
                        </div>
                    </Link>
                </div>
                ))}
            </div>
        </div>
        <div
                className={`h-screen fixed top-0 md:right-0 ${showSidebar} flex-row flex-nowrap shadow-xl bg-white w-80 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap pt-4 relative">
                    <div className="flex justify-end">
                        <button className=""  onClick={() => setShowSidebar('-left-80')} >
                            <Icon color="primary">close</Icon>
                        </button>
                    </div>
                    <div className="mt-10">
                        <span className="text-lg font-bold font-poppins">Create a blog</span>
                    </div>
                    <div className="flex flex-col mt-8">
                        <label className="block text-gray-700 text-sm font-semibold font-poppins mb-2">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Add a title"></input>
                        <label className="block text-gray-700 text-sm font-semibold font-poppins mb-2 mt-4">
                            Cover Image
                        </label>
                        <ImageUploader
                            withIcon={true}
                            buttonText='Choose images'
                            onChange={onDrop}
                            maxFileSize={5242880}
                            accept="jpg/ gif/ png"
                        />
                        <label className="block text-gray-700 text-sm font-semibold font-poppins mb-2 mt-4">
                            Content
                        </label>
                        <textarea className="resize h-32 rounded-md shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Add a content.."></textarea>
                        <button className="w-1/2 bg-red-400 hover:bg-red-600 text-white font-semibold font-poppins mt-10 py-2 px-4 rounded-full">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}