import { createContext, FC, ReactNode, useContext, useState } from "react";
import { start } from "repl";

interface DateContextProps {
    startDate: Date | null;
    endDate: Date | null;
    setDateRange: (range: [Date | null, Date | null]) => void;
}

const DateContext = createContext<DateContextProps>({
    startDate: null,
    endDate: null,
    setDateRange: () => {},
})
export const DateProvider:FC<{ children: ReactNode }> = ({ children }) => {
    const currentDate = new Date;
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([currentDate, currentDate]);
    const [startDate, endDate] = dateRange;

    return (
        <DateContext.Provider value={{ startDate, endDate, setDateRange }}>
            {children}
        </DateContext.Provider>
    )
}

export const useDate = () => useContext(DateContext);