import { forwardRef } from "react";
import { Scroller } from "../../utility/scroller";

const Policy = forwardRef((props, ref) => {
  return (
    <div
      className="w-[100vw] h-[100vh] bg-[var(--grey)] flex flex-col px-10 items-end mobile:items-center"
      ref={ref} id="policy"
    >
      <Scroller down={false} />
      <h1 className="text-[3vw] text-[var(--dark)] mobile:text-[10vw] text-center w-full">
        Policy
      </h1>
      <p className="text-[2vw] text-[var(--light)] mobile:text-[6vw] mobile:px-5 px-20 h-5/6">
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
});

export default Policy;
