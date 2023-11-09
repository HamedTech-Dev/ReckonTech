import { forwardRef } from "react";
import { Scroller } from "../../utility/scroller";
import abstract_3d from "../../assets/images/vecteezy_3d-fluid-glossy-shape_21879207_766.png";

const Information = forwardRef((props, ref) => {
  return (
    <div
      className="bg-[var(--secondary-dark)] w-[100vw] flex flex-col justify-between items-end mobile:items-center px-10 mobile:px-2 h-[100vh] mobile:flex-col "
      ref={ref}
      id="about-us"
    >
      <Scroller down={false} ref={ref} />
      <div className="w-full h-4/6 mobile:h-full flex mobile:flex-col mobile:gap-y-5 mobile:items-start">
        <div className="w-1/2 flex justify-center items-center mobile:w-full mobile:h-1/2">
          <img src={abstract_3d} alt="info" />
        </div>
        <div className="w-1/2 flex flex-col align-middle justify-center mobile:w-full mobile:h-2/3">
          <h1 className="font-bold text-[3vw] mobile:text-[10vw] mobile:text-center text-[var(--dark)] indent-3 mb-3">
            About us
          </h1>
          <p className="text-[2vw] mobile:text-[7.2vw] mobile:pl-5">
            ReckonTech is a software solutions company based in Stockholm,
            Sweden. At ReckonTech, we're passionate about harnessing
            cutting-edge technology to craft exceptional digital experiences.
            With expertise in frontend and backend development, robust database
            solutions, and a strong focus on DevOps practices, we empower
            businesses to thrive in the digital landscape.
          </p>
        </div>
      </div>
      <Scroller />
    </div>
  );
});

export default Information;
