import { CgGym } from "react-icons/cg";
import { FaPerson } from "react-icons/fa6";
import { PiShoppingBagOpenFill, PiTeaBagFill } from "react-icons/pi";

const WhyChooseUs = () => {
  const cardData = [
    {
      icon: <FaPerson />,
      iconColor: "#0063FF",
      title: "One-on-one Teaching",
      desc: "All of our special education experts have a degree in special education.",
    },
    {
      icon: <CgGym />,
      iconColor: "#73BC00",
      title: "24/7 Tutor Availability",
      desc: "Our tutors are always available to respond as quick as possible for you",
    },
    {
      icon: <PiTeaBagFill />,
      iconColor: "#FA6400",
      title: "Interactive Whiteboard",
      desc: "Our digital whiteboard equipped with audio and video chat fetures.",
    },
    {
      icon: <PiShoppingBagOpenFill />,
      iconColor: "#FE6BAA",
      title: "Affordable Prices",
      desc: "Choose an expert tutor based on your budget and per hour.",
    },
  ];

  return (
    <div className="">
      {/* Text Section */}
      <div className="flex flex-col items-center justify-center space-y-3 lg:pt-32">
        <p className="font-bold uppercase text-[#EA580C]">Why choose us</p>
        <p className="max-w-[400px] text-center text-3xl font-bold">
          Benefits of online tutoring services with us
        </p>
      </div>
      {/* Cards Section */}
      <div className="grid grid-cols-1 gap-6 px-5 py-6 md:grid-cols-2 md:flex-row lg:mb-32 lg:grid-cols-4 lg:px-48">
        {cardData.map((item) => (
          <div
            key={item.title}
            className="flex flex-col space-y-4 rounded-xl p-6 shadow-[0_0_22px_0_rgba(0,0,0,0.15)]"
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl text-white"
              style={{ backgroundColor: item.iconColor }}
            >
              {item.icon}
            </div>
            <span className="font-bold">{item.title}</span>
            <span className="text-sm">{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
