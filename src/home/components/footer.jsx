import phone_icon from "../../assets/icons/whatsapp.png";
import email_icon from "../../assets/icons/email.png";
import instagram_icon from "../../assets/icons/instagram.png";
import linkedin_icon from "../../assets/icons/linkedin.png";

function Footer() {
  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="w-[100vw] h-min flex bg-[var(--dark)] p-10 mobile:flex-col mobile:justify-between mobile:items-center mobile:p-0">
      <div className="h-full w-1/2 flex flex-col gap-10 items-start pl-[10%] mobile:w-full mobile:items-start mobile:gap-5 mobile:pt-10">
        <span
          className="text-[var(--light)] text-[2.5vw] flex mobile:text-[7vw]"
          role="button"
          onClick={() => {
            openLink("https://wa.me/+46707240643");
          }}
        >
          <img src={phone_icon} alt="phone_icon" className="mr-3 w-[4.5vw] mobile:w-[10vw]" />
          +46 70 724 06 43
        </span>
        
        <span
          className="text-[var(--light)] text-[2.5vw] flex mobile:text-[7vw]"
          role="button"
          onClick={() => {
            openLink("https://www.linkedin.com/company/reckontechy");
          }}
        >
          <img
            src={linkedin_icon}
            alt="linkedin_icon"
            className="mr-3 w-[4.5vw] mobile:w-[10vw]"
          />
          reckontechy
        </span>
      </div>
      <div className="h-full w-1/2 flex flex-col gap-10 items-center mobile:w-full mobile:items-start mobile:pl-[10%] mobile:gap-5 mobile:mt-5 mobile:mb-3">
        <span
          className="text-[var(--light)] text-[2.5vw] flex mobile:text-[7vw]"
          role="button"
          onClick={() => {
            openLink("https://www.instagram.com/reckon.tech");
          }}
        >
          <img
            src={instagram_icon}
            alt="instagram_icon"
            className="mr-3 w-[4.5vw] mobile:w-[10vw]"
          />
          reckon.tech
        </span>
        <span
          className="text-[var(--light)] text-[2.5vw] flex mobile:text-[7vw]"
          role="button"
          onClick={() => {
            openLink("mailto:reckontechco@gmail.com");
          }}
        >
          <img src={email_icon} alt="email_icon" className="mr-3 w-[4.5vw] mobile:w-[10vw]" />
          reckontechco@gmail.com
        </span>
      </div>
    </div>
  );
}

export default Footer;
