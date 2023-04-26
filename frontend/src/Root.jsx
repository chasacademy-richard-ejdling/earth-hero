import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import sweden from "./assets/sweden.png"
import earth from "./assets/Earth-Transparent.png"


export default function Root() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <div className="h-screen bg-gradient-to-tl from-sky-950 via-violet-900 to-blue-950 text-white">
            {!isLoggedIn ? (
                <div className="flex flex-col justify-between h-screen">
                    <button className="h-8 w-8 p-0 self-end m-2">
                        <img className="h-full w-full object-cover rounded-full" src={sweden} alt="Swedish flag" />
                    </button>
                    <img className="w-3/4 self-center object-contain" src={earth} alt="" />
                    <div className="flex flex-col gap-3 items-center mb-24">
                        <button className="bg-gray-200 text-black rounded-full px-3 py-1 w-fit" onClick={() => setIsLoggedIn(true)}>Logga in</button>
                        <button className="bg-gray-200 text-black rounded-full px-3 py-1 w-fit">Registrera dig</button>
                    </div>
                </div>
            ) : (
                <div className="">
                    <h1>Välkommen!</h1>
                    <Outlet />
                </div>
            )}
        </div>
    )
}