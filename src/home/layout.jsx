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
        <div className="w-max pr-[65%] pointer-events-none h-15 max-h-14 fixed top-0 left-0 bg-transparent flex justify-evenly z-10 backdrop-blur-lg">
          <NavBtns refrensesList={refrensList} />
        </div>
        <div className="flex flex-col justify-evenly align-middle">
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
        <div className="flex flex-col w-min h-min">
          <div className="w-max pr-[65%] h-15 max-h-14 fixed top-0 left-0 bg-transparent flex justify-evenly z-10">
            <NavBtns refrensesList={refrensList} />
          </div>
          <div className="flex flex-col justify-evenly align-middle">
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
