import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { useDate } from "../Context/DateContext";

const DateRangePicker: React.FC = () => {
    const {startDate, endDate, setDateRange} = useDate();

    return (
        <div className="border-r-4 pr-5">
            <div>
                <p className="text-sm font-semibold text-gray-400">Choose Date</p>
            </div>
            <div className="mt-3">
                <DatePicker
                    selected={startDate}
                    onChange={(update: [Date | null, Date | null]) => {
                        setDateRange(update);
                    }}
                    startDate={startDate || undefined}
                    endDate={endDate || undefined}
                    selectsRange
                    minDate={new Date()}
                    placeholderText={`${moment().format("DD MMM")} - ${moment().format("DD MMM")}`}
                    className="w-[150px] text-lg font-semibold text-gray-700 dark:text-white dark:bg-dark-second"
                    dateFormat="dd MMM"
                    popperPlacement="bottom-start"
                />
            </div>
        </div>
    );
};

export default DateRangePicker;
