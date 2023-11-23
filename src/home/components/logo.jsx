import { forwardRef } from "react";
import logo from "../../assets/images/IMG_0578-removebg-preview.png";

const Logo = forwardRef((props, ref) => {
  return (
    <div
      className="min-w-full min-h-full bg-[var(--primary-light)] flex flex-col  items-center gap-14 snap-start"
      ref={ref}
      id="home"
    >
      <div className=" w-full mt-20 h-5/6 flex flex-col justify-center items-center logo-container">
        <img
          src={logo}
          alt="Logo"
          className="relative mobile:self-center fade-in"
          width={300}
        />
      </div>
    </div>
  );
});

export default Logo;
