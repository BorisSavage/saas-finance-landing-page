import React from "react";
import Laptop from "../assets/laptop.png";

const Analytics = () => {
    return (
        <div className="bg-slate-50 py-16 px-10">
            <div className="mx-auto grid max-w-[1240px] md:grid-cols-2">
                <img className="mx-auto my-4 w-[500px]" src={Laptop} alt="/" />
                <div className="flex flex-col justify-center">
                    <p className="font-bold text-teal-500">
                        DATA ANALYTICS DASHBOARD
                    </p>
                    <h1 className="py-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                        Manage Data Analytics Centrally
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui accusamus dolore consequuntur nam corrupti
                        repudiandae numquam suscipit iusto aperiam eos mollitia,
                        assumenda, illum quisquam facilis, velit animi hic magni
                        id.
                    </p>
                    <button className="my-6 mx-auto w-[200px] rounded-lg bg-black py-3 font-bold text-tealx md:mx-0">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
