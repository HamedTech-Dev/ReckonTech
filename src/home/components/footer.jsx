import phone_icon from "../../assets/icons/whatsapp.png";
import email_icon from "../../assets/icons/email.png";
import instagram_icon from "../../assets/icons/instagram.png";
import linkedin_icon from "../../assets/icons/linkedin.png";

function Footer() {
  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="w-[100vw] h-52 flex bg-[var(--dark)] p-10">
      <div className="h-full w-1/2 flex flex-col gap-10 items-start pl-[10%]">
        <span
          className="text-[var(--light)] text-[2.5vw] flex"
          role="button"
          onClick={() => {
            openLink("https://wa.me/+46707240643");
          }}
        >
          <img src={phone_icon} alt="phone_icon" className="mr-3 w-[4.5vw]" />
          +46 70 724 06 43
        </span>
        <span
          className="text-[var(--light)] text-[2.5vw] flex"
          role="button"
          onClick={() => {
            openLink("mailto:reckontechco@gmail.com");
          }}
        >
          <img src={email_icon} alt="email_icon" className="mr-3 w-[4.5vw]" />
          reckontechco@gmail.com
        </span>
      </div>
      <div className="h-full w-1/2 flex flex-col gap-10 items-center">
        <span
          className="text-[var(--light)] text-[2.5vw] flex"
          role="button"
          onClick={() => {
            openLink("https://www.instagram.com/reckon.tech");
          }}
        >
          <img
            src={instagram_icon}
            alt="instagram_icon"
            className="mr-3 w-[4.5vw]"
          />
          reckon.tech
        </span>
        <span
          className="text-[var(--light)] text-[2.5vw] flex"
          role="button"
          onClick={() => {
            openLink("https://www.linkedin.com/company/reckontechy");
          }}
        >
          <img
            src={linkedin_icon}
            alt="linkedin_icon"
            className="mr-3 w-[4.5vw]"
          />
          reckontechy
        </span>
      </div>
    </div>
  );
}

export default Footer;
