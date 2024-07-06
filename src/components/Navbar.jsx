import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        { id: 1, link: 'Home' },
        { id: 2, link: 'Skills' },
        { id: 3, link: 'Experience' },
        { id: 4, link: 'Project' },
        { id: 5, link: 'Contact' },
    ];

    return (
        <div className=" text-white py-4 md:py-14">
            <div className="max-w-screen-lg mx-auto flex justify-between items-center px-4 md:px-0">
                <div>
                    <h1 className="text-5xl font-bold font-signature">Asmita</h1>
                </div>

                <ul className="hidden md:flex space-x-8">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="cursor-pointer capitalize font-normal text-lg hover:text-gray-400 transition duration-200"
                        >
                            {link}
                        </li>
                    ))}
                </ul>

                <div
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer md:hidden"
                >
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>

                {nav && (
                    <ul className="flex flex-col items-center absolute top-16 left-0 right-0 bg-gray-800 md:hidden">
                        {links.map(({ id, link }) => (
                            <li
                                key={id}
                                className="py-2 px-4 text-xl text-white hover:bg-gray-700 transition duration-200"
                            >
                                {link}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Navbar;


