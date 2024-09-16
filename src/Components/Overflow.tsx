import { FC, useEffect } from "react";
import { useApi } from "../Services/apiHotels";
import { useParams } from "react-router-dom";
import { Hotels } from "../Interface/Hotels";

interface OverflowType {
    hotel: Hotels | undefined
}

export const Overflow: FC<OverflowType> = ({ hotel }) => {

    return (
        <div>
            <div>
                <p className="text-gray-500">{hotel?.description}</p>
            </div>
        </div>
    )
}