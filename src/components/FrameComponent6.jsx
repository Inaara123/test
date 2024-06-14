import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start shrink-0 [debug_commit:69da668] max-w-full mt-[-52px] text-left text-53xl text-white font-outfit ${className}`}
    >
      <div className="ml-[-1138px] h-[1035px] w-[3688px] relative shrink-0 [debug_commit:69da668] max-w-[257%]">
        <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_6.5px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-slateblue w-full h-full z-[2]" />
        <div className="absolute top-[134px] left-[1279px] rounded-11xl bg-mediumpurple w-[1157px] h-[756px] z-[3]">
          <div className="absolute top-[0px] left-[0px] rounded-11xl bg-mediumpurple w-full h-full hidden" />
          <div className="absolute top-[56px] left-[119px] w-[892px] h-[642px] bg-[url('/public/neck-pain-1@2x.png')] bg-cover bg-no-repeat bg-[top] z-[4]">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
              alt=""
              src="/neck-pain-1@2x.png"
            />
            <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(4px)] bg-gray-300 w-full h-full" />
            <img
              className="absolute top-[264px] left-[367px] w-[113px] h-[113px] overflow-hidden z-[2]"
              loading="lazy"
              alt=""
              src="/frame-1.svg"
            />
            <h1 className="m-0 absolute top-[343px] left-[16px] text-inherit tracking-[-0.03em] font-extrabold font-inherit inline-block w-[816px] z-[5] mq800:text-39xl mq450:text-24xl">{`Ever wondered why your back and neck pain isn’t going away?? `}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
