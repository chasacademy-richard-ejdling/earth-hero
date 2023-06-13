import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Settings = () => {
  const [activeButtons, setActiveButtons] = useState([]);

  const handleButtonClick = (buttonId) => {
    if (activeButtons.includes(buttonId)) {
      setActiveButtons(activeButtons.filter((id) => id !== buttonId)); // Remove button from activeButtons
    } else {
      setActiveButtons([...activeButtons, buttonId]); // Add button to activeButtons
    }
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen pt-20 w-full">
      <h1 className="text-3xl font-bold mb-8">Inställningar</h1>
      <div className="flex flex-col items-center w-3/5 flex-grow">
        <div className="w-full">
          <Link to="/settings/info">
            <button
              className={`${
                activeButtons.includes('page1') ? 'bg-green-300 text-white transform scale-105' : 'bg-gray-100'
              } transition-transform duration-300 ease-in-out border border-gray-300 rounded-lg py-2 px-6 flex items-center w-full mb-4 text-left`}
              onClick={() => handleButtonClick('page1')}
            >
              Om Earth Hero
            </button>
          </Link>
          <Link to="#">
            <button
              className={`${
                activeButtons.includes('page2') ? 'bg-green-300 text-white transform scale-105' : 'bg-gray-100'
              } transition-transform duration-300 ease-in-out border border-gray-300 rounded-lg py-2 px-6 flex items-center w-full mb-4 text-left`}
              onClick={() => handleButtonClick('page2')}
            >
              Energisparläge med tryckskydd
            </button>
          </Link>
          <Link to="#">
            <button
              className={`${
                activeButtons.includes('page3') ? 'bg-green-300 text-white transform scale-105' : 'bg-gray-100'
              } transition-transform duration-300 ease-in-out border border-gray-300 rounded-lg py-2 px-6 flex items-center w-full mb-4 text-left`}
              onClick={() => handleButtonClick('page3')}
            >
              Hantera prestanda automatisk
            </button>
          </Link>
          <Link to="/settings/help">
            <button
              className={`${
                activeButtons.includes('page4') ? 'bg-green-300 text-white transform scale-105' : 'bg-gray-100'
              } transition-transform duration-300 ease-in-out border border-gray-300 rounded-lg py-2 px-6 flex items-center w-full mb-4 text-left`}
              onClick={() => handleButtonClick('page4')}
            >
              Hjälp
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Settings;


