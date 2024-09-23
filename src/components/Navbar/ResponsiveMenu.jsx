const ResponsiveMenu = ({ open }) => {
  return (
    <div>
      {open && (
        <div className="absolute left-0 top-20 z-10 h-screen w-full lg:hidden">
          <div className="m-6 rounded-3xl bg-[#FFCF3A] py-10 text-xl font-semibold uppercase text-white">
            <ul className="flex flex-col items-center justify-center gap-10">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">For Students</li>
              <li className="cursor-pointer">Resources</li>
              <li className="cursor-pointer">About us</li>
              <li className="cursor-pointer">Contact us</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsiveMenu;
