import { useRef, useEffect } from "react";
import { Scroller } from "../../utility/scroller";
import chevron from "../../assets/icons/down-arrow.png";
import abstract_image from "../../assets/images/pexels-dids-3753025.jpg";

function Projects({ setRef }) {
  const componentRef = useRef(null);
  const containerRef = useRef(null);
  const projectsRefs = useRef({});

  useEffect(() => {
    setRef(componentRef, "Our works");
  });

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

export default Projects;
