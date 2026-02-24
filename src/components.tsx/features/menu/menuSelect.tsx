import { categories, type Category } from "../../../mockData/mockData";

interface MenuSelectProps {
  category: Category | "All";
  setCategory: (value: Category | "All") => void;
}

export function MenuSelect({ category, setCategory }: MenuSelectProps) {
  const tabs: (Category | "All")[] = ["All", ...categories];

    return (
        <div className="border-b border-[#8b74707c] gap-4 flex pr-6 pl-2 lg:justify-start lg:gap-8 justify-between">
            {tabs.map((tab) => (
            <button
                    key={tab}
                    onClick={() => setCategory(tab)}
                    className={`relative pb-3 font-medium transition-colors duration-300 ${
                    category === tab
                    ? "text-[#ec7c6a]"
                    : "text-[#8b7470] hover:text-[#7f2314]"
                    }`}
                >
                {tab}
                <span
                    className={`absolute left-0 -bottom-[1px] h-[2px] rounded-full bg-[#ec7c6a] transition-all duration-300 ${
                    category === tab ? "w-10" : "w-0"
                    }`}
                />
            </button>
            ))}
        </div>
    );
}