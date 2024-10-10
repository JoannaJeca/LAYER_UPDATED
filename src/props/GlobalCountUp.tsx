import { FC, useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface iProps {
  end: number;
}

const GlobalCountUp: FC<iProps> = ({ end }) => {
  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      {startCount && (
        <div className="flex ">
          <div className="text-[56px] text-[#e74c3c] font-semibold  mt-[4px] ml-[10px]">
            <CountUp
              start={0}
              end={end}
              duration={1}
              delay={0}
              className="text-[56px] text-[#e74c3c]  mt-[4px] ml-[10px]"
            >
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
          </div>
          <h1 className=" text-[56px] text-[#e74c3c] font-semibold mt-[4px] ml-[10px]">
            +
          </h1>
        </div>
      )}
    </div>
  );
};

export default GlobalCountUp;
