import type { food } from "../../../mockData/mockData"

interface Props {
  food: food
}

export function FoodCard({ food }: Props) {
    return (
        <div
        className="group w-full
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
            transition-all duration-300 ease-out
            cursor-pointer
        ">
        <img
            src={food.image}
            className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full pointer-events-none"
            alt={food.name}
        />

        <h1 className="text-xl font-semibold text-[#3b2314]">
            {food.name}
        </h1>

        <span className="text-[#ec7c6a] font-semibold">
            ${food.price}
        </span>

        <p className="text-gray-500">
            {food.available} Bowls available
        </p>

        <div
            className="
            mt-2 
            opacity-0 
            max-h-0 
            overflow-hidden 
            transition-all duration-300 ease-in-out
            group-hover:opacity-100 
            group-hover:max-h-40
            "
        >
            <p className="text-sm text-gray-500 mb-3">
            {food.description}
            </p>

            <button
            className="w-full bg-[#ec7c6a] text-white py-2 rounded-lg 
            font-semibold transition-all duration-200 
            hover:bg-[#d96b5a] hover:scale-[1.02]"
            >
            Agregar al carrito
            </button>
        </div>
        </div>
    )
}