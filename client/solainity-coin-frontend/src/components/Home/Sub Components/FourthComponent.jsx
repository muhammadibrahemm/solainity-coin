export const FourthComponent = () => {
    return(
        <div>
            <div className="w-3/4 mx-auto mt-8">
                <div className="flex flex-col gap-6">
                <p className="text-white text-center text-4xl ">TASK EXAMPLES</p>
                <p className="text-white text-center text-2xl "> Earn Coins by Completing Fun Math Activities!</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 ">
                    <div className="flex flex-col justify-center items-center">
                        <img src="Home Images/Group 898.png" alt=""  className="w-4/6"/>
                        <img src="Home Images/Group 900.png" alt="" className="w-5/6"/>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src="Home Images/Group 899.png" alt="" className="w-4/6"/>
                        <img src="Home Images/Group 900.png" alt="" className="w-5/6"/>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src="Home Images/Group 897.png" alt="" className="w-4/6"/>
                        <img src="Home Images/Group 900.png" alt="" className="w-5/6"/>
                    </div>
                </div>
            </div>
        </div>
    )
}