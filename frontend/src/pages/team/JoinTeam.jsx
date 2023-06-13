import { useState } from "react"


export default function CreateTeam() {
    const [search, setSearch] = useState('')
    const [team, setTeam] = useState('')

    const temporaryList = ["Adele's team", "Agnes's team", "Billy's team", "Bob's team", "Calvin's team", "Christina's team", "Cindy's team"]

    function addToMembers(e) {
            setTeam(e.target.innerText)
    }

    return (
        <div className="flex flex-col items-center w-3/4 m-auto">
            <h1 className="text-4xl my-8">Gå med i team</h1>
            <div>
                <label htmlFor="add-member">Sök team:</label>
                <input onChange={(e) => setSearch(e.target.value)} type="text" id="add-member" className="rounded-full w-full mt-1 text-black px-2 py-1" />
            </div>
            <div className="w-full mt-2">
                <ul className="flex flex-col">
                    {temporaryList.map((name, i) => {
                        if (search == '') {
                            return
                        } else if (name.toLowerCase().startsWith(search.toLocaleLowerCase())) {
                            return <li key={i} className="bg-sky-200 hover:bg-sky-300 active:bg-sky-300 first:rounded-t-2xl last:rounded-b-2xl -mt-1 border border-sky-300 overflow-hidden">
                                <button onClick={(e) => addToMembers(e)} className="block w-full py-1">{name}</button>
                            </li>
                        }
                    }
                    )}
                </ul>
            </div>
            
            <div className="flex flex-col w-full mt-8">
                <h2>Team:</h2>
                <p>{team}</p>
                <button disabled={!team} className="self-end bg-sky-300 enabled:hover:bg-sky-400 enabled:active:bg-sky-400 disabled:opacity-70 text-black rounded-full px-3 py-1 w-fit mt-4">Skicka förfrågan</button>
            </div>
        </div>
    )
}