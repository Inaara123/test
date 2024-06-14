import { useMemo } from "react";
import PropTypes from "prop-types";

const PostureItem = ({
  className = "",
  postureCorrectionYesInsta,
  line11,
  propWidth,
  propPadding,
  propPadding1,
  propTextAlign,
}) => {
  const postureItemStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const postureContentStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const postureCorrectionYesStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div
      className={`w-[631px] flex flex-row items-start justify-center pt-0 px-5 pb-[3px] box-border max-w-full text-justify text-9xl text-midnightblue font-outfit ${className}`}
      style={postureItemStyle}
    >
      <div
        className="rounded-11xl box-border flex flex-row items-start justify-start py-1 px-2.5 relative gap-[10px] max-w-full border-[3px] border-solid border-midnightblue"
        style={postureContentStyle}
      >
        <div
          className="relative tracking-[0.01em] leading-[45px] font-semibold mq450:text-3xl mq450:leading-[36px]"
          style={postureCorrectionYesStyle}
        >
          {postureCorrectionYesInsta}
        </div>
        <div className="h-[10.7px] w-[88px] absolute !m-[0] bottom-[19.3px] left-[-85px] z-[1] flex items-center justify-center">
          <img
            className="h-full w-full z-[1] object-contain absolute left-[-3px] top-[0px] [transform:scale(1.06)]"
            loading="lazy"
            alt=""
            src={line11}
          />
        </div>
      </div>
    </div>
  );
};

PostureItem.propTypes = {
  className: PropTypes.string,
  postureCorrectionYesInsta: PropTypes.string,
  line11: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propPadding1: PropTypes.any,
  propTextAlign: PropTypes.any,
};

export default PostureItem;
