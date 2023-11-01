import { useRef, useEffect } from "react";
import { Scroller } from "../../utility/scroller";

function Policy({ setRef }) {
  const ref = useRef(null);

  useEffect(() => {
    setRef(ref, "Polocy");
  });

  return (
    <div
      className="w-[100vw] h-[100vh] bg-[var(--grey)] flex flex-col px-10 items-end"
      ref={ref}
    >
      <Scroller down={false} />
      <h1 className="text-[5vw] text-[var(--light)] text-center w-full">
        Policy
      </h1>
      <p className="text-[2.5vw] text-[var(--light)]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae numquam
        nesciunt commodi qui repellendus quia quasi eveniet quod consequatur
        aliquid optio tenetur, praesentium iure sunt dolorum incidunt maxime
        illo. Incidunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Beatae numquam nesciunt commodi qui repellendus quia quasi eveniet quod
        consequatur aliquid optio tenetur, praesentium iure sunt dolorum
        incidunt maxime illo. Incidunt! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Beatae numquam nesciunt commodi qui repellendus quia
        quasi eveniet quod consequatur aliquid optio tenetur, praesentium iure
        sunt dolorum incidunt maxime illo. Incidunt!
      </p>
      <Scroller />
    </div>
  );
}

export default Policy;
