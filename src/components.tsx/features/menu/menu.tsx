import { RiArrowDownSLine, RiSearch2Line } from "react-icons/ri";
import { MenuSelect } from "./menuSelect";
import { FoodCard } from "./cardMenu";
import { menuData } from "../../../mockData/mockData";

export function Menu (){
    return (
        <div>
            <header className="pb-4">
                <div className="flex flex-col pr-2 pl-2 gap-4 md:flex-row md:justify-between md:items-center  lg:gap-4 mb:-6">
                    <div>
                        <h1 className="text-2xl text-[#3b2314] font-bold">Patacón Express</h1>
                        <p className="text-[#8b7470]">07 octubre 2025</p>
                    </div>
                    <form>
                        <div className="w-full relative">
                            <RiSearch2Line className="absolute left-3 top-1/2 text-[#ec7c6a] -translate-y-1/2"/>
                            <input 
                            type="text"
                            className="bg-[#f5ebe0] w-full py-2 pl-10 pr-4 rounded-xl text-[#3b2314] 
                            border border-transparent focus:border-[#ec7c6a] outline-none transition-colors placeholder-[#ec7c6a]"
                            placeholder="Search"
                            />
                        </div>
                    </form>
                </div>
                <nav className="pt-4">
                    <MenuSelect />
                </nav>
            </header>
            <div className="pb-14 pr-4 pl-2 flex items-center justify-between">
                <h2 className="text-lg text-[#3b2314] font-bold">Choose Dishes</h2>
                <button className="flex items-center gap-4 text-gray-100 font-semibold bg-[#e8621c] hover:bg-[#ec7d41] py-2 px-4 rounded-lg transition-all duration-300"><RiArrowDownSLine/>Dine In</button>
            </div>
            <div className="p-8 pb-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {menuData.map((food) => (
                    <FoodCard key={food.id} food={food}/>
                ))}
            </div>
        </div>
    )
}