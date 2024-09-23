import { FaBook } from "react-icons/fa";

const Subjects = () => {
  const cardData = [
    {
      iconColor: "#0063FF",
      title: "Engineering",
      backgroundColor: "#dfebff",
    },
    {
      iconColor: "#00c986",
      title: "English",
      backgroundColor: "#dff8f0",
    },
    {
      iconColor: "#922aee",
      title: "Programming",
      backgroundColor: "#f1e4fd",
    },
    {
      iconColor: "#ea7516",
      title: "Science",
      backgroundColor: "#fceee2",
    },
    {
      iconColor: "#075267",
      title: "History",
      backgroundColor: "#e0e9ec",
    },
    {
      iconColor: "#986d1d",
      title: "Psychology",
      backgroundColor: "#f2ede3",
    },
    {
      iconColor: "#b93838",
      title: "Web design",
      backgroundColor: "#f6e6e6",
    },
    {
      iconColor: "#464646",
      title: "See All",
      backgroundColor: "#e8e8e8",
    },
  ];

  return (
    <div className="">
      {/* Text Section */}
      <div className="flex flex-col items-center justify-center space-y-3 lg:pt-32">
        <p className="font-bold uppercase text-[#EA580C]">Our tutor subjects</p>
        <p className="text-center text-3xl font-bold">
          Find Online Tutor in Any Subject
        </p>
      </div>
      {/* Cards Section */}
      <div className="grid grid-cols-1 gap-6 px-5 py-6 md:grid-cols-2 md:flex-row lg:mb-32 lg:grid-cols-4 lg:px-48">
        {cardData.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-4 rounded-xl border border-[#d2e4ff] p-4 duration-300 ease-out hover:shadow-xl"
          >
            <div
              className="text-1xl flex h-10 w-10 items-center justify-center rounded-lg text-white"
              style={{
                color: item.iconColor,
                backgroundColor: item.backgroundColor,
              }}
            >
              <FaBook />
            </div>
            <span className="text-lg">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
