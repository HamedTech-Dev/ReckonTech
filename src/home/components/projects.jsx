import { useRef, forwardRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import chevron from "../../assets/icons/down-arrow.png";
import abstract_image from "../../assets/images/pexels-dids-3753025.jpg";

const Projects = forwardRef((props, componentRef) => {
  const containerRef = useRef();

  const projects = [
    {
      ref: useRef(),
      key: 0,
      name: "project1",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora consequuntur illo quae cum ratione? Unde cum quas, recusandae odit, adipisci accusamus voluptate odio sequi hic maxime illum suscipit et tempore.",
      image: abstract_image,
    },
    {
      ref: useRef(),
      key: 1,
      name: "project2",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora consequuntur illo quae cum ratione? Unde cum quas, recusandae odit, adipisci accusamus voluptate odio sequi hic maxime illum suscipit et tempore.",
      image: abstract_image,
    },
    {
      ref: useRef(),
      key: 2,
      name: "project3",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora consequuntur illo quae cum ratione? Unde cum quas, recusandae odit, adipisci accusamus voluptate odio sequi hic maxime illum suscipit et tempore.",
      image: abstract_image,
    },
    {
      ref: useRef(),
      key: 3,
      name: "project4",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora consequuntur illo quae cum ratione? Unde cum quas, recusandae odit, adipisci accusamus voluptate odio sequi hic maxime illum suscipit et tempore.",
      image: abstract_image,
    },
  ];

  const onClick_left = () => {
    const { current: container } = containerRef;
    container.scrollBy({ left: -window.innerWidth/2 });
  };

  const onClick_right = () => {
    const { current: container } = containerRef;
    container.scrollBy({ left: window.innerWidth/2 });
  };

  const onClick_image = (ref) => {
    const { current: image } = ref;

    if (image.classList.contains("clicked")) image.classList.remove("clicked");
    else image.classList.add("clicked");
  };

  return (
    <>
      <div
        className="w-full min-h-full bg-[var(--primary-dark)] flex flex-col justify-start mobile:justify-start overflow-hidden snap-start"
        ref={componentRef}
        id="projects"
      >
        <h1 className="text-[3vw] text-[var(--dark)] h-1/6 mobile:h-max font-bold text-center mobile:text-[10vw] mt-12">
          Projects
        </h1>
        <div className="max-w-full h-5/6 flex justify-start items-start align-middle mobile:overflow-y-scroll mobile:overflow-x-hidden">
          <button
            onClick={() => {
              onClick_left();
            }}
            className="flex items-center w-1/3 mobile:w-1/5 h-full justify-center z-10 bg-[var(--primary-dark)]"
          >
            <img
              src={chevron}
              width={window.innerWidth > 564 ? 500 : 80}
              alt="left"
              className="rotate-90 scale-[0.25] z-10"
            />
          </button>
          <div
            className="w-2/3 h-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth flex flex-nowrap justify-start gap-6 p-5"
            ref={containerRef}
          >
            {projects.map((project) => {
              return (
                <div className="cart min-w-full self-center max-h-[750px] h-full flex gap-x-3 mobile:gap-4 mobile:flex-col mobile:h-min mobile:max-h-full snap-center">
                  {/* conetnt image container */}
                  <div
                    className="w-1/3 h-full mobile:w-full mobile:h-1/3 transition-all cursor-pointer"
                    id="image-container"
                    ref={project.ref}
                    onClick={() => {
                      onClick_image(project.ref);
                    }}
                  >
                    <LazyLoadImage
                      src={project.image}
                      alt="project-look"
                      loading="lazy"
                      className="w-full h-full first:object-cover"
                    />
                  </div>
                  {/* content container */}
                  <div className="flex h-full flex-col w-2/3 mobile:w-full mobile:h-2/3 mobile:px-3 mobile:pb-4">
                    <h1 className="text-[3vw] font-semibold mobile:mb-3 mobile:text-[8vw] text-[var(--dark)] mobile:text-center">
                      {project.name}
                    </h1>
                    <p className="text-[1.5vw] indent-2 mobile:text-[5vw] text-[var(--dark)]">
                      {project.info}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={() => {
              onClick_right();
            }}
            className="flex items-center w-1/3 h-full justify-center mobile:w-1/5 bg-[var(--primary-dark)] z-10"
          >
            <img
              src={chevron}
              width={window.innerWidth > 564 ? 500 : 80}
              alt="right"
              className="-rotate-90 z-10 scale-[0.25]"
            />
          </button>
        </div>
      </div>
    </>
  );
});

export default Projects;
