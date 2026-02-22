import { RiHome6Line, RiLogoutCircleLine, RiMailLine, RiNotification3Line, RiPercentLine, RiPieChartLine, RiSettingsLine } from "react-icons/ri";
import { SiderbarItems } from "./siderbarItems";
import { SiderbarMobile } from "./sidebarMobile";

interface Props{
    onToggleMenu : ()=>void
    showMenu : boolean
    onToggleShowCart : ()=>void
    showCart: boolean

}

export function Siderbar ( {onToggleMenu, showMenu, onToggleShowCart, showCart} : Props){
    
    return (
        <div>
            <SiderbarMobile onToggleMenu={onToggleMenu} showMenu={showMenu} onToggleShowCart={onToggleShowCart} showCart={showCart} />

            <div className ={`bg-[#3b2314] fixed lg:left-0 top-0 w-28 h-full flex flex-col rounded-tr-xl rounded-br-xl z-[100] transition-all ${showMenu ? "left-0" : "-left-full"}`}>
                <h1 className="text-2xl text-gray-300 uppercase font-bold text-center pb-9 pt-9" >logo</h1>
                <ul className="pl-4">   
                    <SiderbarItems icon = {RiHome6Line} href ="#"/>
                    <SiderbarItems icon = {RiPieChartLine} href ="#"/>
                    <SiderbarItems icon = {RiPercentLine} href ="#"/>
                    <SiderbarItems icon = {RiMailLine} href ="#"/>
                    <SiderbarItems icon = {RiNotification3Line} href ="#"/>
                    <SiderbarItems icon = {RiSettingsLine} href ="#"/>
                </ul>
                    
                <ul className ="pl-4 mt-auto mb-4">
                    <SiderbarItems icon = {RiLogoutCircleLine} href ="#"/>
                </ul>
            </div>
        </div>
    )
}