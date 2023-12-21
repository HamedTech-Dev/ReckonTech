import { useRef, forwardRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import chevron from "../../assets/icons/down-arrow.png";
import project_1 from "../../assets/images/1.png";
import project_2 from "../../assets/images/2.png";
import project_3 from "../../assets/images/Aesthetic_New_Product_Laptop_Mockup_Instagram_Story.png";
import project_4 from "../../assets/images/LGL.png";

const Projects = forwardRef((props, componentRef) => {
  const containerRef = useRef();

  const projects = [
    {
      ref: useRef(),
      key: 0,
      name: "MYPOWER",
      info: "Showcasing M-Power, our website highlights their expertise in providing top-quality transformers tailored to customer needs. It emphasizes M-Power's deep knowledge and commitment to excellence, reflecting their mission in a concise, engaging design.",
      image: project_1,
    },
    {
      ref: useRef(),
      key: 1,
      name: "Gold Robots",
      info: "Our website for Gold Robot highlights their expertise as an investment company specializing in the latest market trends. It underscores their commitment to providing high-quality investment opportunities at great value. We also Created an admin panel and Investment panel from which clients could make investments & Admins could handle client investments",
      image: project_2,
    },
    {
      ref: useRef(),
      key: 2,
      name: "Data Collection",
      info: "Our Data Collection website features a versatile, user-friendly dashboard for efficient data management. It's designed for diverse users, offering tools for data submission, retrieval, and analysis through a secure API. Highlighting an intuitive interface, real-time updates, and customizability, the site caters to anyone seeking to harness their data's potential with ease and security.",
      image: project_3,
    },
    {
      ref: useRef(),
      key: 3,
      name: "LGL (Light Guide in Lund)",
      info: "Our website for LGL highlights their expertise in optical engineering and hyperspectral imaging, showcasing over a decade of experience in creating custom optomechanical instruments. It emphasizes their commitment to innovation and quality, featuring user-friendly software for enhanced imaging experiences. The site captures LGL's ability to deliver tailor-made, reliable solutions in the field of optical technology.",
      image: project_4,
    },
  ];

  const onClick_left = () => {
    const { current: container } = containerRef;
    container.scrollBy({ left: -window.innerWidth / 2 });
  };

  const onClick_right = () => {
    const { current: container } = containerRef;
    container.scrollBy({ left: window.innerWidth / 2 });
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
                  <div className="flex h-full flex-col w-2/3 mobile:w-full mobile:h-2/3 mobile:px-3 mobile:pb-4 mobile:overflow-y-auto">
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
