import React from "react";
import bottle from "../assets/bottle.svg";
import chipsbag from "../assets/chipsbag.svg";
import elektronik from "../assets/elektronik.svg";
import glas from "../assets/glas.svg";
import kartong from "../assets/kartong.svg";
import kompost from "../assets/kompost.svg";
import metall from "../assets/metall.svg";
import tidning from "../assets/tidning.svg";
import tunna from "../assets/tunna.svg";
import lock from "../assets/lock.svg";

const imgUrl = new Array(
  bottle,
  kompost,
  elektronik,
  tidning,
  glas,
  metall,
  kartong,
  chipsbag
);

function Junks() {
  const [src, setSrc] = React.useState(tunna);

  return (
    <div className="flex flex-col justify-center items-center gap-12 h-full">
      <div className="flex justify-center">
        <img
          onDragOver={() => setSrc(lock)}
          onDragLeave={() => setSrc(tunna)}
          src={src}
          alt=""
        />
      </div>
      <div className="grid grid-cols-4 gap-10 w-1/2 content-end ">
        {imgUrl.map((src, i) => (
          <React.Fragment key={i}>
            <img draggable="true" id={i} src={src} alt="" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Junks;
