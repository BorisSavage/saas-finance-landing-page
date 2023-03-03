import React from "react";

const Newsletter = () => {
    return (
        <div className="w-full py-16 px-10 text-slate-200">
            <div className="mx-auto grid max-w-[1240px] lg:grid-cols-3 ">
                <div className="lg:col-span-2">
                    <h1 className="py-2 text-2xl font-bold sm:text-3xl md:text-4xl lg:mt-9 lg:pr-10">
                        Want tips & tricks to optimize your&nbsp;flow?
                    </h1>
                    <p>Sign up to our newsletter and stay up to date!</p>
                </div>
                <div className="my-4">
                    <div className="flex w-full flex-col items-center justify-between sm:flex-row">
                        <input
                            className="flex w-full rounded-lg p-3 text-black"
                            type="email"
                            placeholder="Enter your Email"
                        />
                        <button className="my-6 mx-auto w-[200px] rounded-lg bg-tealx py-3 font-bold text-black sm:ml-4">
                            Notify Me!
                        </button>
                    </div>
                    <p>
                        We care about the protection of your data. Read our{" "}
                        <span className="font-medium text-tealx">
                            Privacy Policy
                        </span>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
