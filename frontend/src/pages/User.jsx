import Button from "../components/button"

export default function User() {

    return (
        <div className="">
            <h1>Välkommen!</h1>
            <Button title={'Test'} color={'primary'} size={'small'} />
            <Button title={'Test'} color={'secondary'} size={'large'} />
        </div>
    )
}