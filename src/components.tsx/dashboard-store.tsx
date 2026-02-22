
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
            <main className="grid grid-cols-1 lg:grid-cols-6 transition-all duration-300 lg:pl-28 lg:pr-[320px]">
                <div className="lg:col-span-6">
                    <Menu/>
                </div>

                <div className={`lg:col-span-fixed lg:fixed top-0 right-0 bottom-[64px] lg:bottom-0 w-full lg:w-[320px] h-full lg:h-screen bg-[#ffffff] z-[50] overflow-hidden transition-transform duration-500 ease-in-out ${showCart ? "translate-x-0" : "translate-x-full lg:translate-x-0"}`}>
                    <ShoppingCart/>
                </div>
            </main>
        </div>
    )
}