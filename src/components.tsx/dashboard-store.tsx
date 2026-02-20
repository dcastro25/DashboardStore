import { useState } from "react";
import { Siderbar } from "./shared/siderbar/siderbar";

export function DashboardStore(){
    const [showOrder, setShowOrder] = useState(false);


    return(
        <div className="bg-[#262837] w-full min-h-screen">
            <Siderbar/>
        </div>
    )
}