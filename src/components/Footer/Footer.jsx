import { FaFacebook, FaInstagram, FaLaptop, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import footerImage from "../../assets/footer.jpg";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${footerImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
      }}
    >
      <div className="grid grid-cols-1 gap-10 px-5 py-6 md:grid-cols-4 md:gap-20 md:pb-40 lg:mt-32 lg:px-48">
        {/* Desc Section */}
        <div className="col-span-1 flex flex-col gap-6">
          {/* Upper Desc Section */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-2xl">
              <FaLaptop className="text-[#0063ff]" />
              <span className="font-bold uppercase">E-Tutor</span>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
              placeat quaerat doloribus odit perferendis autem blanditiis, nihil
              pariatur iusto accusamus.
            </p>
          </div>

          {/* Addresses Desc Section */}
          <div className="flex gap-4 text-3xl">
            <HiLocationMarker className="hover:text-blue-600" />
            <FaInstagram className="hover:text-blue-600" />
            <FaFacebook className="hover:text-blue-600" />
            <FaLinkedin className="hover:text-blue-600" />
          </div>
        </div>

        {/* Links Section */}
        <div className="col-span-3 grid grid-cols-2 gap-5 md:grid-cols-3">
          <div className="flex flex-col gap-5">
            <p className="text-2xl font-bold">Important Links</p>
            <div className="flex flex-col gap-3">
              <a href="/" className="cursor-pointer hover:text-blue-600">
                Home
              </a>
              <a href="/about" className="cursor-pointer hover:text-blue-600">
                About
              </a>
              <a
                href="/services"
                className="cursor-pointer hover:text-blue-600"
              >
                Services
              </a>
              <a href="/login" className="cursor-pointer hover:text-blue-600">
                Login
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-2xl font-bold">Company Links</p>
            <div className="flex flex-col gap-3">
              <a
                href="/services"
                className="cursor-pointer hover:text-blue-600"
              >
                Our Services
              </a>
              <a href="/contact" className="cursor-pointer hover:text-blue-600">
                Contact
              </a>
              <a
                href="/privacy-policy"
                className="cursor-pointer hover:text-blue-600"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-2xl font-bold">Resources</p>
            <div className="flex flex-col gap-3">
              <a href="/" className="cursor-pointer hover:text-blue-600">
                Home
              </a>
              <a href="/about" className="cursor-pointer hover:text-blue-600">
                About
              </a>
              <a
                href="/services"
                className="cursor-pointer hover:text-blue-600"
              >
                Services
              </a>
              <a href="/login" className="cursor-pointer hover:text-blue-600">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
