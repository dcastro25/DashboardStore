
import type { IconType } from "react-icons"

interface Props{
    icon :  IconType,
    href: string
}

export function SiderbarItems ({icon: Icon, href = "#"} : Props){
    return(
        <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a 
                href={href}
                className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white"
            >
                <Icon className="text-xl"/>
            </a>
        </li>
    )
}