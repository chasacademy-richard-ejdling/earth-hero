import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import sweden from "./assets/sweden.png"
import earth from "./assets/Earth-Transparent.png"


export default function Root() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [login, setLogin] = useState(false)
    const [register, setRegister] = useState(false)

    return (
        <div className="h-screen bg-gradient-to-tl from-sky-950 via-violet-900 to-blue-950 text-white">
            {register ? (
                <div className="flex flex-col items-center">
                    <img className="w-3/4 self-center object-contain max-w-lg" src={earth} alt="" />
                    <div className="flex flex-col items-center">
                        <label htmlFor="username">Användarnamn: </label>
                        <input className="w-56" id="username" type="text" />
                        <label htmlFor="password">Lösenord</label>
                        <input className="w-56" id="password" type="text" />
                        <button>Registra dig</button>
                    </div>
                </div>
            ) : login ? (
                <div>
                    login
                </div>
            ) : !isLoggedIn ? (
                <div className="flex flex-col justify-between h-screen">
                    <button className="h-8 w-8 p-0 self-end m-2">
                        <img className="h-full w-full object-cover rounded-full" src={sweden} alt="Swedish flag" />
                    </button>
                    <img className="w-3/4 self-center object-contain" src={earth} alt="" />
                    <div className="flex flex-col gap-3 items-center mb-24">
                        <button className="bg-gray-200 text-black rounded-full px-3 py-1 w-fit" onClick={() => setLogin(true)}>Logga in</button>
                        <button className="bg-gray-200 text-black rounded-full px-3 py-1 w-fit" onClick={() => setRegister(true)}>Registrera dig</button>
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