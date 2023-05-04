import sweden from "../assets/sweden.png";
import earth from "../assets/Earth-Transparent.png";
import { useState } from "react";

export default function Register() {
  const [policyChecked, setPolicyChecked] = useState(false);

  console.log(policyChecked);

  return (
    <div className="flex flex-col items-center">
      <img
        className="w-3/4 self-center object-contain max-w-lg"
        src={earth}
        alt=""
      />
      <div className="flex flex-col gap-2 w-3/4">
        <div>
          <label htmlFor="username">Användarnamn:</label>
          <br />
          <input
            className="rounded-full w-full mt-1 text-black px-2 py-1"
            id="username"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            className="rounded-full w-full mt-1 text-black px-2 py-1"
            id="email"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="password">Lösenord:</label>
          <br />
          <input
            className="rounded-full w-full mt-1 text-black px-2 py-1"
            id="password"
            type="text"
          />
        </div>
        <label htmlFor="policy" className="block">
          <input
            type="checkbox"
            id="policy"
            className="align-middle relative bottom-[1px] mr-1"
            onClick={() => setPolicyChecked(!policyChecked)}
          />
          Godkänn policy
        </label>
        <button className="self-end bg-gray-200 hover:bg-gray-300 text-black rounded-full px-3 py-1 w-fit">
          Registra dig
        </button>
      </div>
    </div>
  );
}
