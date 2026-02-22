
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import { SiderbarMobileItem } from "./siderbarMobileItem";
import { IoMdSearch } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { IoHomeOutline} from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

interface Props{
    onToggleMenu?: () =>void
    showMenu? : boolean
    onToggleShowCart?: ()=>void
    showCart : boolean
}

export function SiderbarMobile ({onToggleMenu,showMenu, onToggleShowCart, showCart}  :Props){


    return(
        <div className="w-screen lg:hidden">
            <nav className="bg-[#3b2314] fixed w-full bottom-0 left-0 text-3xl text-gray-300 py-3 z-[100]">
                <div className="flex justify-evenly items-center ">
                    <SiderbarMobileItem icon={IoHomeOutline}/>
                    <SiderbarMobileItem icon={IoMdSearch}/>
                    <SiderbarMobileItem icon={AiOutlinePlus}/>
                    <SiderbarMobileItem icon={showCart ?  RiCloseLine : MdOutlineShoppingCart} onNavigate={onToggleShowCart} />
                    <SiderbarMobileItem icon={showMenu ? RiCloseLine : RiMenu3Fill} onNavigate ={onToggleMenu}/>
                </div>
            </nav>
        </div>
    )
}

