
import type { IconType } from "react-icons"

interface Props{
    icon :  IconType,
    href: string
}

export function SiderbarItems ({icon: Icon, href = "#"} : Props){
    return(
        <li className="hover:bg-[#fdf6ed] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a 
                href={href}
                className="group-hover:bg-[#e8621c] p-4 flex justify-center rounded-xl text-[#a0998f] group-hover:text-[#fdf6ed]"
            >
                <Icon className="text-xl"/>
            </a>
        </li>
    )
}