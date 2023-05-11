import React, { useState } from "react";
import { Link } from "react-router-dom";
import TrashCards from "../components/TrashCards";

export default function InfoPoints() {
  return (
    <div className=" grid grid-cols-3 gap-3  w-1/2 m-auto">
      <TrashCards type={"Kartong"} color={"fill-yellow-500 "} poäng={10} />
      <TrashCards type={"Tidning"} color={"fill-blue-500"} poäng={10} />
      <TrashCards type={"Plast"} color={"fill-orange-500"} poäng={20} />
      <TrashCards type={"Glas"} color={"fill-gray-500"} poäng={20} />
      <TrashCards type={"Elektronik"} color={"fill-red-500"} poäng={30} />
      <TrashCards type={"Pant"} color={"fill-purple-500"} poäng={50} />
      <TrashCards type={"Pant"} color={"fill-pink-500"} poäng={50} />
      <TrashCards type={"Matavfall"} color={"fill-green-500"} poäng={30} />
      <TrashCards type={"Övrigt"} color={"fill-black-500"} poäng={30} />
    </div>
  );
}
