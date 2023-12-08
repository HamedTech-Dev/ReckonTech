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

  return (
    <>
      <div className="w-[100vw] h-15 fixed top-0 left-0 bg-transparent flex justify-evenly mobile:justify-start z-20 backdrop-blur-lg mobile:backdrop-blur-none">
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
}

export default HomeLayout;
