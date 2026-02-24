import type { food } from "../../../mockData/mockData"


interface Props{
    food: food
}

export function FoodCard ({food}: Props){
    return(
        <button className="w-full
            bg-[#ffffff] 
            p-8 
            rounded-xl 
            flex flex-col items-center gap-2 text-center 
            text-[#3b2314] 
            border border-transparent 
            lg:hover:border-[#ec7c6a] 
            lg:hover:-translate-y-3
            lg:hover:scale-105
            lg:hover:shadow-2xl
            focus:border-[#ec7c6a] 
            focus:outline-none 
            transition-all duration-300 ease-out
        ">
        <img
            src={food.image}
            className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full pointer-events-none"
        />
        <h1 className ="text-xl font-semibold text-[#3b2314]">{food.name}</h1>
        <p className="text-[#3b2314]">{food.description}</p>
        <span className="text-[#ec7c6a] font-semibold">${food.price}</span>
        <p className="text-gray-500">{food.available} Bowls avaliable</p>
    </button>  
    )
}

