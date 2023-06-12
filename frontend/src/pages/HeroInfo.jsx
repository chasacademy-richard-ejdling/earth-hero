import startearth2 from "../assets/startearth1.svg";
import EarthHug from "../assets/EarthHug.png";
import EllipseGreen from "../assets/EllipseGreen.svg";
import Close from "../assets/Close.svg";
import { TbCircleLetterH } from "react-icons/tb";
import Bonus1 from "../assets/Bonus1.svg";
import Bonus2 from "../assets/Bonus2.png";
import Applefooter from "../assets/Applefooter.svg";

function HeroInfo() {
  return (
    <>
      <div className="bg-white w-full h-20">
        <div className="flex justify-end">
          <img className="p-4" src={Close} />
        </div>
      </div>
      <nav className="bg-EHGreen w-full h-32 pt-4 text-center ">
        <p className="text-3xl self-center object-contain ">
          {" "}
          ANYONE CAN BE A HERO
        </p>

        <img
          className=" self-center object-contain relative -bottom-[1.5rem] w-28 h-28 m-auto border-8 border-white rounded-full"
          src={EllipseGreen}
          alt=""
        />
      </nav>
      <div className="flex flex-col w-full min-h-screen bg-white">
        <div className=" flex pl-6">
        <p className="mt-16 flex flex-row gap-2 items-center text-2xl">
          <TbCircleLetterH />
          VÅRT EARTH HERO SPEL
        </p>
        </div>
        <div className="pl-2">
        <p className="text-xl mt-4 self-start pl-6">Vad är Hero?</p>
        <p className="px-6 font-semibold">
          Hero är bonuspoäng som du får när du återvinner med Earth Hero.
          Poängen kan du sedan använda som betalning - med bonusrabatter på 2500
          Hero eller 5000 Hero - på våra deltagande partnerrestauranger Espresso
          House, Starbucks eller KFC.
        </p>
        </div>
        <div className="flex mt-4 items-center space-x-2 pl-8">
          <img className="" src={Bonus1} />
          <img className="" src={Bonus2} />
        </div>
        <p className="text-xl mt-4 self-start pl-6">Hur tjänar jag Hero?</p>
       <div className=" relative ml-8 mt-4 object-contain flex flex-row items-center gap-6 items-c ">  <img
          className=" rounded-full w-28 h-28 drop-shadow-md mt-4"
          src={EllipseGreen}
          alt=""
        />
        <div className="absolute bottom-0 left-0 right-0 px-10 py-10 ">
          <p className="font-semibold">10-50 <br />Hero</p>
        </div>
        <p className="text-lg font-semibold">När du återvinner i appen</p></div>
        <div className=" relative ml-8 mt-4 mb-4 object-contain flex flex-row items-center gap-6 items-c ">
        <img
          className=" rounded-full w-28 h-28 drop-shadow-md"
          src={EllipseGreen} 
          alt=""
        />
        <div className="absolute bottom-0 left-0 right-0 px-10 py-10 ">
          <p className="font-semibold">20 <br />Hero</p>
        </div>
        <p className="text-lg font-semibold">När du bjuder in en ny teammemdlem</p></div>
        <p className="text-xl mt-4 self-start pl-6">Hur spenderar jag Hero?</p>
        <div className="p-8">
          <p className="text-lg mt-2 font-semibold">Tjäna Hero</p>
          <p className="font-semibold">
            Separera olika typer av avfall för att underlätta återvinning och få
            Hero poäng.{" "}
          </p>
          <p className="text-lg mt-6 font-semibold">Rabatt</p>
          <p className="font-semibold">
            Kaffe eller restaurang drar av 2500 Hero poäng eller max 5000 Hero
            poäng från din konto.
          </p>
        </div>
        <img className=""src={Applefooter}/>
      </div>
    </>
  );
}

export default HeroInfo;
