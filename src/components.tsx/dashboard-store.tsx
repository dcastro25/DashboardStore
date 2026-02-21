
import { Siderbar } from "./features/siderbar/siderbar";
import { Menu } from "./features/menu/menu";
import { useState } from "react";

export function DashboardStore(){

    const [showMenu, setShowMenu] = useState(false);

    const onToggleMenu =()=>{
        setShowMenu(!showMenu)
    }

    return(
        <div className="bg-[#262837] w-full min-h-screen overflow-x-hidden">
            <Siderbar showMenu = {showMenu} onToggleMenu={onToggleMenu}/>
            <main className="
                grid grid-cols-1 lg:grid-cols-8
                transition-all duration-300
                lg:pl-28
                ">
                <div className="lg:col-span-6">
                    <Menu/>
                </div>

                <div className="hidden lg:block lg:col-span-2">
                    carrito
                </div>
            </main>
        </div>
    )
}