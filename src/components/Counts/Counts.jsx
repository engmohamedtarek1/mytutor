import CountUp from "react-countup/build/";

const Counts = () => {
  return (
    <div className="grid justify-center gap-8 bg-[#0063FF] py-12 lg:px-48 text-white grid-cols-2 md:grid-cols-4">
      <CountUp start={0} end={872} duration={1.75} separator=",">
        {({ countUpRef }) => (
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold" ref={countUpRef}></span>
            <span>Expert tutors</span>
          </div>
        )}
      </CountUp>

      <CountUp start={0} end={20000} duration={2.75} separator="," suffix="+">
        {({ countUpRef }) => (
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold" ref={countUpRef}></span>
            <span>Hours content</span>
          </div>
        )}
      </CountUp>

      <CountUp start={0} end={298} duration={1.75} separator=",">
        {({ countUpRef }) => (
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold" ref={countUpRef}></span>
            <span>Subject and courses</span>
          </div>
        )}
      </CountUp>

      <CountUp start={0} end={72878} duration={2.75} separator="," suffix="+">
        {({ countUpRef }) => (
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold" ref={countUpRef}></span>
            <span>Active students</span>
          </div>
        )}
      </CountUp>
    </div>
  );
};

export default Counts;
