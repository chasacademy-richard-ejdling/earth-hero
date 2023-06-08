/* 
To use this component you need to create a useState "const [<stateName>, <setStateName>] = useState(false)"

Parameters:
    state: The <stateName> boolean from the useState that determines wether modal is open or not. Reccommended to be false by default.
    setState: Callback function to <setStateName> in the useState. Used to change the state to open and close the modal.
    children: The main content of the modal. Sould not include the misty-white background or the "X" to close the modal,
              they are allready in place.
*/


import { useEffect } from "react"
import close from "../assets/Close.svg"
import bodyScroll from "body-scroll-toggle"

export default function Modal({ state, setState, children }) {

    useEffect(() => {
        if (state === true) {
            bodyScroll.disable()
        } else {
            bodyScroll.enable()
        }
    }, [state])

    return (
        <div>
            {
                state && (
                    <div id='close' className='flex justify-end backdrop-blur-[2px] backdrop-brightness-[0.7] fixed top-0 right-0 z-10 h-screen w-screen' onClick={(e) => e.target.id === 'close' && setState(false)}>
                        <button className='fixed top-0 right-0 h m-2' onClick={() => setState(false)}><img src={close} /></button>
                        {children}
                    </div>
                )
            }
        </div>
    )
}