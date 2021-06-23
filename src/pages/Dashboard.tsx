
export default function Dashboard() {
    return (
        <>
             <div className="flex flex-row justify-end mr-16 mt-8">
                  <span className="font-bold mr-5">21 June, 2021</span>
                  <span className="material-icons-outlined">search</span>
                </div>
                <div className="flex  justify-center mt-10">
                  <div className="h-44 w-4/5 flex flex-col justify-center rounded-3xl bg-pink-200">
                      <span className="ml-10 font-bold text-3xl text-pink-400">Welcome back ....!</span>
                      <span className="ml-10 font-bold mt-6 text-gray-600">You've learned 80% of your goal this week!<br></br>Keep it up and improve your results</span>
                  </div>
            </div>
        </>
    );
}