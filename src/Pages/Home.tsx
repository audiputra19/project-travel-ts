import { FC } from "react";
import PopularDestination from "../Components/PopularDestination";
import SearchButton from "../Components/SearchButton";
import ExploreSlider from "../Components/ExploreSlider";
import { useNavigate } from "react-router-dom";

const Home: FC = () => {

    const navigate = useNavigate();
    
    return (
        <div>
            <section>
                <div className="relative sm:mx-5">
                    <img 
                        src="https://i.pinimg.com/originals/2d/5d/51/2d5d5117871209b09a3c17a28905e294.jpg"
                        className="h-[400px] w-full object-cover sm:rounded-2xl"
                    /> 
                    <div className="absolute inset-0 bg-black bg-opacity-50 sm:rounded-2xl"></div>
                    <div className="absolute top-0 w-full p-5 sm:hidden">
                        <SearchButton/>
                    </div>
                    <div className="absolute bottom-0 p-5 w-3/4 sm:px-12 lg:px-28 sm:py-16">
                        <p className="text-white text-4xl sm:text-5xl lg:text-6xl">Vacation</p>
                        <p className="text-white text-lg mb-4 sm:text-xl lg:text-2xl">Plan, Explore, and Enjoy Your Adventures with Ease</p>
                        <button 
                            type="button"
                            className="bg-color-base text-white py-3 px-6 rounded-full hover:bg-color-baseHover"
                            onClick={() => navigate('/booking')}
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </section>
            <section className="lg:mx-28">
                <div className="px-5 pt-5">
                    <label className="text-xl font-bold dark:text-white">Explore Indonesia</label>
                </div>    
                <div>
                    <ExploreSlider/>
                </div>
            </section>
            <section className="lg:mx-28">
                <div className="px-5 pt-5">
                    <label className="text-xl font-bold dark:text-white">Popular Destinations</label>
                </div>    
                <div>
                    <PopularDestination/>
                </div>
            </section>
            <section className="lg:mx-28">
                <div className="px-5">
                    <label className="text-xl font-bold dark:text-white">Popular Destinations</label>
                </div>    
                <div>
                    <PopularDestination/>
                </div>
            </section>
        </div>
    )
}

export default Home