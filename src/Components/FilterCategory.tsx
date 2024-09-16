import { FC } from "react";

interface FilterCategoryProps {
    categories: string[];
    selectCategory: string;
    setSelectCategory: React.Dispatch<React.SetStateAction<string>>;
}
export const FilterCategory: FC<FilterCategoryProps> = ({ categories, selectCategory, setSelectCategory }) => {
    return (
        <div className="flex gap-10">
            <div className="flex flex-col items-center">
                <div
                    className={`${selectCategory.length === 0 ? 'text-color-base' : 'text-gray-600 dark:text-gray-500'} font-semibold cursor-pointer`}
                    onClick={() => setSelectCategory('')}
                >
                    Overflow
                </div>
                {selectCategory.length === 0 && <div className="border-t-2 w-2 border-color-base"></div>}    
            </div>
            {categories.map((val: string, i: number) => {
                return (
                    <div className="flex flex-col items-center">
                        <div
                            key={i}
                            className={`${selectCategory === val ? 'text-color-base' : 'text-gray-600 dark:text-gray-500'} font-semibold cursor-pointer`}
                            onClick={() => setSelectCategory(val)}
                        >
                            {val}
                        </div>
                        {selectCategory === val && <div className="border-t-2 w-2 border-color-base"></div>}
                    </div>
                )
            })}
        </div>
    )
}