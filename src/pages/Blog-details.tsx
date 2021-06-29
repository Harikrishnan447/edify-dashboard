import Icon from "@material-ui/core/Icon";

export default function BlogDetails() {
    return (
        <>
           <div className="px-3 md:px-2 font-poppins">
           <div className="w-full rounded bg-white px-6 py-6">
           <div className="font-semibold tracking-wide text-xl mb-2 gap-4 flex justify-between items-center">
               <div className="flex gap-8 items-center">
               <span>Tailwind CSS V2.2</span>
               <span className="font-normal text-sm">Friday, 01 June 2021</span>
               </div>
               <div className="inline-flex rounded border-solid border-2 border-grey-300">
                  <button className=" text-sm  text-primary  py-2 px-4 " title="Delete this article">
                  <Icon>delete</Icon>
                  </button>
                  <button className="text-sm  py-2 px-4 " title="Edit this article">
                  <Icon>edit</Icon>
                  </button>
                  <button className="text-sm  py-2 px-4" title="Approve">
                  <Icon>check</Icon>
                  </button>
              </div>
            </div>
            <div>
                <span className="font-normal text-sm text-grey-200">
                    Written by:
                </span>
                <span className="font-normal text-base text-black-200 ml-2">
                    Jose Mathew
                </span>
            </div>
      <img className="rounded mt-5 mb-4"  src="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg" alt="Mountain"/>
      <div className="">
        <p className="text-gray-500 text-base mt-3 tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
        <p className="text-gray-500 text-base mt-3 tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p> <p className="text-gray-500 text-base mt-3 tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p> <p className="text-gray-500 text-base mt-3 tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
    </div> 
     </div>
                        
          
        </>
            );
}