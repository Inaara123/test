import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent8 = ({
  className = "",
  improvedConfidence,
  propWidth,
  propPadding,
  propAlignSelf,
  propPadding1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propPadding, propAlignSelf]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div
      className={`w-[507px] flex flex-row items-start justify-center pt-0 px-5 pb-[3px] box-border max-w-full text-justify text-9xl text-midnightblue font-outfit ${className}`}
      style={frameDivStyle}
    >
      <div className="flex flex-row items-start justify-start relative max-w-full">
        <div className="h-[10.7px] w-[88px] absolute !m-[0] bottom-[19.3px] left-[-85px] flex items-center justify-center z-[0]">
          <img
            className="h-full w-full object-contain absolute left-[-3px] top-[0px] [transform:scale(1.06)]"
            loading="lazy"
            alt=""
            src="/line-2.svg"
          />
        </div>
        <div
          className="rounded-11xl box-border overflow-hidden flex flex-row items-start justify-start py-1 px-7 max-w-full z-[1] border-[3px] border-solid border-midnightblue"
          style={frameDiv1Style}
        >
          <div className="relative tracking-[0.01em] leading-[45px] font-semibold mq450:text-3xl mq450:leading-[36px]">
            {improvedConfidence}
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
  improvedConfidence: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propPadding1: PropTypes.any,
};

export default FrameComponent8;
