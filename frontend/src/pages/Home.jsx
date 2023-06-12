import logo from "../assets/logo.svg"
import { useEffect, useState } from "react";
import { useIsLoggedIn } from "../redux/isLoggedIn";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    const isLoggedIn = useIsLoggedIn();
    console.log("isLoggedIn: ", isLoggedIn);

    useEffect(() => {
        isLoggedIn && navigate("/team-start")
    }, [])

    return (
        <div className="flex flex-col justify-evenly h-full">
            <img className="w-3/4 self-center object-contain" src={logo} alt="Earth Hero Logo" />
            <div className="flex flex-col gap-3 items-center">
                <Link to={"/login"} className="bg-sky-300 hover:bg-sky-400 active:bg-sky-400 text-black rounded-full px-3 py-1 w-fit">Logga in</Link>
                <Link to={"/register"} className="bg-sky-300 hover:bg-sky-400 active:bg-sky-400 text-black rounded-full px-3 py-1 w-fit">Registrera dig</Link>
            </div>
        </div>
    )
}
