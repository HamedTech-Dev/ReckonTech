import { useState } from "react";

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

export default NavBtns;
