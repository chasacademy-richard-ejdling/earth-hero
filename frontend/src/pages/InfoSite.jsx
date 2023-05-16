import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ellipse from "../assets/ellipse.svg";
import ProfileImg from "../components/ProfileImg";
import profilepic from "../assets/Frame 8.png"

;

function InfoSite() {
  return (
  
      <div className="flex flex-col items-center bg-white">
        <button className="flex items-center w-64 gap-6 bg-gray-200 text-xl px-12 py-4 rounded-xl m-8 ">
          <AiOutlineArrowLeft />
          Mitt konto
        </button>
       {/*  <img
          className="w-36 self-center object-contain"
          src={ellipse}
          alt=""
        /> */}
        <div className="flex w-72 items-center justify-center">
        <ProfileImg img={profilepic}/></div>
        <div className="w-64 self-center">
          <div>
          <label htmlFor="username" className="text-sm self-start flex">Namn:</label>
          
          <input
            className="rounded-lg w-64 mt-1 text-black px-2 py-1 border-solid border-2 border-gray-200"
            type="text"
          />
        </div>
        <div > 
          <label htmlFor="lastname" className="text-sm self-start flex">Efternamn:</label>
          
          <input
            className="rounded-lg w-64  mt-1 text-black px-2 py-1 border-solid border-2 border-gray-200"
            type="text"
          />
        </div>
        <div>
          <label className="text-sm self-start flex">E-post:</label>
          
          <input
            className="rounded-lg w-64  mt-1 text-black px-2 py-1 border-solid border-2 border-gray-200"
            type="text"
          />
        </div>
        <div>
          <label className="text- self-start flex">Ändra mitt lösenord:</label>
          
          <input
            className="rounded-lg w-64  mt-1 text-black px-2 py-1 border-solid border-2 border-gray-200"
            type="text"
          />
        </div> <br/>
        </div>
        <button className="flex self-center items-center border-solid border-2 border-green-500  
w-24 px-6 py-2 rounded-2xl text-green-500">    
 SPARA
</button>
        </div>




      
    
  );
}

export default InfoSite;