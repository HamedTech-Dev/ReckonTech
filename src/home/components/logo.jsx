import { forwardRef } from "react";
import { Scroller } from "../../utility/scroller";
import logo from "../../assets/images/IMG_0578-removebg-preview.png";

const Logo = forwardRef((props, ref) => {
  return (
    <div
      className="w-[100vw] h-[100vh] bg-[var(--primary-light)] flex flex-col  items-center gap-14"
      ref={ref}
      id="home"
    >
      <div className=" w-full h-5/6 flex flex-col justify-center items-center logo-container mt-8">
        <img
          src={logo}
          alt="Logo"
          className="relative mobile:self-center fade-in"
        />
      </div>
      <Scroller className="mobile:hidden" />
    </div>
  );
});

export default Logo;
