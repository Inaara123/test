import { useMemo } from "react";
import PropTypes from "prop-types";

const PainReliefContent = ({
  className = "",
  line3,
  reliefFromSciaticaPain,
  propRowGap,
  propPadding,
  propGap,
  propMargin,
}) => {
  const painReliefContentStyle = useMemo(() => {
    return {
      rowGap: propRowGap,
      padding: propPadding,
      gap: propGap,
    };
  }, [propRowGap, propPadding, propGap]);

  const reliefFromSciaticaStyle = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div
      className={`flex flex-row items-end justify-center [row-gap:20px] max-w-full text-justify text-9xl text-midnightblue font-outfit mq800:flex-wrap ${className}`}
      style={painReliefContentStyle}
    >
      <div className="h-[29.2px] w-[88px] flex flex-col items-start justify-end pt-0 px-0 pb-[18.5px] box-border">
        <div className="self-stretch h-[10.7px] relative max-w-full shrink-0 flex items-center justify-center">
          <img
            className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[-3px] top-[0px] w-full [transform:scale(1.06)]"
            loading="lazy"
            alt=""
            src={line3}
          />
        </div>
      </div>
      <div className="rounded-11xl box-border overflow-hidden flex flex-row items-start justify-start py-1 px-3 max-w-full border-[3px] border-solid border-midnightblue">
        <div
          className="relative tracking-[0.01em] leading-[45px] font-semibold mq450:text-3xl mq450:leading-[36px]"
          style={reliefFromSciaticaStyle}
        >
          {reliefFromSciaticaPain}
        </div>
      </div>
    </div>
  );
};

PainReliefContent.propTypes = {
  className: PropTypes.string,
  line3: PropTypes.string,
  reliefFromSciaticaPain: PropTypes.string,

  /** Style props */
  propRowGap: PropTypes.any,
  propPadding: PropTypes.any,
  propGap: PropTypes.any,
  propMargin: PropTypes.any,
};

export default PainReliefContent;
