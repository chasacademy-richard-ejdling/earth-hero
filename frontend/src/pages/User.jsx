import { useEffect } from "react"
import Button from "../components/button"
import { Link, useNavigate } from "react-router-dom"
import { useIsLoggedIn } from "../redux/isLoggedIn"

export default function User() {
    const navigate = useNavigate()
    const isLoggedIn = useIsLoggedIn()
    /* useEffect(() => {
        !isLoggedIn && navigate("/")
    }, []) */

    return (
        <div className="flex gap-4 flex-col items-center">
            <h1>Välkommen!</h1><br />
            {/* <Button  title={'Test'} color={'primary'} size={'small'} />
            <Button title={'SKICKA EN NY LÄNK'} color={'third'} size={'large'} />
            <Button  title={'Heropoäng'} color={'primary'} size={'square1'} icon={"letterh"} />
            <Button title={'Mitt konto'} color={'third'} size={'square2'} icon={'profile'} /> */}
            <Link className="bg-sky-300 enabled:hover:bg-sky-400 disabled:opacity-70 text-black rounded-full px-3 py-1 w-fit" to={"team-start"}>Team</Link>
            <Link className="bg-sky-300 enabled:hover:bg-sky-400 disabled:opacity-70 text-black rounded-full px-3 py-1 w-fit" to={"team/teamname"}>Team Home</Link>
            <Link className="bg-sky-300 enabled:hover:bg-sky-400 disabled:opacity-70 text-black rounded-full px-3 py-1 w-fit" to={'points'}>Points</Link>
            <Link className="bg-sky-300 enabled:hover:bg-sky-400 disabled:opacity-70 text-black rounded-full px-3 py-1 w-fit" to={'info-points'}>Info Points</Link>
            <Link className="bg-sky-300 enabled:hover:bg-sky-400 disabled:opacity-70 text-black rounded-full px-3 py-1 w-fit" to={'settings'}>Settings</Link>
            <Link className="bg-sky-300 enabled:hover:bg-sky-400 disabled:opacity-70 text-black rounded-full px-3 py-1 w-fit" to={'settings/infosite'}>Profil</Link>
        </div>
    )
}

