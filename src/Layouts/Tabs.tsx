import { faCompass, faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import { CircleUser, Compass, Heart } from "lucide-react";

const Tabs: FC = () => {

    return (
        <div>
            <section className="sticky top-0 z-10">
                <Nav/>
            </section>
            <section>
                <div className="bg-gray-50 pb-[60px] sm:pt-5 md:pb-0 sm:bg-white dark:bg-dark-main">
                    <Outlet/>
                </div>
            </section>
            <section>
                <div className="z-20 flex justify-between items-center fixed h-[60px] bottom-0 right-0 left-0 px-10 py-3 bg-white border-t border-gray-100 sm:hidden dark:bg-dark-second dark:border-0">
                    <NavLink 
                        to="/" 
                        className={({isActive}) =>
                            isActive
                            ? 'text-color-base'
                            : 'text-gray-400'
                        }
                    >
                        <div className="flex justify-center pb-1">
                            <Compass/>
                        </div>
                        <div className="flex justify-center">
                            <p className="text-xs">Explore</p>
                        </div>
                    </NavLink>
                    <NavLink 
                        to="/wishlist" 
                        className={({isActive}) =>
                            isActive
                            ? 'text-color-base'
                            : 'text-gray-400'
                        }
                    >
                        <div className="flex justify-center pb-1">
                            <Heart/>
                        </div>
                        <div className="flex justify-center">
                            <p className="text-xs">Wishlist</p>
                        </div>
                    </NavLink>
                    <NavLink 
                        to="/profile" 
                        className={({isActive}) =>
                            isActive
                            ? 'text-color-base'
                            : 'text-gray-400'
                        }
                    >
                        <div className="flex justify-center pb-1">
                            <CircleUser/>
                        </div>
                        <div className="flex justify-center">
                            <p className="text-xs">Profile</p>
                        </div>
                    </NavLink>
                </div>
            </section>
        </div>
    ) 
}

export default Tabs;