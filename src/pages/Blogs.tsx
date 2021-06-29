import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";


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
    return (
        <>
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
        </>
    );
}