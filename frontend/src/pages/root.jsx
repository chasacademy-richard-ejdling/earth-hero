import { Link, Outlet } from "react-router-dom";
import sweden from "../assets/sweden.png";
import { useIsLoggedIn } from "../redux/isLoggedIn";
import { HiMenu } from "react-icons/hi";

// Fixa färger och logga!!

export default function Root() {
  const isLoggedIn = useIsLoggedIn();

  return (
    <div className="h-screen bg-gradient-to-tl from-sky-950 via-violet-900 to-blue-950 text-white">
      <header className="flex justify-between">
        <Link to={"/"} className="m-2">
          Earth Hero
        </Link>
        <nav className="flex items-center">
          <button className="h-8 w-8 p-0 self-end m-1 border border-transparent hover:border-white rounded-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={sweden}
              alt="Swedish flag"
            />
          </button>
          {isLoggedIn && (
            <button className="m-2">
              <HiMenu size={"24px"} />
            </button>
          )}
        </nav>
      </header>
      <main className="">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
