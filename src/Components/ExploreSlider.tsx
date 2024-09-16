import { FC } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useApi } from "../Services/apiHotels";

const ExploreSlider: FC = () => {

    const {exploreHotels, loading, error} = useApi();

    return (
        loading ? (
            <div className="px-5 mt-3">
                <div className="h-[200px] w-full bg-gray-200 rounded-2xl animate-pulse dark:bg-dark-second"></div>
            </div>
        ) : (
            <div className="flex justify-center items-center mt-3">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={2}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ 
                        el: '.pagination', 
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination]}
                    className="w-full"
                    breakpoints={{
                        640: {
                        slidesPerView: 3, // Untuk layar yang lebih besar dari mobile
                        },
                    }}
                >
                    {exploreHotels?.map((image) => (
                        <SwiperSlide key={image.id} className="flex justify-center relative">
                            <div className="absolute w-full flex justify-end pr-2 pt-2">
                                <div className="bg-gray-900 p-2 rounded-full flex align-center">
                                    <FontAwesomeIcon icon={faHeart} className="text-white text-lg" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 pb-2 pl-2">
                                <p className="text-white text-xl font-semibold">{image.name}</p>
                            </div>
                            <img
                            src={image.images}
                            alt={`Slide ${image.id}`}
                            className="rounded-lg shadow-lg w-full h-[250px] object-cover"
                            />
                        </SwiperSlide>
                    ))}
                    <div className="pagination flex justify-center mt-5"></div>
                </Swiper>
            </div>
        )
    )
}

export default ExploreSlider;