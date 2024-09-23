import john from "../../assets/john.jpg";
import steve from "../../assets/steve.jpg";
import kristen from "../../assets/kristen.jpg";
import ariana from "../../assets/ariana.jpg";
import Slider from "react-slick";

const Testimonials = () => {
  const cardData = [
    {
      avatar: john,
      name: "John Doe",
    },
    {
      avatar: steve,
      name: "Steve Smith",
    },
    {
      avatar: kristen,
      name: "Kristen",
    },
    {
      avatar: ariana,
      name: "Ariana",
    },
  ];

  const setting = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* Text Section */}
      <div className="flex flex-col items-center justify-center space-y-3 lg:pt-8">
        <p className="font-bold uppercase text-[#EA580C]">Our testimonials</p>
        <p className="text-center text-3xl font-bold">
          What Our Students Say About Us
        </p>
      </div>
      {/* Cards Section */}
      <div className="px-5 py-6 lg:mb-32 lg:px-48">
        <Slider {...setting}>
          {cardData.map((item) => {
            return (
              <div key={item.name}>
                <div className="bg-[#e5efff] mx-4 flex flex-col gap-4 rounded-xl p-8 shadow-lg">
                  {/* upper section */}
                  <div className="flex items-center justify-start gap-5">
                    <img
                      src={item.avatar}
                      alt=""
                      className="h-16 w-16 rounded-full"
                    />
                    <div className="text-xl font-bold text-black/80">
                      {item.name}
                    </div>
                  </div>
                  {/* bottom section */}
                  <div className="space-y-4 py-6">
                    <p className="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eaque reiciendis inventore iste ratione ex alias quis
                      magni at optio
                    </p>
                    <p>⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
