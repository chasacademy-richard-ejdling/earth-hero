import React, { useState } from "react";
import Button from "./button";
import startearth2 from "../assets/startearth1.svg";
import stars from "../assets/stars.svg";
import hamburgermeny from "../assets/hamburgermeny.svg";
import Modal from "./Modal";
import TeamPoints from "../pages/TeamPoints";
import { Link } from "react-router-dom";
import Settings from "../pages/Settings";
import InfoPoints from "../pages/InfoPoints";

export default function NavBar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [openPoints, setOpenPoints] = useState(false)
  const [openAccount, setOpenAccount] = useState(false)
  const [openSettings, setOpenSettings] = useState(false)
  const [openPointInfo, setOpenPointInfo] = useState(false)
  const [openLogout, setOpenLogout] = useState(false)
  const [startButton, setStartButton] = useState(false)

  return (
    <>

      <nav className="bg-blue-900  mt-24 w-full h-16 fixed bottom-0 left-0  flex flex-row text-center rounded-t-2xl">
        <div className=" flex w-full justify-between items-center m-4 p-4 ">
          <button onClick={() => setOpenPoints(true)}>
            <img
              className="w-8 self-center object-contain"
              src={stars}
              alt=""
            />
          </button>
          <div>
            {startButton ? (
              <Link className="object-contain relative -top-[1rem]" to={'/team'} onClick={() => setStartButton(!startButton)}>
                <img
                  className=" object-contain w-16 md:h-32 m-auto "
                  src={startearth2}
                  alt=""
                />
              </Link>
            ) : (
              (
                <Link className="object-contain relative -top-[1rem]" to={'/junks'} onClick={() => setStartButton(!startButton)}>
                  <img
                    className=" object-contain w-16 md:h-32 m-auto "
                    src={startearth2}
                    alt=""
                  />
                </Link>
              )
            )}
          </div>
          <button onClick={() => setHamburgerOpen(true)}>
            <img
              className="w-8 self-center object-contain"
              src={hamburgermeny}
              alt="Hamburger Menu Button"
            />
          </button>
        </div>

      </nav>

      <Modal state={openPoints} setState={setOpenPoints} type='cross' >
        <div className='w-full h-full'>
          <TeamPoints />
        </div>
      </Modal>
      <Modal state={hamburgerOpen} setState={setHamburgerOpen} type='cross' >
        <ul className='flex flex-col w-3/4 mx-auto my-[25vh] h-fit'>
          <li key={1} className="bg-sky-300 hover:bg-sky-400 active:bg-sky-400 first:rounded-t-2xl last:rounded-b-2xl -mt-1 border border-EHGreen overflow-hidden">
            <button onClick={() => setOpenAccount(true)} className="block w-full py-2">Mitt konto</button>
          </li>
          <li key={2} className="bg-sky-300 hover:bg-sky-400 active:bg-sky-400 first:rounded-t-2xl last:rounded-b-2xl -mt-1 border border-EHGreen overflow-hidden">
            <button onClick={() => setOpenSettings(true)} className="block w-full py-2">Inställningar</button>
          </li>
          <li key={3} className="bg-sky-300 hover:bg-sky-400 active:bg-sky-400 first:rounded-t-2xl last:rounded-b-2xl -mt-1 border border-EHGreen overflow-hidden">
            <button onClick={() => setOpenPointInfo(true)} className="block w-full py-2">Hero poäng</button>
          </li>
          <li key={4} className="bg-sky-300 hover:bg-sky-400 active:bg-sky-400 first:rounded-t-2xl last:rounded-b-2xl -mt-1 border border-EHGreen overflow-hidden">
            <button onClick={() => setOpenLogout(true)} className="block w-full py-2">Logga ut</button>
          </li>
        </ul>
      </Modal>
      <Modal state={openAccount} setState={setOpenAccount} type='arrow' title='Mitt konto'></Modal>
      <Modal state={openSettings} setState={setOpenSettings} type='arrow' title='Inställningar'>
        <Settings />
      </Modal>
      <Modal state={openPointInfo} setState={setOpenPointInfo} type='arrow' title='Hero poäng'>
        <InfoPoints />
      </Modal>
      <Modal state={openLogout} setState={setOpenLogout} type='cross' ></Modal>
    </>
  );
}

/* Hamburger meny (kolla instruktioner för användande i Modal.jsx (för state och setState parametrarna) + Lägga till iconer framför texten i knapparna(react-icons?)).
   Sen bara att koppla till hamburger knappen samtlänka knapparna i menyn til respektive sida:
    <Modal state={} setState={}>
        <ul className='flex flex-col w-3/4 mx-auto my-[25vh] h-fit'>
            <li key={1} className="bg-sky-300 hover:bg-sky-400 active:bg-sky-400 first:rounded-t-2xl last:rounded-b-2xl -mt-1 border border-EHGreen overflow-hidden">
                <button className="block w-full py-2">Mitt konto</button>
            </li>
            <li key={2} className="bg-sky-300 hover:bg-sky-400 active:bg-sky-400 first:rounded-t-2xl last:rounded-b-2xl -mt-1 border border-EHGreen overflow-hidden">
                <button className="block w-full py-2">Inställningar</button>
            </li>
            <li key={3} className="bg-sky-300 hover:bg-sky-400 active:bg-sky-400 first:rounded-t-2xl last:rounded-b-2xl -mt-1 border border-EHGreen overflow-hidden">
                <button className="block w-full py-2">Hero Poäng</button>
            </li>
            <li key={4} className="bg-sky-300 hover:bg-sky-400 active:bg-sky-400 first:rounded-t-2xl last:rounded-b-2xl -mt-1 border border-EHGreen overflow-hidden">
                <button className="block w-full py-2">Logga ut</button>
            </li>
        </ul>
    </modal>
*/