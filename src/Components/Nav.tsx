import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "./Sidebar";
import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import { Menu, Moon, Search, Sun } from "lucide-react";
import SearchButton from "./SearchButton";

const Nav: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { isDarkMode, toggleTheme } = useTheme();

    const links = [
        {name: 'Home', to: '/'},
        {name: 'Wishlist', to: '/wishlist'},
        {name: 'Profile', to: '/profile'}
    ]

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div className="px-5 py-3 sm:py-4 sm:px-12 lg:px-32 border-b border-gray-200 bg-white dark:bg-dark-main dark:border-dark-second">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-color-base text-2xl font-bold">Travelapp<span className="text-yellow-400">.</span></p>
                    </div>
                    <div className="hidden lg:block">
                        <div className="flex gap-7">
                            {links.map((link, index) => (
                                <NavLink 
                                    to={link.to}
                                    key={index}
                                    className="hover:text-color-base dark:text-white dark:hover:text-color-base"
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex gap-5 items-center">
                            <div 
                                onClick={toggleTheme}
                                className="cursor-pointer dark:text-white"
                            >
                                {isDarkMode 
                                ? (<Sun/>) 
                                : (<Moon/>)}
                            </div>
                            <div className="border w-[250px] rounded-full dark:border-dark-second">
                                <SearchButton/>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 md:hidden dark:text-white">
                        <div 
                            className="p-2"
                            onClick={toggleTheme}
                        >
                            {isDarkMode 
                            ? (<Sun size={26}/>) 
                            : (<Moon size={26}/>)}
                        </div>
                        <div 
                            className="p-2 dark:text-white"
                            onClick={toggleSidebar}
                        >
                            <Menu size={28}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;