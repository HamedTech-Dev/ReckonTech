import { useEffect, useState } from "react";
import menu_icon from "../../assets/icons/menu.png";
import home_icon from "../../assets/icons/home.png";
import team_icon from "../../assets/icons/team.png";
import info_icon from "../../assets/icons/information.png";
import policy_icon from "../../assets/icons/policy.png";
import projects_icon from "../../assets/icons/projects.png";

function NavBtns({ refrensesList }) {
  const [navBtns, setNavBtns] = useState([
    {
      key: 0,
      name: "Home",
      ref: undefined,
      selected: true,
      icon: home_icon,
    },
    {
      key: 1,
      name: "About us",
      ref: undefined,
      selected: false,
      icon: info_icon,
    },
    {
      key: 2,
      name: "Team members",
      ref: undefined,
      selected: false,
      icon: team_icon,
    },
    {
      key: 3,
      name: "Projects",
      selected: false,
      ref: undefined,
      icon: projects_icon,
    },
    {
      key: 4,
      name: "Policy",
      selected: false,
      ref: undefined,
      icon: policy_icon,
    },
  ]);

  const setBtnRefs = () => {
    setNavBtns(
      navBtns.map((btn) => {
        return { ...btn, ref: refrensesList[btn.key] };
      })
    );
  };

  useEffect(() => {
    setBtnRefs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [is_open, set_menu_state] = useState(false);

  const on_click_menu = () => {
    set_menu_state(!is_open);
  };

  const changeBtnState = ({ key }) => {
    setNavBtns(
      navBtns.map((btn) => {
        if (btn.key === key) {
          return { ...btn, selected: true };
        } else {
          return { ...btn, selected: false };
        }
      })
    );
  };

  const navigate = ({ ref }) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  if (window.innerWidth > 564) {
    return (
      <>
        {navBtns.map((btn) => {
          return (
            <button
              className={`bg-transparent text-[var(--light)] py-2 px-3 m-2 text-center transition-all text-2xl font-semibold pointer-events-auto  ${
                navBtns[btn.key].selected ? "invert" : "invert-0"
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
  } else {
    return (
      <>
        {/* toolbar container */}
        <div
          className="w-max h-full flex pl-3 pt-1 align-middle justify-start z-10"
          onClick={on_click_menu}
        >
          <img src={menu_icon} alt="menu_icon" role="button" />
        </div>

        {/* menu container */}
        <div
          className={`${
            is_open ? "visible" : "invisible"
          } w-[100vw] h-[100vh] bg-transparent flex absolute left-0 top-0 z-40`}
          onClick={on_click_menu}
        >
          {/* menu backdrop */}
          <div
            hidden={false}
            className={`w-1/2 h-full bg-[var(--dark)] opacity-50 order-2 z-40`}
            onClick={on_click_menu}
          ></div>

          {/* menu buttons container */}
          <div
            className={`h-full transition-all flex flex-col items-start p-3 justify-start ${
              is_open ? "w-1/2 visible opacity-100" : "w-0 invalid"
            } bg-[var(--light)] z-40 order-1`}
          >
            {navBtns.map((btn) => {
              return (
                <button
                  className="appearance-none border-transparent border-solid border-[1px] text-center my-5 w-full flex items-center gap-2"
                  onClick={() => {
                    navigate(btn);
                    on_click_menu();
                  }}
                  key={btn.key}
                >
                  <img src={btn.icon} alt="icon" width={40} />
                  <span
                    className={`text-[var(--dark)] ${
                      is_open ? "visible" : "invisible"
                    }`}
                  >
                    {btn.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default NavBtns;
