import { Link, Outlet } from "react-router-dom";
import sweden from "../assets/sweden.png";
import textLogo from "../assets/Earth-Hero-Text.svg"
import { useIsLoggedIn } from "../redux/isLoggedIn";
import NavBar from "./navbar";
import { HiMenu } from "react-icons/hi";
import Modal from "../components/Modal";

// bg-color #9feea2
// button color #70c3ff

export default function Root() {
  const isLoggedIn = useIsLoggedIn();

    return (
        <div className="h-screen flex flex-col bg-EHGreen"> {/* bg-gradient-to-tl from-sky-950 via-violet-900 to-blue-950 */}
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

/* Hamburger meny (kolla instruktioner för användande i Modal.jsx (för state och setState parametrarna) + Lägga till iconer framför texten i knapparna(react-icons?)).
   Sen bara att koppla till hamburger knappen samtlänka knapparna i menyn til respektive sida:
    <Modal state={} setState={}>
        <ul className='flex flex-col w-3/4 mx-auto my-[25vh] h-fit'>
            <li key={1} className="bg-sky-300 hover:bg-sky-400 active:bg-sky-400 first:rounded-t-2xl last:rounded-b-2xl -mt-1 border border-EHGreen overflow-hidden">
                <button className="block w-full py-2">Mitt konto</button>
            </li>
            <li key={2} className="bg-sky-300 hover:bg-sky-400 active:bg-sky-400 first:rounded-t-2xl last:rounded-b-2xl -mt-1 border border-EHGreen overflow-hidden">
                <button className="block w-full py-2">Inställningar</button>
            </li>
            <li key={3} className="bg-sky-300 hover:bg-sky-400 active:bg-sky-400 first:rounded-t-2xl last:rounded-b-2xl -mt-1 border border-EHGreen overflow-hidden">
                <button className="block w-full py-2">Hero Poäng</button>
            </li>
            <li key={4} className="bg-sky-300 hover:bg-sky-400 active:bg-sky-400 first:rounded-t-2xl last:rounded-b-2xl -mt-1 border border-EHGreen overflow-hidden">
                <button className="block w-full py-2">Logga ut</button>
            </li>
        </ul>
    </modal>
*/
