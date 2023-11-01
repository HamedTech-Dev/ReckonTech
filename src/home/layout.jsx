import Footer from "./components/footer";
import Policy from "./components/policy";
import Projects from "./components/projects";
import TeamInfo from "./components/team-info";
import Information from "./components/information";
import Logo from "./components/logo";
import NavBtns from "./components/nav-btns";
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
        <Policy setRef={getReferences} />
        <Footer />
      </div>
    </>
  );
}

export default HomeLayout;
