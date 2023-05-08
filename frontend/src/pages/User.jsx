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
        <div className="">
            <h1>Välkommen!</h1>
            <Button title={'Test'} color={'primary'} size={'small'} />
            <Button title={'Test'} color={'secondary'} size={'large'} />
            <Link to={"team"}>Team</Link>
        </div>
    )
}

