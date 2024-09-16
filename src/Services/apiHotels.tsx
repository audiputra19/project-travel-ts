import { createContext, FC, ReactNode, useCallback, useContext, useEffect, useState } from "react"
import { ExploreHotels, Hotels } from "../Interface/Hotels";
import { axiosInstance } from "./api";
import { AuthResponse } from "../Interface/Auth";

interface ApiContextType {
    hotels: Hotels[];
    exploreHotels: ExploreHotels[];
    loading: boolean;
    error: string;
    getHotelDetail: (id: number) => Hotels | undefined;
    fetchDataLogin: (email: string, password: string) => Promise<AuthResponse | undefined>;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [hotels, setHotels] = useState<Hotels[]>([]);
    const [exploreHotels, setExploreHotels] = useState<ExploreHotels[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const fetchDataHotels = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.get<Hotels[]>('/hotels');
            setHotels(response.data);
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setLoading(false);
        }
    }

    const getHotelDetail = (id: number) => hotels.find(hotel => hotel.id === id);

    const fetchDataExploreHotels = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.get<ExploreHotels[]>('/exploreHotels');
            setExploreHotels(response.data);
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setLoading(false);
        }
    }

    const fetchDataLogin = async (email: string, password: string) => {
        setLoading(true);
        try {
            const response = await axiosInstance.post<AuthResponse>('/login', {
                email,
                password
            });

            console.log(response.data.data);

            const token = response.data.data.token;
            const userData = response.data.data.userData;

            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            localStorage.setItem('userData', JSON.stringify(userData));
            localStorage.setItem('token', token);

            return response.data;

        } catch (error) {
            setError((error as Error).message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchDataHotels();
        fetchDataExploreHotels();
    }, []);

    return (
        <ApiContext.Provider value={{ hotels, exploreHotels, loading, error, getHotelDetail, fetchDataLogin}}>
            {children}
        </ApiContext.Provider>
    )
}

export const useApi = () => {
    const context = useContext(ApiContext);
    if (!context) {
        throw new Error('useApi must be used within an ApiProvider');
    }
    return context;
};