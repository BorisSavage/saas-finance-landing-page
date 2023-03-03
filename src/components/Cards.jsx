import React from "react";
import Double from "../assets/double.png";
import Single from "../assets/single.png";
import Triple from "../assets/triple.png";

const Cards = () => {
    return (
        <div className="w-full bg-slate-50 py-28 px-10">
            <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-3">
                <div className="my-4 flex w-full flex-col rounded-xl p-4 shadow-xl duration-500 ease-mb-sig-2 hover:scale-105">
                    <img
                        className="mx-auto w-20 bg-transparent"
                        src={Single}
                        alt="/"
                    />
                    <h2 className="py-8 text-center text-2xl font-bold">
                        Single user
                    </h2>
                    <p className="text-center text-4xl font-bold">149$</p>
                    <div className="text-center font-medium">
                        <p className="mx-8 mt-8 border-b py-2">
                            500 GB Storage
                        </p>
                        <p className="mx-8 border-b py-2">1 User Allowed</p>
                        <p className="mx-8 border-b py-2">Send up to 2 GB</p>
                    </div>
                    <button className="mx-auto my-6 w-[150px] rounded-lg bg-tealx px-6 py-3 font-bold text-black">
                        Start Trial
                    </button>
                </div>
                <div className="my-4 flex w-full flex-col rounded-lg bg-gradient-to-b from-white via-slate-50 to-teal-50 p-4 shadow-xl duration-500 ease-mb-sig-2 hover:scale-105">
                    <img
                        className="mx-auto w-20 bg-transparent"
                        src={Double}
                        alt="/"
                    />
                    <h2 className="py-8 text-center text-2xl font-bold">
                        Partnership
                    </h2>
                    <p className="text-center text-4xl font-bold">199$</p>
                    <div className="text-center font-medium">
                        <p className="mx-8 mt-8 border-b py-2">1 TB Storage</p>
                        <p className="mx-8 border-b py-2">3 Users Allowed</p>
                        <p className="mx-8 border-b py-2">Send up to 10 GB</p>
                    </div>
                    <button className="mx-auto my-6 w-[150px] rounded-lg bg-black px-6 py-3 font-bold text-tealx">
                        Start Trial
                    </button>
                </div>
                <div className="my-4 flex w-full flex-col rounded-xl p-4 shadow-xl duration-500 ease-mb-sig-2 hover:scale-105">
                    <img
                        className="mx-auto w-20 bg-transparent"
                        src={Triple}
                        alt="/"
                    />
                    <h2 className="py-8 text-center text-2xl font-bold">
                        Group Account
                    </h2>
                    <p className="text-center text-4xl font-bold">299$</p>
                    <div className="text-center font-medium">
                        <p className="mx-8 mt-8 border-b py-2">5 TB Storage</p>
                        <p className="mx-8 border-b py-2">10 Users Allowed</p>
                        <p className="mx-8 border-b py-2">Send up to 20 GB</p>
                    </div>
                    <button className="mx-auto my-6 w-[150px] rounded-lg bg-tealx px-6 py-3 font-bold text-black">
                        Start Trial
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cards;
