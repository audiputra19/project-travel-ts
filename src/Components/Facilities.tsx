import { FC } from "react";
import { Hotels } from "../Interface/Hotels";
import { Beer, BookLock, Coffee, Dumbbell, Shell, Shield, Sparkles, Utensils, Waves, Wifi } from "lucide-react";

interface FacilitiesType {
    hotel: Hotels | undefined;
}

export const Facilities: FC<FacilitiesType> = ({ hotel }) => {
    return (
        <div className="space-y-5">
            {hotel?.amenities.map((facility: string, i: number) => {
                let icon = null;
                switch (facility) {
                    case 'Free Wi-Fi':
                        icon = <Wifi/>
                        break;
                    case 'Restaurant':
                        icon = <Utensils/>
                        break;
                    case 'Bar':
                        icon = <Beer/>
                        break; 
                    case 'Concierge':
                        icon = <Shield/>
                        break; 
                    case 'Gym':
                        icon = <Dumbbell/>
                        break;
                    case 'Free Breakfast':
                        icon = <Coffee/>
                        break;
                    case 'Beach Access':
                        icon = <Shell/>
                        break; 
                    case 'Pool':
                        icon = <Waves/>
                        break;
                    case 'Spa':
                        icon = <Sparkles/>
                        break;
                    case 'Private Villa':
                        icon = <BookLock/>
                        break;                                 
                    default: 
                        icon = null
                        break;   
                }

                return (
                    <div className="flex gap-3">
                        <div className="text-color-base">{icon}</div>
                        <p className="text-gray-500">{facility}</p>
                    </div>
                )
            })}
        </div>
    )
}