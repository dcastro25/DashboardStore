
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

                    <div className={`lg:col-span-2 fixed lg:fixed lg:top-0 lg:right-0 lg:h-screen lg:w-[420px] bg-[#ffffff] w-full z-[50] transition-all ${showCart ? "" : "hidden lg:block"}`}>
                    <ShoppingCart/>
                </div>
            </main>
        </div>
    )
}