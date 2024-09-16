import { FC } from "react";
import { Hotels } from "../Interface/Hotels";

interface GalleryType {
    hotel: Hotels | undefined
}

export const Gallery: FC<GalleryType> = ({ hotel }) => {
    
    return (
        <div className="grid grid-cols-2 gap-3">
            {hotel?.images.map((photo: string, i: number) => {
                return (
                    <div 
                        key={i}
                        className="cursor-pointer"
                    >
                        <img 
                            src={photo} 
                            alt="hotel"  
                            className="w-full h-40 object-cover rounded-xl"
                        />
                    </div>
                )
            })}
        </div>
    )
}