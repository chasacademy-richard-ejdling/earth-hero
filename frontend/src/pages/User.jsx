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
        <div className="flex gap-4">
            <h1>Välkommen!</h1><br />
            <Button  title={'Test'} color={'primary'} size={'large'} />
            <Button title={'Test'} color={'primary'} size={'large'} />
            <Link to={"team-start"}>Team</Link>
        </div>
    )
}

