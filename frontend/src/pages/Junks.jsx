import React from "react";
import plast from "../assets/plast.svg";
import kompost from "../assets/kompost.svg";
import elektronik from "../assets/elektronik.svg";
import tidning from "../assets/tidning.svg";
import glas from "../assets/glas.svg";
import metall from "../assets/metall.svg";
import tunna from "../assets/tunna.svg";
import lock from "../assets/lock.svg";

const imgUrl = new Array(plast, kompost, elektronik, tidning, glas, metall);

function Junks() {
  const [src, setSrc] = React.useState(tunna);

  return (
    <>
      <div className="flex flex-col items-center">
        <img
          onDragOver={() => setSrc(lock)}
          onDragLeave={() => setSrc(tunna)}
          src={src}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center">
        {imgUrl.map((src, i) => (
          <React.Fragment key={i}>
            <img draggable="true" id={i} src={src} alt="" />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default Junks;
