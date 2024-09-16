import { faCompass, faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CircleUser, Compass, Heart } from "lucide-react";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { NavLink } from "react-router-dom";

interface Props {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar: FC<Props> = ({ isOpen, setIsOpen }) => {
    const links = [
        {name: 'Explore', icon: <Compass size={22} />, to: '/'},
        {name: 'Wishlist', icon: <Heart size={22} />, to: '/wishlist'},
        {name: 'Profile', icon: <CircleUser size={22} />, to: '/profile'}
    ]

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div
            className={`fixed inset-y-0 left-0 right-0 z-30 bg-white shadow-md transform dark:bg-dark-main 
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                transition-transform duration-300 ease-in-out`
            }
        >
            <div className="flex items-center justify-between p-4 border-b">
                <span className="text-lg font-semibold dark:text-white">More</span>
                <button
                    className="text-gray-600 hover:text-gray-900 focus:outline-none dark:text-white"
                    onClick={toggleSidebar}
                >
                    <FontAwesomeIcon icon={faXmark} size="xl"/>
                </button>
            </div>
            <nav className="flex flex-col p-4 gap-2">
                {links.map((link, index) => (
                    <NavLink
                        key={index}
                        to={link.to}
                        className="p-2 text-gray-700 rounded hover:bg-gray-100"
                        onClick={toggleSidebar}
                    >
                        <div className="grid grid-cols-10">
                            <div className="dark:text-white">{link.icon}</div>
                            <div className="col-start-2 col-span-10 dark:text-white">{link.name}</div>
                        </div>
                    </NavLink>
                ))}
            </nav>
        </div>
    )
}

export default Sidebar;