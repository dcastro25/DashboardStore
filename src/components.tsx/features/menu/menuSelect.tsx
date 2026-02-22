import { useState } from "react";


export function MenuSelect(){
  const [active, setActive] = useState("Hot dishes");

  const tabs = ["Hot dishes", "Cold dishes", "Soup", "Grill"];

  return (
        <div className="border-b border-[#8b74707c] gap-4 flex pr-6 pl-2 lg:justify-start lg:gap-8 justify-between">
        {tabs.map((tab) => (
            <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`relative pb-3 font-medium transition-colors duration-300 ${
                active === tab
                ? "text-[#ec7c6a]"
                : "text-[#8b7470] hover:text-[#7f2314]"
            }`}
            >
            {tab}

            <span
                className={`absolute left-0 -bottom-[1px] h-[2px] rounded-full bg-[#ec7c6a] transition-all duration-300 ${
                active === tab ? "w-10" : "w-0"
                }`}
            />
            </button>
        ))}
        </div>
  )
}