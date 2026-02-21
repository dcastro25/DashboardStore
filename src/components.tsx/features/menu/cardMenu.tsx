import type { Food } from "../../../mockData/mockData"

interface Props{
    food: Food
}

export function FoodCard ({food}: Props){
    return(
        <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
            <img
                src={food.url}
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
            />
            <h1 className ="text-xl">{food.foodName}</h1>
            <p className="text-base">{food.description}</p>
            <span className="text-gray-400">${food.price}</span>
            <p className="text-gray-600">{food.available} Bowls avaliable</p>
        </div>
    )
}

