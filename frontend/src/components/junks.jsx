import React from "react";
import plast from "./assets/plast.svg";
import kompost from "./assets/kompost.svg";
import elektronik from "./assets/elektronik.svg";
import tidning from "./assets/tidning.svg";
import glas from "./assets/glas.svg";
import metall from "./assets/metall.svg";
import tunna from "./assets/tunna.svg";
import lock from "./assets/lock.svg";

const imgUrl = new Array(
  plast,
  kompost,
  elektronik,
  tidning,
  glas,
  metall,
  tunna,
  lock
);

function App() {
  return (
    <>
      {imgUrl.map((s, i) => (
        <div key={i} className="flex column items-baseline mb-8">
          <h2 style={{ fontSize: 30 }}>text</h2>
          <img src={`.${s}`} alt="" />
        </div>
      ))}
    </>
  );
}

export default App;
