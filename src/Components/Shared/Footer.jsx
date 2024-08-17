import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#4A249D] h-36 flex items-center justify-center">
      <div>
        <h2 className="text-lg md:text-4xl text-[#55E6A5] shadow-2xl font-Matemasie">
          Gadget Hub
        </h2>
        <div className="flex items-center justify-center text-3xl text-[#55E6A5] gap-5 mt-7">
          <Link to='https://www.facebook.com' target="_blank" className="hover:cursor-pointer">
            <FaFacebook />
          </Link>
          <Link to='https://x.com' target="_blank" className="hover:cursor-pointer">
            <FaXTwitter />
          </Link>
          <Link to='https://www.instagram.com' target="_blank" className="hover:cursor-pointer">
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
