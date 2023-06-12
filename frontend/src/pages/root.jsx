import { Link, Outlet } from "react-router-dom";
import sweden from "../assets/sweden.png";
import textLogo from "../assets/Earth-Hero-Text.svg"
import { useIsLoggedIn } from "../redux/isLoggedIn";
import NavBar from "../components/NavBar";
import { HiMenu } from "react-icons/hi";
import Modal from "../components/Modal";

// bg-color #9feea2
// button color #70c3ff

export default function Root() {
  const isLoggedIn = useIsLoggedIn();

    return (
        <div className="flex flex-col"> {/* bg-gradient-to-tl from-sky-950 via-violet-900 to-blue-950 */}
            <header className="flex justify-between items-center">
                <Link to={"/"} className="m-2 w-20"><img src={textLogo} alt="Earth Hero Text Logo" /></Link>
                <nav className="flex items-center">
                    <button className="h-8 w-8 p-0 self-end m-1 hover:brightness-95 active:brightness-[0.85] rounded-full overflow-hidden">
                        <img className="h-full w-full object-cover" src={sweden} alt="Swedish flag" />
                    </button>
                    {isLoggedIn && <button className="m-2"> </button>
                    } 
                </nav>
                
            </header>
            <main className="grow">
                <Outlet />
            </main>
            <footer>
            <NavBar />
            </footer>
        </div>
    )
}
