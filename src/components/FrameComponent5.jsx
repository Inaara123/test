import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent5 = ({
  className = "",
  addressSleepDisordersForB,
  propMinWidth,
  propPadding,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDiv3Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[365px] max-w-full text-justify text-9xl text-white font-outfit mq800:min-w-full ${className}`}
      style={frameDiv2Style}
    >
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[11.5px] w-[63px] absolute !m-[0] bottom-[16.5px] left-[-62px] z-[1]"
          loading="lazy"
          alt=""
          src="/line-23.svg"
        />
        <div
          className="flex-1 rounded-11xl bg-foundation-primary-blue-primary-blue-400 overflow-hidden flex flex-row items-start justify-start py-[7px] px-[30px] box-border max-w-full z-[2]"
          style={frameDiv3Style}
        >
          <div className="relative tracking-[0.01em] leading-[45px] font-semibold mq450:text-3xl mq450:leading-[36px]">
            {addressSleepDisordersForB}
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
  addressSleepDisordersForB: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propPadding: PropTypes.any,
};

export default FrameComponent5;
