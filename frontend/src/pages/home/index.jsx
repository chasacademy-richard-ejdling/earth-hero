import earth from "./assets/Earth-Transparent.png";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
import { useIsLoggedIn } from "./redux/isLoggedIn";
import {
  useRegisterAndLogin,
  setOnRegister,
  setOnLogin,
} from "./redux/registerAndLogin";

export default function Home() {
  /* const [isLoggedIn, setIsLoggedIn] = useState(false) 
    const [login, setLogin] = useState(false)
    const [register, setRegister] = useState(false) */

  const isLoggedIn = useIsLoggedIn();
  console.log("isLoggedIn: ", isLoggedIn);

  const { onRegisterScreen: register, onLoginScreen: login } = useRegisterAndLogin();
  console.log("onRegisterScreen: ", register);
  console.log("onLoginScreen: ", login);

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
              className="bg-gray-200 hover:bg-gray-300 text-black rounded-full px-3 py-1 w-fit"
              onClick={() => setOnLogin(true)}
            >
              Logga in
            </button>
            <button
              className="bg-gray-200 hover:bg-gray-300 text-black rounded-full px-3 py-1 w-fit"
              onClick={() => setOnRegister(true)}
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
