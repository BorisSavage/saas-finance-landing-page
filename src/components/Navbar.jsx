import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
        //document.body.classList.toggle("overflow-hidden");
    };

    return (
        <div className="mx-auto flex h-24 max-w-[1240px] items-center justify-between px-10 text-slate-200">
            <h1 className="w-full text-3xl font-bold text-tealx">REACC.</h1>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
            <div
                onClick={handleNav}
                className=" absolute left-10 top-20 z-10 md:hidden"
            >
                <AiOutlineMenu
                    size={30}
                    className={
                        (!nav ? "opacity-100" : "opacity-0") +
                        " text-teal-500 shadow-xl transition-opacity duration-1000 ease-mb-sig-2"
                    }
                />
            </div>
            <div
                className={nav ? "fixed top-0 right-0 h-full w-[60%]" : ""}
                onClick={handleNav}
            ></div>
            <div
                className={
                    "fixed" +
                    (nav ? " left-[0] " : " left-[-40%] ") +
                    "top-0 z-20 h-full w-[40%] border-r border-r-teal-900 bg-neutral-900 duration-500 ease-mb-sig-2"
                }
            >
                <h1 className="m-4 mt-[30px] w-full text-3xl font-bold text-tealx">
                    REACC.
                </h1>
                <ul className="p-4 uppercase">
                    <li className="border-b border-teal-800 p-4">Home</li>
                    <li className="border-b border-teal-800 p-4">Company</li>
                    <li className="border-b border-teal-800 p-4">Resources</li>
                    <li className="border-b border-teal-800 p-4">About</li>
                    <li className="p-4">Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
