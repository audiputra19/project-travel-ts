import { Search } from "lucide-react";
import { FC } from "react";

const SearchButton: FC = () => {
    return (
        <div className="py-3 px-5 rounded-full bg-white cursor-pointer">
            <div className="flex gap-3 items-center">
                <div className="text-color-base">
                    <Search/>
                </div>
                <div className="w-full">
                    <p className="text-sm text-gray-400">Where are you going?</p>
                </div>
            </div>
        </div>
    )
}

export default SearchButton;