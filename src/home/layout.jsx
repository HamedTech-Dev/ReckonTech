import { useEffect, useMemo, useRef, useState } from "react";
import logo from "../assets/images/IMG_0578-removebg-preview.png";
import chevron from "../assets/icons/down-arrow.png";
import abstract_image from "../assets/images/pexels-dids-3753025.jpg";
import abstract_3d from "../assets/images/vecteezy_3d-fluid-glossy-shape_21879207_766.png";
import abstract_3d_2 from "../assets/images/vecteezy_3d-abstract-background_17394964_192.png";
import { Scroller } from "../utility/scroller";
import "./layout.css";

function HomeLayout() {
  const refrensList = [];

  const getReferences = (ref, ref_name) => {
    refrensList.push({ ref: ref, name: ref_name });

    return refrensList;
  };

  return (
    <>
      <div className="w-max pr-[65%] pointer-events-none h-15 fixed top-0 left-0 bg-transparent flex justify-evenly z-10 backdrop-blur-lg">
        <NavBtns refrensesList={refrensList} />
      </div>
      <div className="flex flex-col justify-evenly align-middle">
        <Logo setRef={getReferences} />
        <Information setRef={getReferences} />
        <TeamInfo setRef={getReferences} />
        <Projects setRef={getReferences} />
      </div>
    </>
  );
}

function NavBtns({ refrensesList }) {
  const [btnsState, setBtnsState] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);

  const navBtn = [
    {
      key: 0,
      name: "Home",
    },
    {
      key: 1,
      name: "About us",
    },
    {
      key: 2,
      name: "Team members",
    },
    {
      key: 3,
      name: "Our works",
    },
    {
      key: 4,
      name: "Polocy",
    },
  ];

  const changeBtnState = ({ key }) => {
    const newState = btnsState.map((state, index) => {
      if (index === key) state = true;
      else state = false;
      return state;
    });

    setBtnsState(newState);
  };

  const navigate = ({ name }) => {
    const { ref } = refrensesList.find((ref) => ref.name === name);

    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      {navBtn.map((btn) => {
        return (
          <button
            className={`bg-transparent text-[var(--dark)] py-2 px-3 m-2 text-center transition-all text-xl font-semibold pointer-events-auto ${
              btnsState[btn.key] ? "selected" : ""
            }`}
            onClick={() => {
              navigate(btn);
              changeBtnState(btn);
            }}
            key={btn.key}
          >
            {btn.name}
          </button>
        );
      })}
    </>
  );
}

function Logo({ setRef }) {
  const ref = useRef(null);

  useEffect(() => {
    setRef(ref, "Home");
  }, []);

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

function Information({ setRef }) {
  const ref = useRef(null);

  useEffect(() => {
    setRef(ref, "About us");
  }, []);

  return (
    <div
      className="bg-[var(--secondary-dark)] w-[100vw] flex flex-col justify-between items-end mobile:items-center px-10 mobile:px-2 h-[100vh] mobile:flex-col "
      ref={ref}
    >
      <Scroller down={false} ref={ref} />
      <div className="w-full h-4/6 flex mobile:flex-col mobile:11/12 mobile:gap-y-5 mobile:items-start">
        <div className="w-1/2 flex justify-center items-center mobile:w-full mobile:h-1/2">
          <img src={abstract_3d} alt="info" />
        </div>
        <div className="w-1/2 flex flex-col align-middle justify-center mobile:w-full mobile:h-2/3">
          <h1 className="font-bold text-[3vw] mobile:text-[10vw] indent-3 mb-3">
            About us
          </h1>
          <p className="text-[2vw] mobile:text-[7.2vw]">
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
}

function TeamInfo({ setRef }) {
  const ref = useRef(null);

  useEffect(() => {
    setRef(ref, "Team members");
  }, []);

  return (
    <div
      className="w-[100vw] h-[100vh] flex flex-col bg-[var(--tretry-light)] py-3 justify-between items-end px-10"
      ref={ref}
    >
      <Scroller down={false} />
      <div className="h-5/6"></div>
      <Scroller />
    </div>
  );
}

function Projects({ setRef }) {
  const componentRef = useRef(null);
  const containerRef = useRef(null);
  const projectsRefs = useRef({});

  useEffect(() => {
    setRef(componentRef, "Our works");
  }, []);

  const projects = [
    {
      key: 0,
      name: "pj1",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora consequuntur illo quae cum ratione? Unde cum quas, recusandae odit, adipisci accusamus voluptate odio sequi hic maxime illum suscipit et tempore.",
      image: { abstract_image },
    },
    {
      key: 1,
      name: "pj2",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora consequuntur illo quae cum ratione? Unde cum quas, recusandae odit, adipisci accusamus voluptate odio sequi hic maxime illum suscipit et tempore.",
      image: { abstract_image },
    },
    {
      key: 2,
      name: "pj3",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora consequuntur illo quae cum ratione? Unde cum quas, recusandae odit, adipisci accusamus voluptate odio sequi hic maxime illum suscipit et tempore.",
      image: { abstract_image },
    },
    {
      key: 3,
      name: "pj4",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora consequuntur illo quae cum ratione? Unde cum quas, recusandae odit, adipisci accusamus voluptate odio sequi hic maxime illum suscipit et tempore.",
      image: { abstract_image },
    },
  ];

  for (const project of projects) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    projectsRefs.current[project.key] = useRef(null);
  }
  const onClick = (mode, key) => {
    const nextCard =
      projectsRefs.current[key].current.parentElement.nextElementSibling;

    const previousCard =
      projectsRefs.current[key].current.parentElement.previousElementSibling;

    if (mode === "left" && key - 1 >= 0) {
      previousCard.scrollIntoView({
        behavior: "smooth",
      });
    } else if (mode === "right" && key + 1 <= projects.length) {
      nextCard.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div
        className="w-[100vw] h-[100vh] bg-[var(--primary-dark)] flex flex-col justify-between
        px-10 overflow-x-scroll"
        ref={componentRef}
      >
        <Scroller down={false} className="ml-auto" ref={componentRef} />
        <div className="w-full h-5/6 overflow-x-scroll" ref={containerRef}>
          <div className="h-full items-center w-max justify-center flex flex-nowrap">
            {projects.map((project) => {
              return (
                <div
                  className="w-[100vw] h-full flex justify-evenly items-center"
                  key={project.key}
                >
                  <div
                    className={`h-full w-20 flex items-center z-10 mr-5 ${
                      project.key - 1 >= 0 ? "visible" : "invisible"
                    }`}
                  >
                    <button
                      onClick={() => {
                        onClick("left", project.key);
                      }}
                    >
                      <img
                        src={chevron}
                        width={500}
                        alt="left"
                        className="rotate-90"
                      />
                    </button>
                  </div>
                  <div
                    className="cart w-[60vw]"
                    ref={projectsRefs.current[project.key]}
                  >
                    <img src={abstract_image} alt="project-look" width={250} />
                    <div className="flex flex-col w-2/3">
                      <h1 className="text-[3vw]">{project.name}</h1>
                      <p className="text-[1.5vw]">{project.info}</p>
                    </div>
                  </div>
                  <div
                    className={`h-full w-20 flex items-center z-10 ml-5 ${
                      project.key + 2 <= projects.length
                        ? "visible"
                        : "invisible"
                    }`}
                  >
                    <button
                      onClick={() => {
                        onClick("right", project.key);
                      }}
                    >
                      <img
                        src={chevron}
                        width={500}
                        alt="right"
                        className="-rotate-90"
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Scroller className="ml-auto" />
      </div>
    </>
  );
}

export default HomeLayout;
