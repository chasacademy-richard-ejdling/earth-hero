import sweden from "./assets/sweden.png";
import earth from "./assets/Earth-Transparent.png";
import { setIsLoggedIn } from "./redux/isLoggedIn";
import { setOnLogin } from "./redux/registerAndLogin";

export default function Login() {
  function handleLogin() {
    setIsLoggedIn(true);
    setOnLogin(false);
  }

  return (
    <div className="flex flex-col items-center">
      <img
        className="w-3/4 self-center object-contain max-w-lg"
        src={earth}
        alt=""
      />
      <div className="flex flex-col items-center">
        <label htmlFor="username">Användarnamn: </label>
        <input className="w-56" id="username" type="text" />
        <label htmlFor="password">Lösenord</label>
        <input className="w-56" id="password" type="text" />
        <button
          onClick={handleLogin}
          className="bg-gray-200 hover:bg-gray-300 text-black rounded-full px-3 py-1 w-fit"
        >
          Logga in
        </button>
      </div>
    </div>
  );
}
