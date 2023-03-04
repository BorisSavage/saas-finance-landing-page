import React from "react";
import Typed from "react-typed";

const Hero = () => {
    return (
        <div className="text-slate-200">
            <div className="mx-auto mt-[-96px] flex h-screen w-full max-w-[800px] flex-col justify-center px-2 text-center">
                <p className="p-2 font-bold text-tealx">
                    GROWING WITH DATA ANALYTICS
                </p>
                <h1 className="text-4xl font-bold sm:text-6xl md:text-7xl">
                    Grow with data.
                </h1>
                <div className="flex items-center justify-center">
                    <p className="py-4 text-xl font-bold sm:text-3xl md:text-4xl">
                        Fast, flexible financing for&nbsp;
                    </p>
                    <Typed
                        className="text-xl font-bold sm:text-3xl md:text-4xl"
                        strings={["BTB", "BTC", "SAAS"]}
                        typeSpeed={161.8}
                        backSpeed={100}
                        loop
                    />
                </div>
                <p className="md:py-2 font-bold text-slate-500 text-lg">
                    Monitor your&nbsp;data analytics to increase revenue
                    for&nbsp;BTB, BTC & SAAS platforms.
                </p>
                <button className="my-6 md:my-2 mx-auto w-[200px] rounded-lg bg-tealx py-3 font-bold text-black">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Hero;
