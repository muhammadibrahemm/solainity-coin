export const SecondComponent = () => {
    return (
        <div className="w-full sm:w-4/5 lg:w-3/5 bg-dark-teal p-4 mx-auto rounded-md">
            <h1 className="text-white text-2xl sm:text-3xl lg:text-5xl text-center py-2">
                Benefits
            </h1>
            <div className="flex flex-col md:flex-row md:justify-between justify-center items-center px-4 sm:px-8 gap-8 md:gap-4">
                <div className="flex flex-col gap-3 text-white text-sm sm:text-base lg:text-lg">
                    <p className="relative pl-4 before:content-['•'] before:absolute before:left-0">Earn coins for completion</p>
                    <p className="relative pl-4 before:content-['•'] before:absolute before:left-0">Redeem coins for rewards you'll love</p>
                    <p className="relative pl-4 before:content-['•'] before:absolute before:left-0">Fun and engaging activities</p>
                    <p className="relative pl-4 before:content-['•'] before:absolute before:left-0">User-friendly platform</p>
                    <p className="relative pl-4 before:content-['•'] before:absolute before:left-0">Safe and secure environment</p>
                    <p className="relative pl-4 before:content-['•'] before:absolute before:left-0">Boost Your Math Skills</p>
                </div>
                <div className="flex flex-col gap-3 text-white text-sm sm:text-base lg:text-lg mt-4 lg:mt-0">
                    <p className="relative pl-4 before:content-['•'] before:absolute before:left-0">Track Your Progress</p>
                    <p className="relative pl-4 before:content-['•'] before:absolute before:left-0">Compete with Friends</p>
                    <p className="relative pl-4 before:content-['•'] before:absolute before:left-0">Learn at Your Pace</p>
                    <p className="relative pl-4 before:content-['•'] before:absolute before:left-0">Unlock onus Content</p>
                    <p className="relative pl-4 before:content-['•'] before:absolute before:left-0">Wide Variety of Tasks</p>
                    <p className="relative pl-4 before:content-['•'] before:absolute before:left-0">Real-World Applications</p>
                </div>
            </div>
        </div>
    );
};
