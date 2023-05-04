import earth from "../assets/Earth-Transparent.png";
import { useEffect, useState } from "react";
import { useIsLoggedIn } from "../redux/isLoggedIn";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const isLoggedIn = useIsLoggedIn();
  console.log("isLoggedIn: ", isLoggedIn);

  useEffect(() => {
    isLoggedIn && navigate("/user");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col justify-between h-screen">
      <img className="w-3/4 self-center object-contain" src={earth} alt="" />
      <div className="flex flex-col gap-3 items-center mb-24">
        <Link
          to={"/login"}
          className="bg-gray-200 hover:bg-gray-300 text-black rounded-full px-3 py-1 w-fit"
        >
          Logga in
        </Link>
        <Link
          to={"/register"}
          className="bg-gray-200 hover:bg-gray-300 text-black rounded-full px-3 py-1 w-fit"
        >
          Registrera dig
        </Link>
      </div>
    </div>
  );
}
