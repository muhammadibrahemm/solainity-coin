export const FooterComponent = () => {
    return (
        <footer className="w-full bg-black text-white py-10 px-6 lg:px-20">
            <div className="flex flex-col lg:flex-row justify-between">
                {/* Navigation Section */}
                <div className="mb-8 lg:mb-0">
                    <h3 className="text-lg font-bold mb-4">Navigation</h3>
                    <ul className="space-y-2">
                        <li>Home</li>
                        <li>Feature</li>
                        <li>Template</li>
                        <li>Document</li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="mb-8 lg:mb-0">
                    <h3 className="text-lg font-bold mb-4">Contact</h3>
                    <ul className="space-y-2">
                        <li>+92179943206</li>
                        <li>www.solainity-coin.com</li>
                        <li>Uahmadofficial1@gmail.com</li>
                    </ul>
                </div>

                {/* Email Section */}
                <div className="lg:w-1/3">
                    <h3 className="text-lg font-bold mb-4">Email</h3>
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Enter Email Here"
                            className="w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black py-3 pl-4 pr-16 text-blue-400 rounded-lg focus:outline-none"
                        />
                        <button className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-blue-600 p-3 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 text-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 12h14M12 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};
