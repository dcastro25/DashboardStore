import { RiArrowDownSLine, RiSearch2Line } from "react-icons/ri";
import { MenuSelect } from "./menuSelect";
import { FoodCard } from "./cardMenu";
import { menuData } from "../../../mockData/mockData";

export function Menu (){
    return (
        <div>
            <header className="pb-24">
                <div className="flex flex-col pr-2 pl-2 gap-4 md:flex-row md:justify-between md:items-center  lg:gap-4 mb:-6">
                    <div>
                        <h1 className="text-2xl text-gray-300">Jeager Resto</h1>
                        <p className="text-gray-500">07 octubre 2025</p>
                    </div>
                    <form>
                        <div className="w-full relative">
                            <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"/>
                        <input 
                            type="text"
                            className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                            placeholder ="Search"
                            />
                        </div>
                    </form>
                </div>
                <nav className="pt-4 pb-2">
                    <MenuSelect />
                </nav>
            </header>
            <div className="pb-14 pr-4 pl-2 flex items-center justify-between">
                <h2 className="text-xl text-gray-300">Choose Dishes</h2>
                <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg"><RiArrowDownSLine/>Dine In</button>
            </div>
            <div className="p-8 pb-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
                {menuData.map((food) => (
                    <FoodCard key={food.id} food={food}/>
                ))}
            </div>
        </div>
    )
}