import { useEffect } from "react"
import Button from "../components/button"
import { Link, useNavigate } from "react-router-dom"
import { useIsLoggedIn } from "../redux/isLoggedIn"

export default function User() {
    const navigate = useNavigate()
    const isLoggedIn = useIsLoggedIn()
    useEffect(() => {
        !isLoggedIn && navigate("/")
    }, [])

    return (
        <div className="flex gap-4 flex-col items-center">
            <h1>Välkommen!</h1><br />
            <Button  title={'Test'} color={'primary'} size={'small'} />
            <Button title={'SKICKA EN NY LÄNK'} color={'third'} size={'large'} />
            <Button  title={'Heropoäng'} color={'primary'} size={'square1'} icon={"letterh"} />
            <Button title={'Mitt konto'} color={'third'} size={'square2'} icon={'profile'} />
            <Link to={"team-start"}>Team</Link>
        </div>
    )
}

