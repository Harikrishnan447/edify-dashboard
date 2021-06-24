import Icon from "@material-ui/core/Icon";

export default function Blogs() {
    return (
        <>
             <div className="flex flex-row justify-end mr-16 mt-8">
                <span className="font-bold mr-5">21 June, 2021</span>
                <Icon color="primary">search</Icon>
            </div>
            <div className="flex  justify-center mt-10">
                <div className="h-44 w-4/5 flex flex-col justify-center rounded-3xl bg-pink-200">
                    <span className="ml-10 font-bold text-3xl text-pink-400">What's on your mind...?</span>
                </div>
            </div>
        </>
    );
}