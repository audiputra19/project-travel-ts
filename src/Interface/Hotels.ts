interface Location {
    city: string;
    district: string;
    country: string;
}

export interface Hotels {
    id: number;
    name: string;
    location: Location;
    description: string;
    rating: number;
    images: string[];
    price: number;
    currency: string;
    amenities: string[];
} 

export interface ExploreHotels {
    id: number;
    name: string;
    properties: string;
    images: string;
}