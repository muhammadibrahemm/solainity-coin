export const SevenComponent = () => {
    return (
        <>
            <div className="w-5/6 mx-12 flex flex-col lg:flex-row justify-center items-center lg:items-start mt-24 ">
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-6 lg:mb-0">
                    <img src="Home Images/icons.png" alt="Gift Icon" className="w-2/4" />
                </div>
                <div className="w-full lg:w-1/2 text-white text-center lg:text-left flex flex-col gap-4">
                    <div className="text-4xl lg:text-5xl font-bold mb-4 flex flex-col gap-2">
                        <p>Ready to Sharpen Your</p>
                        <p>Math Skills & Earn</p>
                        <p>Rewards?</p>
                    </div>
                    <p className="text-lg lg:text-xl mb-6">
                        Sign up for free today and unlock a world of engaging math activities and exciting rewards!
                    </p>
                    <p>
                        <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-all">
                            Get Started
                        </button>
                    </p>
                </div>
            </div>
        </>
    );
};
