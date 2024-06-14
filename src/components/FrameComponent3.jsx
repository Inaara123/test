import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[67px] box-border max-w-full text-left text-53xl text-white font-outfit mq800:pb-[29px] mq800:box-border mq1350:pb-11 mq1350:box-border ${className}`}
    >
      <div className="ml-[-1144px] h-[1114px] w-[3688px] relative shrink-0 [debug_commit:69da668] max-w-[257%]">
        <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_6.5px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-slateblue w-full h-full" />
        <div className="absolute top-[221px] left-[1265px] rounded-11xl bg-mediumpurple w-[1157px] h-[756px] z-[1]">
          <div className="absolute top-[0px] left-[0px] rounded-11xl bg-mediumpurple w-full h-full hidden" />
          <div className="absolute top-[56px] left-[127px] w-[901px] h-[642px] bg-[url('/public/stress-1@2x.png')] bg-cover bg-no-repeat bg-[top] z-[2]">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
              alt=""
              src="/stress-1@2x.png"
            />
            <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(4px)] bg-gray-300 w-full h-full" />
            <img
              className="absolute top-[264px] left-[372px] w-[113px] h-[113px] overflow-hidden z-[2]"
              loading="lazy"
              alt=""
              src="/frame-1.svg"
            />
            <h1 className="m-0 absolute top-[438px] left-[20px] text-inherit tracking-[-0.03em] font-extrabold font-inherit inline-block w-[816px] z-[3] mq800:text-39xl mq450:text-24xl">
              <p className="m-0">{`Always Stressed?? `}</p>
              <p className="m-0">Try these quick tips out</p>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
