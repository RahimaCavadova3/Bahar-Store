import React from "react";
import AboutFoto1 from "/src/assets/img-6675a61b60628.png";
import AboutFoto2 from "/src/assets/img-6675a61b60b0f.png";
import AboutFoto3 from "/src/assets/img-6675a61b60ef7.png";
import AboutFoto4 from "/src/assets/img-6675a61b60ff9.png";

function Gallery1() {
  return (
    <>
      <img src={AboutFoto1} alt="aboutfoto1" />
      <img className="md:mt-10" src={AboutFoto2} alt="aboutfoto2" />
      <img src={AboutFoto3} alt="aboutfoto3" />
      <img className="md:mt-10" src={AboutFoto4} alt="aboutfoto4" />
    </>
  );
}

export default Gallery1;
