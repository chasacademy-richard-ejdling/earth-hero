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
import arrow from "../assets/Arrow.svg"
import bodyScroll from "body-scroll-toggle"

export default function Modal({ state, setState, children, type, title }) {

    /* useEffect(() => {
        if (state === true) {
            bodyScroll.disable()
            console.log('YES')
        } else {
            bodyScroll.enable()
            console.log('NO')
        }
    }, [state]) */

    return (
        <div>
            {
                state && (
                    type === 'cross' ?
                        <div id='close' className='flex justify-end backdrop-blur-[2px] backdrop-brightness-[0.7] fixed top-0 right-0 z-10 h-screen w-screen overflow-scroll' onClick={(e) => e.target.id === 'close' && setState(false)}>
                            <button className='fixed top-0 right-0 h m-2' onClick={() => setState(false)}><img src={close} /></button>
                            {children}
                        </div> :
                        type === 'arrow' &&
                            <div className="flex flex-col bg-white p-4 fixed top-0 right-0 z-20 h-screen w-screen overflow-scroll">
                                <div className='flex items-center justify-center gap-2 text-lg bg-EHGreen w-1/2 h-fit'>
                                    <button onClick={() => setState(false)}><img src={arrow} alt="back button" /></button>
                                    <p>{title}</p>
                                </div>
                                {children}
                            </div>
                )
            }
        </div>
    )
}