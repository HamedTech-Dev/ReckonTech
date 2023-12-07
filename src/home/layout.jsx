import Footer from "./components/footer";
import Policy from "./components/policy";
import Projects from "./components/projects";
import TeamInfo from "./components/team-info";
import Information from "./components/information";
import Logo from "./components/logo";
import NavBtns from "./components/nav-btns";
import "./layout.css";
import { useRef } from "react";

function HomeLayout() {
  const PolicyRef = useRef(null);
  const ProjectsRef = useRef(null);
  const TeamInfoRef = useRef(null);
  const InformationRef = useRef(null);
  const LogoRef = useRef(null);

  const refrensList = [
    LogoRef,
    InformationRef,
    TeamInfoRef,
    ProjectsRef,
    PolicyRef,
  ];

  if (window.innerWidth > 425) {
    return (
      <>
        <div className="w-[100vw] pointer-events-none h-15 max-h-14 fixed top-0 left-0 bg-transparent flex justify-evenly z-10 backdrop-blur-lg">
          <NavBtns refrensesList={refrensList} />
        </div>
        <div className="flex flex-col justify-start align-middle overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth w-[100vw] h-[100vh]">
          <Logo ref={LogoRef} />
          <Information ref={InformationRef} />
          <TeamInfo ref={TeamInfoRef} />
          <Projects ref={ProjectsRef} />
          <Policy ref={PolicyRef} />
          <Footer />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-col w-[100vw] h-min">
          <div className="w-max pr-[65%] h-15 max-h-14 fixed top-0 left-0 bg-transparent flex justify-evenly z-10">
            <NavBtns refrensesList={refrensList} />
          </div>
          <div className="flex flex-col justify-start align-middle overflow-x-hidden overflow-y-scroll snap-y snap-mandatory scroll-smooth w-[100vw] h-[100vh]">
            <Logo ref={LogoRef} />
            <Information ref={InformationRef} />
            <TeamInfo ref={TeamInfoRef} />
            <Projects ref={ProjectsRef} />
            <Policy ref={PolicyRef} />
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default HomeLayout;
