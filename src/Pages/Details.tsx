import { FC, useEffect, useState } from "react"
import { useApi } from "../Services/apiHotels"
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ChevronLeft, Heart, MapPin, MapPinned } from "lucide-react";
import StarRating from "../Components/StarRating";
import { FilterCategory } from "../Components/FilterCategory";
import { Overflow } from "../Components/Overflow";
import { Gallery } from "../Components/Gallery";
import { Facilities } from "../Components/Facilities";

const Details: FC = () => {
    const { getHotelDetail, loading, error } = useApi();
    const { id } = useParams();
    const navigate = useNavigate();
    const [categories, setCategories] = useState<string[]>(['Facilities', 'Gallery']);
    const [selectCategory, setSelectCategory] = useState<string>('');

    const hotel = getHotelDetail(Number(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div>
            <div className="absolute p-5 flex justify-between items-center w-full">
                <div 
                    className="p-3 rounded-full bg-white dark:bg-dark-second dark:text-white"
                    onClick={() => navigate(-1)}    
                >
                    <ArrowLeft size={25}/>
                </div>
                <div className="p-3 rounded-full bg-white dark:bg-dark-second dark:text-white">
                    <Heart size={25}/>
                </div>
            </div>
            <img
                src={hotel?.images[0].image}
                className="w-full h-[350px] object-cover"
            />
            <div className="absolute w-full h-[500px] top-0 mt-[300px] rounded-t-[30px] bg-white p-5 dark:bg-dark-main dark:text-white">
                <div className="text-2xl font-semibold">{hotel?.name}</div>
                <div className="mt-3 flex items-center gap-2">
                    <StarRating rating={hotel?.rating} maxStars={5}/> 
                    <span className="text-gray-500 dark:text-gray-400">({hotel?.rating})</span>
                </div>
                <div className="mt-3 flex gap-2">
                    <div className="text-red-500"><MapPin/></div>
                    <p className="text-gray-500 dark:text-white">{hotel?.city},</p>
                    <p className="text-gray-500 dark:text-white">{hotel?.district},</p>
                    <p className="text-gray-500 dark:text-white">{hotel?.country}</p>
                </div>
                <div className="mt-7">
                    <FilterCategory
                        categories={categories}
                        selectCategory={selectCategory}
                        setSelectCategory={setSelectCategory}
                    />
                </div>
                <div className="mt-7">
                    {selectCategory === 'Facilities' ? (
                        <Facilities hotel={hotel}/>
                    ) : selectCategory === 'Gallery' ? (
                        <Gallery hotel={hotel}/>
                    ) : selectCategory === '' ? (
                        <Overflow hotel={hotel}/>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default Details