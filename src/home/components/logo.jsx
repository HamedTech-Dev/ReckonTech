import { useEffect, useRef } from "react";
import { Scroller } from "../../utility/scroller";
import abstract_3d_2 from "../../assets/images/vecteezy_3d-abstract-background_17394964_192.png";
import logo from "../../assets/images/IMG_0578-removebg-preview.png";

function Logo({ setRef }) {
  const ref = useRef(null);

  useEffect(() => {
    setRef(ref, "Home");
  });

  return (
    <div
      className="w-[100vw] h-[100vh] bg-[var(--primary-light)] flex flex-col justify-between items-center"
      ref={ref}
    >
      <div className="h-5/6 flex flex-col items-center">
        <img
          src={abstract_3d_2}
          alt="something"
          className="self-center justify-self-end-end mt-[5%] w-[45%] mobile:invisible"
        />
        <img
          src={logo}
          alt="Logo"
          className="z-20 relative bottom-[75%] w-[25%] self-center mobile:self-center mobile:top-[33.33333%] mobile:w-[150%]"
        />
      </div>
      <Scroller />
    </div>
  );
}

export default Logo;
