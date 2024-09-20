import { ArrowLeft, Search } from "lucide-react";
import { FC, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import DateRangePicker from "../Components/DateRangePicker";
import { useDate } from "../Context/DateContext";

const Booking: FC = () => {
    const navigate = useNavigate();
    const {startDate, endDate} = useDate();
    const ref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if(ref.current) {
            ref.current.focus();
        }
    }, [])

    return (
        <div className="min-h-screen dark:bg-dark-main">
            <div className="absolute p-5 flex justify-between items-center w-full">
                <div 
                    className="p-3 rounded-full bg-white dark:bg-dark-second dark:text-white"
                    onClick={() => navigate(-1)}    
                >
                    <ArrowLeft size={25}/>
                </div>
            </div>
            <img
                src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/akuratco/images/akurat_20200119090402_9B6dYT.jpg"
                className="w-full h-[400px] object-cover"
            />
            <div className="absolute top-0 mt-[250px] px-5">
                <div className="">
                    <p className="text-3xl font-bold text-white mr-28">Where are you going next?</p>
                </div>
                <div className="mt-5 rounded-[30px] bg-gradient-to-b from-gray-200 via-white to-gray-100 shadow-lg p-3 dark:bg-gradient-to-b dark:from-dark-second dark:via-dark-second dark:to-dark-second">
                    <div 
                        className="py-3 px-5 rounded-full bg-white cursor-pointer shadow-lg dark:bg-dark-main"
                    >
                        <div className="flex gap-3 items-center">
                            <div className="text-color-base">
                                <Search/>
                            </div>
                            <div className="w-full">
                                <input
                                    type="text"
                                    placeholder="Hotel or city"
                                    ref={ref}
                                    className="w-full outline-none dark:bg-dark-main dark:text-white"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="flex justify-between">
                            <DateRangePicker/>
                            <div className="w-full mx-5">
                                <p className="text-sm font-semibold text-gray-400">Number of Rooms</p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <button
                                className="w-full p-4 rounded-full font-bold bg-color-base text-white hover:bg-color-baseHover"
                            >
                                Search Hotels
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking