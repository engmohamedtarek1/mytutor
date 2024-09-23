import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";

const Services = () => {
  const cardData = [
    {
      img: service1,
      title: "Personalized Professional Online Tutor on Your Schedule",
      desc: "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
      reversed: false,
    },
    {
      img: service2,
      title: "Talented and Qualified Tutors to Serve You for Help",
      desc: "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used",
      reversed: true,
    },
  ];

  return (
    <div className="flex flex-col justify-between gap-16 px-5 py-6 text-center md:gap-32 lg:mt-32 lg:px-48">
      {cardData.map((item) => (
        <div
          key={item.title}
          className={`flex flex-col justify-between gap-4 md:flex-row ${item.reversed ? "md:flex-row-reverse" : ""}`}
        >
          <div className="md:w-[400px]">
            <img src={item.img} alt="Item Img" />
          </div>
          <div className="flex max-w-[500px] flex-col space-y-4 text-center md:text-left">
            <span className="text-sm font-bold text-[#EA580C]">
              CUSTOMIZE WITH YOUR SCHEDULE
            </span>
            <span className="text-2xl font-bold">{item.title}</span>
            <span className="tracking-tight text-[#64748B]">{item.desc}</span>
            <button className="self-center md:self-start h-12 w-36 rounded-full bg-[#FFCF3A] px-6 py-3 font-bold duration-300 ease-out hover:h-14 hover:w-40 hover:shadow-2xl">
              Get Started
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
