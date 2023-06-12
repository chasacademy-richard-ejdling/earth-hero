import sweden from "../assets/sweden.png";
import logo from "../assets/logo.svg";
import { setIsLoggedIn, useIsLoggedIn } from "../redux/isLoggedIn";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const loggedIn = useIsLoggedIn();

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const token = useRef("");

  /* function handleLogin() {
    setIsLoggedIn(true);
    navigate("/user");
  } */

  function handleLogin() {
    const user = {
      username: username,
      password: password,
    };

    fetch("http://localhost:7000/login", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          setIsLoggedIn(true);
          navigate("/user");
          return res.text();
        }
      })
      .then((data) => {
        console.log(data);
        token.current = data;
        console.log("token", token.current);
      });
  }

  return (
    <div className="flex flex-col items-center">
      <img
        className="w-3/4 self-center object-contain max-w-lg mt-8"
        src={logo}
        alt="Earth Hero Logo"
      />
      <div className="flex flex-col gap-2 w-3/4 mt-8">
        <div>
          <label htmlFor="username">Användarnamn:</label>
          <br />
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="rounded-full w-full mt-1 text-black px-2 py-1"
            id="username"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="password">Lösenord:</label>
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-full w-full mt-1 text-black px-2 py-1"
            id="password"
            type="text"
          />
        </div>
        <a href="" className="underline">
          Glömt lösenord?
        </a>
        <button
          disabled={!username || !password}
          onClick={handleLogin}
          className="self-end bg-gray-200 enabled:hover:bg-gray-300 disabled:opacity-70 text-black rounded-full px-3 py-1 w-fit"
        >
          Logga in
        </button>
      </div>
    </div>
  );
}
