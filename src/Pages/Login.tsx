import { FC, useEffect, useState } from "react"
import { useApi } from "../Services/apiHotels";
import Loading from "../Components/Loading";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const {fetchDataLogin, loading, error} = useApi();
    const navigate = useNavigate();

    const handleLogin = () => {
        try {
            fetchDataLogin(form.email, form.password);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        loading ? (
            <Loading/>
        ) : (
            <div className="flex justify-center items-center min-h-screen">
                <div className="lg:grid lg:grid-cols-2 lg:gap-3 w-full lg:w-3/4 lg:border lg:p-5 rounded-3xl">
                    <div className="hidden lg:block">
                        <div className="relative h-full">
                            <img
                                src="https://c4.wallpaperflare.com/wallpaper/377/82/449/5bf55b183fa85-wallpaper-preview.jpg"
                                className="w-full h-full rounded-2xl"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl">
                                <div className="flex justify-center items-center h-full pl-10 pr-20">
                                    <div className="flex flex-col gap-3">
                                        <p className="text-white text-4xl font-bold">Create Your Account</p>
                                        <p className="text-white text-xl">Get Ready for Travel Around The World</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:pr-10 lg:py-5">
                        <div className="hidden lg:block px-5 pb-20">
                            <p className="text-color-base text-2xl font-bold">Travelapp<span className="text-yellow-400">.</span></p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-4xl font-bold">Hi Traveler</p>
                            <p className="text-sm text-gray-500">Welcome to Travelapp</p>
                        </div>
                        <div className="mt-5 p-5 flex flex-col gap-3">
                            <div className="w-full border border-gray-400 rounded-lg">
                                <input 
                                    type="text"
                                    className="w-full p-4 rounded-lg outline-none text-sm"
                                    placeholder="Email"
                                    onChange={(e) => 
                                        setForm(prev => ({
                                            ...prev,
                                            email: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                            <div className="w-full border border-gray-400 rounded-lg">
                                <input 
                                    type="password"
                                    className="w-full p-4 rounded-lg outline-none text-sm"
                                    placeholder="Password"
                                    onChange={(e) =>
                                        setForm(prev => ({
                                            ...prev,
                                            password: e.target.value
                                        }))
                                    }
                                />
                            </div>
                            <div className="flex justify-end">
                                <p className="text-sm text-color-base cursor-pointer">Forgot Password ?</p>
                            </div>
                        </div>
                        <div className="px-5">
                            <button
                                className="w-full bg-color-base text-white font-bold p-4 rounded-lg"
                                onClick={handleLogin}
                            >
                                Login
                            </button>
                        </div>
                        <div className="p-5 flex justify-center text-sm">
                            <p>Don't have an account? <span className="text-color-base cursor-pointer">Sign Up</span></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default Login