import sweden from "./assets/sweden.png"
import earth from "./assets/Earth-Transparent.png"

export default function Login() {
    return (
        <div className="flex flex-col items-center">
                    <img className="w-3/4 self-center object-contain max-w-lg" src={earth} alt="" />
                    <div className="flex flex-col items-center">
                        <label htmlFor="username">Användarnamn: </label>
                        <input className="w-56" id="username" type="text" />
                        <label htmlFor="password">Lösenord</label>
                        <input className="w-56" id="password" type="text" />
                        <button className="bg-gray-200 text-black rounded-full px-3 py-1 w-fit">Logga in</button>
                    </div>
                </div>
    )
}