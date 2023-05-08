import { useState } from "react"


export default function CreateTeam() {
    const [search, setSearch] = useState('')
    const [members, setMembers] = useState([])

    const temporaryList = ["Adele", "Agnes", "Billy", "Bob", "Calvin", "Christina", "Cindy"]

    function addToMembers(e) {
        if (!members.includes(e.target.innerText)) {
            setMembers([...members, e.target.innerText])
        }
    }

    return (
        <div className="flex flex-col items-center w-3/4 m-auto">
            <h1 className="text-4xl my-8">Skapa team</h1>
            <div>
                <label htmlFor="add-member">Lägg till medlem:</label>
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
                <h2>Medlemmar:</h2>
                <ul className="ml-6">
                    {members.map((member, i) => <li key={i} className="list-disc">{member}</li>)}
                </ul>
                <button disabled={members.length == 0} className="self-end bg-sky-300 enabled:hover:bg-sky-400 enabled:active:bg-sky-400 disabled:opacity-70 text-black rounded-full px-3 py-1 w-fit mt-2">Skapa team</button>
            </div>
        </div>
    )
}