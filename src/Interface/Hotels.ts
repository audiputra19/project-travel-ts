export interface HotelImage {
    image: string;
}

export interface HotelAmenity {
    amenity: string;
}

export interface Hotels {
    id: number;
    name: string;
    description: string;
    rating: number;
    price: number;
    currency: string;
    city: string;
    district: string;
    country: string;
    images: HotelImage[];
    amenities: HotelAmenity[];
}

export interface ExploreHotels {
    id: number;
    name: string;
    properties: string;
    images: string;
}