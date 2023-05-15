import React from 'react';
import { Link } from 'react-router-dom';
import EarthHeroiconSVG from "../assets/Earth-Hero-icon.svg";

const Info = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-20 w-full">
      <h1 className="text-3xl font-bold mb-8">
        <Link to="/user/settings" className="text-black">
          Inställningar
        </Link>
      </h1>
      <div className="flex flex-col items-center w-5/6 flex-grow">
        <div className="w-full">
          <div className="text-center mb-4">
            <p className="text-lg font-bold mb-2">Om Earth Hero</p>
          </div>
          <div className="flex items-center justify-center">
            <img src={EarthHeroiconSVG} alt="Earth Hero" className="w-3/3" />
          </div>
        </div>
        <div className="bg-gray-100 border border-gray-300 rounded-lg py-4 px-6 flex items-center w-full mb-4 text-left">
          <div className="w-full">
            <p className="text-base px-4 py-2"> 
              Earth Hero är ett spel där spelarna utmanas att bli medvetna om vikten av återvinning, minska skräp och negativ miljöpåverkan.
            </p>
            <br />
            <p className="px-4 py-2">
              Målet är att inspirera spelarna att ta med sig kunskapen från spelet till den verkliga världen och bli "Earth Hero" genom att aktivt bidra till en renare och mer hållbar planet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
