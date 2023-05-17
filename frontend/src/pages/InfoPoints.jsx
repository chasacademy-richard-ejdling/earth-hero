import React, { useState } from "react";
import { Link } from "react-router-dom";
import TrashCards from "../components/TrashCards";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function InfoPoints() {
  return (
    <div className=" grid grid-cols-2 gap-1 max-w-xs m-auto mb-20">
      <TrashCards type={"Kartong"} color={"fill-yellow-500 "} points={10} />
      <TrashCards type={"Tidning"} color={"fill-blue-500"} points={10} />
      <TrashCards type={"Plast"} color={"fill-orange-500"} points={20} />
      <TrashCards type={"Metal"} color={"fill-gray-500"} points={20} />
      <TrashCards type={"Glas"} color={"fill-red-500"} points={30} />
      <TrashCards type={"Elektronik"} color={"fill-purple-500"} points={50} />
      <TrashCards type={"Pant"} color={"fill-pink-500"} points={50} />
      <TrashCards type={"Matavfall"} color={"fill-green-500"} points={30} />
    </div>
  );
}
