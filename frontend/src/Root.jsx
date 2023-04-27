import { Link, Outlet } from "react-router-dom";
import sweden from "./assets/sweden.png"


export default function Root() {
    

    return (
        <div className="h-screen bg-gradient-to-tl from-sky-950 via-violet-900 to-blue-950 text-white">
            <header>
                <nav>
                    <button className="h-8 w-8 p-0 self-end m-2">
                        <img className="h-full w-full object-cover rounded-full" src={sweden} alt="Swedish flag" />
                    </button>
                </nav>
            </header>
            <main className="">
                <Outlet />
            </main>
            <footer>

            </footer>
        </div>
    )
}