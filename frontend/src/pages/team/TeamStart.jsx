import { Link } from "react-router-dom";
import { RiTeamFill } from "react-icons/ri"

export default function TeamStart() {

    return (
        <div className="flex flex-col h-screen">
            <div className="flex items-center justify-center gap-2 my-8">
                <h1 className="text-4xl">Teams</h1>
                <RiTeamFill size={'36px'} />
            </div>
            <div className="flex flex-col grow items-center w-3/4 m-auto">
                <div className="flex flex-col items-center justify-evenly gap-4 w-full h-1/2">
                    <Link className="bg-sky-300 hover:bg-sky-400 active:bg-sky-400 text-black rounded-3xl py-8 w-full text-center" to={"create"}>Skapa team</Link>
                    <Link className="bg-sky-300 hover:bg-sky-400 active:bg-sky-400 text-black rounded-3xl py-8 w-full text-center" to={"join"}>Gå med i team</Link>
                </div>
            </div>
        </div>
    )
}