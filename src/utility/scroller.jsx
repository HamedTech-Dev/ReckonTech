import "./scroller.css";
import icon from "../assets/icons/down-arrow.png";
import { useRef } from "react";

function Scroller({ down = true, className = "" }) {
  const iconRef = useRef(null);

  const onClick = ({ target }) => {
    ScrollHandler(down, target);
  };

  function onMouseEnter() {
    const iconClasses = iconRef.current.classList;

    if (down) iconClasses.add("scroller-down");
    else iconClasses.add("scroller-up");
  }

  function onMouseLeave() {
    const iconClasses = iconRef.current.classList;

    if (down) iconClasses.remove("scroller-down");
    else iconClasses.remove("scroller-up");
  }

  if (down) {
    return (
      <img
        src={icon}
        alt="scroller"
        width={70}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={iconRef}
        className={`z-10 ${className} mobile:z-0`}
      />
    );
  } else {
    return (
      <img
        src={icon}
        alt="scroller"
        width={70}
        className={`rotate-180 z-10 mobile:z-0 ${className}`}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={iconRef}
      />
    );
  }
}

function ScrollHandler(down = true, { parentElement }) {
  const { nextElementSibling, previousElementSibling } = parentElement;

  if (down) nextElementSibling.scrollIntoView({ behavior: "smooth" });
  else previousElementSibling.scrollIntoView({ behavior: "smooth" });
}

export { Scroller, ScrollHandler };
