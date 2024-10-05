export const FirstComponent = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-6 bg-black relative overflow-hidden">
            {/* Floating coins */}
            <img src="Home Images/Bitcoin-1.png" alt="coin" className="absolute top-10 left-10 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 animate-bounce" />
            <img src="Home Images/Etherium-2-1.png" alt="coin" className="absolute top-20 right-10 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 animate-bounce" />
            <img src="Home Images/Etherium-2-1.png" alt="coin" className="absolute bottom-10 left-16 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 animate-bounce" />
            <img src="Home Images/Bitcoin-1.png" alt="coin" className="absolute bottom-16 right-16 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 animate-bounce" />
            <img src="Home Images/Vector-2.png" alt="coin" className="absolute bottom-16 right-16 w-20 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 animate-bounce" />

            {/* Main text */}
            <div className="text-white flex flex-col justify-center items-center text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                <p className="font-bold">Earn Coins While</p>
                <p className="font-bold">You Learn</p>
            </div>

            {/* Subtext */}
            <div className="text-cyan-400 flex flex-col justify-center items-center text-center sm:text-base md:text-lg lg:text-xl xl:text-2xl ">
                <p>Complete engaging tasks and watch your coin balance</p>
                <p>grow. Redeem coins for exciting rewards</p>
            </div>

            {/* Button */}
            <p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-500 transition duration-300">
                    Start Earning Now
                </button>
            </p>
        </div>
    );
};
