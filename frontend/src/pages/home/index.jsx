import earth from "./assets/Earth-Transparent.png";
import Login from "../../components/customer/login";
import Register from "../../components/customer/register";
import { useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  return (
    <div className="h-screen bg-gradient-to-tl from-sky-950 via-violet-900 to-blue-950 text-white">
      {register ? (
        <Register />
      ) : login ? (
        <Login />
      ) : !isLoggedIn ? (
        <div className="flex flex-col justify-between h-screen">
          <img className="w-3/4 self-center object-contain" src={earth} alt="" />
          <div className="flex flex-col gap-3 items-center mb-24">
            <button
              className="bg-gray-200 text-black rounded-full px-3 py-1 w-fit"
              onClick={() => setLogin(true)}
            >
              Logga in
            </button>
            <button
              className="bg-gray-200 text-black rounded-full px-3 py-1 w-fit"
              onClick={() => setRegister(true)}
            >
              Registrera dig
            </button>
          </div>
        </div>
      ) : (
        <div className="">
          <h1>Välkommen!</h1>
        </div>
      )}
    </div>
  );
}
