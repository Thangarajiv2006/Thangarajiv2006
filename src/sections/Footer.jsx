import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center"></div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a key={index} href={socialImg.link} className="icon">
              {<socialImg.Icon size={24} />}
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center"></div>
      </div>
    </footer>
  );
};

export default Footer;
