import { FC } from "react";
import StarRating from "./StarRating";
import { useApi } from "../Services/apiHotels";
import { useNavigate } from "react-router-dom";

const PopularDestination: FC = () => {
    const {hotels, loading, error} = useApi();
    const navigate = useNavigate();

    return (
        <div className="mt-3">
            <div className="flex gap-5 px-5 pb-5 no-scrollbar overflow-auto whitespace-nowrap">
                {hotels?.map(hotel => (
                    <div
                        key={hotel.id} 
                        className="flex-shrink-0 w-[200px] rounded-xl bg-white shadow-md shadow-gray-200 dark:bg-dark-second dark:shadow-none"
                        onClick={() => navigate(`/details/${hotel.id}`)}
                    >
                        <div>
                            <img
                                src={hotel.images[0].image}
                                className="h-[180px] w-full object-cover rounded-t-xl"
                            />
                        </div>
                        <div className="p-3">
                            <div>
                                <p className="text-lg font-semibold dark:text-white">{hotel.name}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">{hotel.city}<span>, {hotel.district}</span></p>
                            </div> 
                            <div className="pt-3">
                                <StarRating rating={hotel.rating} maxStars={5}/>
                            </div>           
                            <div className="pt-3">
                                <p className="text-lg font-semibold dark:text-white">
                                    Rp. {hotel.price.toLocaleString('id-ID')}
                                </p>
                            </div>       
                        </div> 
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PopularDestination;