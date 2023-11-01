import { useRef, useState, useEffect } from "react";
import { Scroller } from "../../utility/scroller";

function TeamInfo({ setRef }) {
  const Ramins_info = {
    name: "Ramin Darudi",
    description: "Back-end, Database and Wordpress Developer",
  };

  const Kuroshs_info = {
    name: "Kurosh Zhale Rajabi",
    description: "Front-end, Back-end and Wordpress Developer",
  };

  const Hameds_info = {
    name: "Hamed Ghasemi",
    description: "Bussiness and Marketing Manager",
  };

  const ref = useRef(null);
  const [main, setMain] = useState(Ramins_info);

  useEffect(() => {
    setRef(ref, "Team members");
    let timeout;

    if (timeout || timeout === 0) clearTimeout(timeout);
    timeout = setTimeout(changeSequence, 5000);
  });

  const changeSequence = () => {
    let main_member = main;

    if (main_member.name.includes("Ramin")) main_member = Kuroshs_info;
    else if (main_member.name.includes("Kurosh")) main_member = Hameds_info;
    else if (main_member.name.includes("Hamed")) main_member = Ramins_info;

    setMain(main_member);
  };

  const onClick = (profile) => {
    let main_member;

    switch (profile) {
      default:
        break;
      case "ramin":
        main_member = Ramins_info;
        break;
      case "kurosh":
        main_member = Kuroshs_info;
        break;
      case "hamed":
        main_member = Hameds_info;
        break;
    }

    setMain(main_member);
  };

  return (
    <div
      className="w-[100vw] h-[100vh] flex flex-col bg-[var(--tretry-light)] py-3 justify-between items-end px-10"
      ref={ref}
    >
      <Scroller down={false} />
      <div className="h-5/6 w-full flex flex-col my-auto justify-center items-center">
        <h1 className="h-1/3 text-[3vw] font-bold text-[var(--drak)] text-center">
          Team Members
        </h1>
        <div className="h-min w-full flex gap-5 justify-evenly laptop:px-32 items-center">
          <div
            className={`ramin_profile ${
              main.name === Ramins_info.name ? "main" : "side"
            } w-[200px] h-[200px] pc:w-[500px] pc:h-[500px]`}
            hidden={false}
            onClick={() => onClick("ramin")}
          ></div>
          <div
            className={`kurosh_profile ${
              main.name === Kuroshs_info.name ? "main" : "side"
            } w-[200px] h-[200px] pc:w-[500px] pc:h-[500px]`}
            hidden={false}
            onClick={() => onClick("kurosh")}
          ></div>
          <div
            className={`hamed_profile ${
              main.name === Hameds_info.name ? "main" : "side"
            } w-[200px] h-[200px] pc:w-[500px] pc:h-[500px]`}
            hidden={false}
            onClick={() => onClick("hamed")}
          ></div>
        </div>
        <div className="h-1/3 w-full flex flex-col items-center">
          <h1 className="font-semi text-center text-[2.5vw] text-[var(--light)]">
            {main.name}
          </h1>
          <span className="text-center text-[var(--dark)] opacity-75 text-[1.2vw]">
            {main.description}
          </span>
        </div>
      </div>
      <Scroller />
    </div>
  );
}

export default TeamInfo;
