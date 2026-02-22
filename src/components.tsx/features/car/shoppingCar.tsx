import { MdOutlineShoppingBag } from "react-icons/md";

export function ShoppingCart (){
    return(
        <div className="flex flex-col h-[calc(100vh-64px)] lg:h-screen text-[#3b2314] bg-[#ffffff] rounded-2xl">
            <div className="flex justify-between items-center border-b border-[#e8631c67] pb-6 px-6 pt-6">
                <h2 className="text-2xl font-bold">Pedido</h2>
                <div className="flex gap-3">
                    <button className="bg-[#e8621c] text-[#fdf6ed] text-sm font-semibold rounded-lg px-4 py-2 transition-all ">
                        Para llevar
                    </button>
                    <button className="bg-[#f5ebe0] text-[#3b2314] text-sm font-semibold rounded-lg px-4 py-2 border border-[#e8ded7] hover:bg-[#efe2d6] transition-all">
                        En sitio
                    </button>
                </div>
            </div>
            <div className="flex-grow flex flex-col justify-center items-center gap-3 text-[#c2bbb5] px-6">
                <MdOutlineShoppingBag className="text-5xl opacity-70" />
                <p className="text-lg font-medium">
                    No hay items en el carrito
                </p>
                <span className="text-sm">
                    Agrega platos del menú para comenzar
                </span>
            </div>
            <div className="border-t border-[#e8631c67] p-6 bg-[#ffffff]">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-[#8b7470]">
                        Total
                    </span>
                    <span className="text-2xl font-bold text-[#3b2314]">
                        $0.00
                    </span>
                </div>
                <button className="w-full bg-[#e8621c] hover:bg-[#ec7d41] text-[#fdf6ed] font-bold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                    Comprar ahora
                </button>
            </div>
        </div>
    )
}