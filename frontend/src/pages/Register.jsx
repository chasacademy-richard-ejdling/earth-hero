import sweden from "../assets/sweden.png"
import logo from "../assets/logo.svg"
import { useState } from "react"
import { RxCross2 } from "react-icons/rx"
import Modal from "../components/Modal"
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [policyChecked, setPolicyChecked] = useState(false)
    const [readingPolicy, setReadingPolicy] = useState(false)

    console.log(policyChecked);

    const navigate = useNavigate()

    function handleRegister() {
        const user = {
          username: username,
          password: password,
          email: email,
        }
    
        fetch("http://localhost:7000/register", {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => {
            if (res.ok) {
                navigate("/user")
            } else {
                // visa fel för användaren och reset input och state.
            }
          })
      }

    return (
        <div className="flex flex-col items-center">
            <img className="w-3/4 self-center object-contain max-w-lg mt-8" src={logo} alt="Earth Hero Logo" />
            <div className="flex flex-col gap-2 w-3/4 mt-8">
                <div>
                    <label htmlFor="username">Användarnamn:</label>
                    <br />
                    <input onChange={(e) => setUsername(e.target.value)} className="rounded-full w-full mt-1 text-black px-2 py-1" id="username" type="text" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <br />
                    <input onChange={(e) => setEmail(e.target.value)} className="rounded-full w-full mt-1 text-black px-2 py-1" id="email" type="text" />
                </div>
                <div>
                    <label htmlFor="password">Lösenord:</label>
                    <br />
                    <input onChange={(e) => setPassword(e.target.value)} className="rounded-full w-full mt-1 text-black px-2 py-1" id="password" type="text" />
                </div>
                <label htmlFor="policy" className="block">
                    <input type="checkbox" id="policy" className="align-middle relative bottom-[1px] mr-1" onClick={() => setPolicyChecked(!policyChecked)} />
                    Godkänn <button onClick={() => setReadingPolicy(true)} className="underline text-blue-600">policy</button>
                </label>
                <button onClick={handleRegister} disabled={!username || !email || !password || !policyChecked} className="self-end bg-gray-200 enabled:hover:bg-gray-300 disabled:opacity-70 text-black rounded-full px-3 py-1 w-fit">Registra dig</button>
            </div>
            <Modal state={readingPolicy} setState={setReadingPolicy} type='cross'>
                <div className='flex flex-col w-3/4 m-auto h-fit bg-sky-300 p-4 rounded-lg max-h-[75%] overflow-scroll'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aut quasi aliquam consequatur earum nulla suscipit maiores vitae nostrum minima eveniet aperiam, mollitia quisquam molestias deserunt eaque maxime numquam exercitationem.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque alias aspernatur ratione in eaque ut sed commodi nam error distinctio vitae eveniet doloribus, quia possimus esse ipsa, assumenda eos aperiam!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestias ad temporibus aliquid beatae ducimus dolores velit. Inventore officiis, est, beatae velit rem consequatur, labore iure aperiam aliquid aut magni?
                    </p>
                </div>
            </Modal>
        </div>
    );
}