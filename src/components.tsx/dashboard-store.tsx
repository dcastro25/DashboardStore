
import { Siderbar } from "./features/siderbar/siderbar";
import { Menu } from "./features/menu/menu";
import { useState } from "react";
import { ShoppingCart } from "./features/car/shoppingCar";


export function DashboardStore(){

    const [showMenu, setShowMenu] = useState(false);
    const [showCart, setShowCart] = useState(false);

    const onToggleMenu =()=>{
        setShowMenu(!showMenu)
    }

    const onToggleShowCart =()=>{
        setShowCart(!showCart)
    }

    return(
        <div className="bg-[#fdf6ed] w-full min-h-screen overflow-x-hidden">
            <Siderbar showMenu = {showMenu} onToggleMenu={onToggleMenu} onToggleShowCart={onToggleShowCart} showCart={showCart}/>
            <main className="
                grid grid-cols-1 lg:grid-cols-8
                transition-all duration-300
                lg:pl-28
                ">
                <div className="lg:col-span-6">
                    <Menu/>
                </div>

                <div className={`lg:col-span-2 fixed lg:static top-0 bottom-[64px] lg:bottom-auto right-0 w-full lg:w-auto h-auto lg:h-screen bg-[#ffffff] z-[50] transition-transform ${showCart ? "translate-x-0" : "translate-x-full"}`}>
                    <ShoppingCart/>
                </div>
            </main>
        </div>
    )
}