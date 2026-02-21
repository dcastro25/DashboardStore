
import { RiCloseLine, RiLightbulbLine, RiMenu3Fill } from "react-icons/ri";
import { SiderbarMobileItem } from "./siderbarMobileItem";
import { IoMdSearch } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { IoHomeOutline} from "react-icons/io5";

interface Props{
    onToggleMenu?: () =>void
    showMenu? : boolean
}

export function SiderbarMobile ({onToggleMenu, showMenu} :Props){


    return(
        <div className="bg-[#1F1D2B] w-screen lg:hidden">
            <nav className="bg-[#1F1D28] fixed w-full bottom-0 left-0 text-3xl text-white py-3">
                <div className="flex justify-evenly items-center">
                    <SiderbarMobileItem icon={IoHomeOutline}/>
                    <SiderbarMobileItem icon={IoMdSearch}/>
                    <SiderbarMobileItem icon={AiOutlinePlus}/>
                    <SiderbarMobileItem icon={RiLightbulbLine} />
                    <SiderbarMobileItem icon={showMenu ? RiCloseLine : RiMenu3Fill} onNavigate ={onToggleMenu}/>
                </div>
            </nav>
        </div>
    )
}

