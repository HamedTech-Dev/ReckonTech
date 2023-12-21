import { forwardRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import abstract_3d from "../../assets/images/Blue_Purple_Futuristic_Modern_3D_Tech_Company_Business_Presentation.png";

const Information = forwardRef((props, ref) => {
  return (
    <div
      className="bg-[var(--secondary-light)] w-full min-h-full flex flex-col justify-between items-end mobile:items-center px-10 mobile:px-2 mobile:flex-col mobile:h-min snap-start"
      ref={ref}
      id="about-us"
    >
      <div className="w-full h-full mobile:h-full flex mobile:flex-col mobile:gap-y-5 mobile:items-start">
        <div className="w-1/2 flex justify-center items-center mobile:w-full mobile:h-1/2">
          <LazyLoadImage
            src={abstract_3d}
            alt="info"
            loading="lazy"
          />
        </div>
        <div className="w-1/2 flex flex-col align-middle justify-center mobile:w-full mobile:h-2/3">
          <h1 className="font-bold text-[4vw] mobile:text-[10vw] mobile:text-center text-[var(--light)] -indent-2 mb-3">
            About us
          </h1>
          <p className="text-[2vw] mobile:text-[7.2vw] mobile:pl-5 text-[var(--light)]">
            We are a highly skilled and experienced team of developers ready to
            take on your project. We are experts specialized in Web Development,
            having had education and experience in the field we can assure
            quality products. What We Offer: Web Development & Wordpress
            Development Mobile App Development Logo Design SEO & Branding
          </p>
        </div>
      </div>
    </div>
  );
});

export default Information;
