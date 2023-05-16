import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Epost from "../assets/Epost.svg";
import Qa from "../assets/Qa.svg";

const Help = () => {
  const [showQA, setShowQA] = useState(false);

  const toggleQA = () => {
    setShowQA(!showQA);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-20 w-full">
      <h1 className="text-3xl font-bold mb-8">
        <Link to="/user/settings" className="text-black">
          Inställningar
        </Link>
      </h1>
      <div className="flex flex-col items-center w-5/6 flex-grow"> {/* Updated width to w-5/6 */}
        <div className="w-full">
          <div className="text-center mb-4">
            <p className="text-lg font-bold mb-2">Hjälp</p>
            <p className="text-sm">Har du en fråga, ett förslag eller något annat att tillägga?</p>
          </div>
          <div
            className="bg-gray-100 border border-gray-300 rounded-lg py-2 px-6 flex items-center w-full mb-4 text-left"
            onClick={toggleQA}
          >
            <img className="w-4/4 self-center object-contain mr-3" src={Qa} alt="" />
            <div>
              <p className="text-base font-bold">VANLIGA FRÅGOR OCH SVAR</p>
              <p className="text-sm">Snabba svar på de vanligaste frågorna. Tillgängliga dygnet runt!</p>
            </div>
          </div>
          {showQA && (
            <div className="w-full">
              <div className="bg-gray-100 border border-gray-300 rounded-lg py-2 px-6 flex flex-col w-full mb-4 text-left">
                <p className="font-bold mb-2">Fråga:</p>
                <p>Vad är Earth Hero?</p>
                <p className="font-bold mt-4 mb-2">Svar:</p>
                <p>Earth Hero är en miljövänlig organisation som strävar efter att skydda och bevara vår planet.</p>
              </div>
            </div>
          )}
        </div>
        <div className="bg-gray-100 border border-gray-300 rounded-lg py-2 px-6 flex items-center w-full mb-4 text-left">
          <img className="w-4/4 self-center object-contain mr-3" src={Epost} alt="" />
          <div>
            <p className="text-base font-bold">E-POST</p>
            <p className="text-sm">Skicka ett meddelande till oss så återkommer vi så snart som möjligt.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
