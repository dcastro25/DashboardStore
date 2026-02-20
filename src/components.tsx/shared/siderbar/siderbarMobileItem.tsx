import type { IconType } from "react-icons"

interface Props{
    icon : IconType
    onNavigate?: ()=>void

}

export function SiderbarMobileItem ({icon: Icon, onNavigate}: Props){
    return(
        <button className="group relative" onClick={onNavigate}>
            <div className="
                w-14 h-14 flex items-center justify-center rounded-2xl text-[#ec7c6a] transition-all duration-300 ease-out transform group-hover:bg-[#ec7c6a] group-hover:text-white group-hover:-translate-y-4 group-hover:scale-110 ">
                <Icon className="text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl"/>
            </div>
        </button>
    )
}

