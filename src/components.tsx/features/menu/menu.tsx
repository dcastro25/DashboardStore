import { RiArrowDownSLine, RiSearch2Line } from "react-icons/ri";
import { MenuSelect } from "./menuSelect";
import { FoodCard } from "./cardMenu";
import { useMemo, useState } from "react";
import { dishes, type Category } from "../../../mockData/mockData";
import logo from "../../../../public/logo.png"



export function Menu (){
    const [category, setCategory] = useState<Category | "All">("All");
    const [search, setSearch] = useState<string>("");
    
    const filteredDishes = useMemo(() => {
        const searchLower = search.toLowerCase();

        return dishes.filter((dish) => {
            const matchesCategory =
            category === "All" || dish.category === category;
            
            const matchesSearch =
            dish.name.toLowerCase().includes(searchLower);
            
            return matchesCategory && matchesSearch;
        });
    }, [category, search]);
    
    
    return (
        <div>
            <header className="pb-4 ">
                <div className="flex pr-2 pl-3 pt-2 gap-4 md:flex-row md:justify-between md:items-center lg:gap-4 mb:-6">
                    <div className="flex flex-row items-center">
                        <div className="flex justify-center items-center p-4 lg:hidden">
                        <div className=" w-20 h-20  rounded-3xl overflow-hidden flex items-center justify-center bg-white">
                            <img 
                            src={logo} 
                            alt="Patacón Express Logo" 
                            className="w-full h-full object-contain"
                            />
                        </div>
                        </div>
                        <div>
                            <h1 className="text-2xl text-[#3b2314] font-bold">Patacón Express</h1>
                            <p className="text-[#8b7470]">07 octubre 2025</p>
                        </div>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="w-full relative">
                            <RiSearch2Line className="absolute left-3 top-1/2 text-[#ec7c6a] -translate-y-1/2"/>
                            <input 
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                                type="text"
                                className="bg-[#f5ebe0] w-full py-2 pl-10 pr-4 rounded-xl text-[#3b2314] 
                                border border-transparent focus:border-[#ec7c6a] outline-none transition-colors placeholder-[#ec7c6a]"
                                placeholder="Search"
                            />
                        </div>
                    </form>
                    
                </div>

                <nav className="pt-4">
                    <MenuSelect 
                        category={category} 
                        setCategory={setCategory} 
                    />
                </nav>
            </header>

            <div className="pb-14 pr-4 pl-2 flex items-center justify-between">
                <h2 className="text-lg text-[#3b2314] font-bold">
                    Choose Dishes ({filteredDishes.length})
                </h2>

                <button className="flex items-center gap-4 text-gray-100 font-semibold bg-[#e8621c] hover:bg-[#ec7d41] py-2 px-4 rounded-lg transition-all duration-300">
                    <RiArrowDownSLine/>
                    Dine In
                </button>
            </div>

            <div className="p-8 pb-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {filteredDishes.map((food) => (
                    <FoodCard key={food.id} food={food}/>
                ))}
            </div>
        </div>
    )
}