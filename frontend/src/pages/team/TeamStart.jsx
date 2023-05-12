import { Link } from "react-router-dom";
import { RiTeamFill } from "react-icons/ri"

export default function TeamStart() {

    return (
        <div className="flex flex-col items-center w-3/4 m-auto">
            <div className="self-center flex items-center gap-2 my-8">
                <h1 className="text-4xl">Teams</h1>
                <RiTeamFill size={'36px'} />
            </div>
            <div className="flex flex-col items-center gap-4 w-full">
                <Link className="bg-sky-300 hover:bg-sky-400 active:bg-sky-400 text-black rounded-3xl py-8 w-full text-center" to={"create"}>Skapa team</Link>
                <Link className="bg-sky-300 hover:bg-sky-400 active:bg-sky-400 text-black rounded-3xl py-8 w-full text-center" to={"join"}>Gå med i team</Link>
                <Link className="bg-sky-300 hover:bg-sky-400 active:bg-sky-400 text-black rounded-3xl py-8 w-full text-center" to={"info"}>Vad är team?</Link>
            </div>
        </div>
    )
}