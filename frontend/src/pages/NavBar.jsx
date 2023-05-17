import React from "react";
import Button from "../components/button";
import startearth2 from "../assets/startearth1.svg";
import stars from "../assets/stars.svg";
import hamburgermeny from "../assets/hamburgermeny.svg";

export default function NavBar() {
  return (
    <>
      <nav className="bg-blue-900  mt-24 w-full h-16 fixed bottom-0 left-0  flex flex-row text-center rounded-t-2xl">
        <div className=" flex w-full justify-between items-center m-4 p-4 ">
          <button className="">
            <img
              className="w-8 self-center object-contain"
              src={stars}
              alt=""
            />
          </button>
          <div>
            <button className="object-contain h-36">
              <img
                className=" self-center object-contain relative -top-[1rem] w-16  md:h-32 m-auto "
                src={startearth2}
                alt=""
              />
            </button>
          </div>
          <button>
            <img
              className="w-8 self-center object-contain"
              src={hamburgermeny}
              alt=""
            />
          </button>
        </div>
      </nav>
    </>
  );
}
