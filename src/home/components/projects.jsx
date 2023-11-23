import { useRef, forwardRef, useState, useEffect } from "react";
import { Scroller } from "../../utility/scroller";
import chevron from "../../assets/icons/down-arrow.png";
import abstract_image from "../../assets/images/pexels-dids-3753025.jpg";

const Projects = forwardRef((props, componentRef) => {
  const containerRef = useRef(null);
  const projectsRefs = useRef({});

  const [content_size, set_contetn_size] = useState({ width: 0, height: 0 });

  useEffect(() => {
    set_contetn_size(containerRef.current.getBoundingClientRect());
  }, []);

  const projects = [
    {
      key: 0,
      name: "project1",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora consequuntur illo quae cum ratione? Unde cum quas, recusandae odit, adipisci accusamus voluptate odio sequi hic maxime illum suscipit et tempore.",
      image: abstract_image,
    },
    {
      key: 1,
      name: "project2",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora consequuntur illo quae cum ratione? Unde cum quas, recusandae odit, adipisci accusamus voluptate odio sequi hic maxime illum suscipit et tempore.",
      image: abstract_image,
    },
    {
      key: 2,
      name: "project3",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora consequuntur illo quae cum ratione? Unde cum quas, recusandae odit, adipisci accusamus voluptate odio sequi hic maxime illum suscipit et tempore.",
      image: abstract_image,
    },
    {
      key: 3,
      name: "project4",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora consequuntur illo quae cum ratione? Unde cum quas, recusandae odit, adipisci accusamus voluptate odio sequi hic maxime illum suscipit et tempore.",
      image: abstract_image,
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
      if (window.innerWidth > 564)
        containerRef.current.scrollTo({
          left: previousCard.offsetLeft,
          behavior: "smooth",
        });
      else
        containerRef.current.scrollTo({
          top: nextCard.offsetTop,
          behavior: "smooth",
        });
    } else if (mode === "right" && key + 1 <= projects.length) {
      if (window.innerWidth > 564)
        containerRef.current.scrollTo({
          left: nextCard.offsetLeft,
          behavior: "smooth",
        });
      else
        containerRef.current.scrollTo({
          top: nextCard.offsetTop,
          behavior: "smooth",
        });
    }

    console.dir(previousCard);
  };

  return (
    <>
      <div
        className="w-[100vw] h-[100vh] bg-[var(--primary-dark)] flex flex-col justify-start mobile:justify-start overflow-x-scroll"
        ref={componentRef}
        id="projects"
      >
        <div className="mobile:bg-transparent mobile:backdrop-blur-xl">
          <Scroller
            down={false}
            className="ml-auto mobile:mx-auto mobile:hidden"
            ref={componentRef}
          />
          <h1 className="text-[3vw] text-[var(--dark)] font-bold text-center w-full h-1/6 mobile:text-[10vw] mobile:h-min mobile:mb-5">
            Projects
          </h1>
        </div>
        <div
          className="w-full h-5/6 flex justify-start items-start align-middle overflow-x-scroll overflow-y-hidden mobile:overflow-y-scroll mobile:overflow-x-hidden"
          ref={containerRef}
        >
          <div className="h-full items-start w-max justify-start flex flex-nowrap mobile:flex-col mobile:w-full mobile:h-max">
            {projects.map((project) => {
              return (
                // carousel content container
                <div
                  className="flex w-[100vw] justify-evenly items-center mobile:flex-col mobile:h-min px-10 my-20"
                  style={{
                    width: content_size.width,
                    height: content_size.height,
                  }}
                  key={project.key}
                >
                  {/* left/top chevron */}
                  <div
                    className={`h-full w-1/5 mobile:mx-auto mobile:w-full flex items-center z-10 mr-5  mobile:hidden ${
                      project.key - 1 >= 0 ? "visible" : "invisible"
                    }`}
                  >
                    <button
                      onClick={() => {
                        onClick("left", project.key);
                      }}
                      className="flex items-center w-full h-full justify-center"
                    >
                      <img
                        src={chevron}
                        width={window.innerWidth > 564 ? 500 : 80}
                        alt="left"
                        className="rotate-90 mobile:rotate-180 scale-[0.25] z-10"
                      />
                    </button>
                  </div>

                  {/* cart container */}
                  <div
                    className="w-3/5 h-full flex justify-center align-middle items-center p-5 mobile:w-full mobile:justify-start my-10 mobile:h-min"
                    ref={projectsRefs.current[project.key]}
                  >
                    <div className="cart w-full h-full flex flex-row gap-x-3 mobile:gap-4 mobile:flex-col m-auto mobile:h-min">
                      {/* conetnt image container */}
                      <img src={project.image} alt="project-look" width={450} loading="lazy"/>

                      {/* content container */}
                      <div className="flex h-full flex-col w-2/3 mobile:w-full mobile:h-2/3 mobile:px-3 mobile:pb-4">
                        <h1 className="text-[3vw] font-semibold mobile:mb-3 mobile:text-[10vw] text-[var(--dark)] mobile:text-center">
                          {project.name}
                        </h1>
                        <p className="text-[1.5vw] indent-2 mobile:text-[6vw] text-[var(--dark)]">
                          {project.info}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* right/down chevron */}
                  <div
                    className={`h-full w-1/5 mobile:w-full mobile:h-1/6 mobile:mx-auto flex items-center mobile:px-auto z-10 ml-5  mobile:hidden ${
                      project.key + 2 <= projects.length
                        ? "visible"
                        : "invisible"
                    }`}
                  >
                    <button
                      onClick={() => {
                        onClick("right", project.key);
                      }}
                      className="flex items-center w-full h-full justify-center scale-[0.25] mobile:invisible"
                    >
                      <img
                        src={chevron}
                        width={window.innerWidth > 564 ? 500 : 80}
                        alt="right"
                        className="-rotate-90 mobile:rotate-0 z-10"
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Scroller className="ml-auto mobile:mx-auto mobile:hidden" />
      </div>
    </>
  );
});

export default Projects;
