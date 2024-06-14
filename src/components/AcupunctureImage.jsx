import PropTypes from "prop-types";

const AcupunctureImage = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start max-w-full text-left text-53xl text-white font-outfit ${className}`}
    >
      <div className="ml-[-1164px] h-[1114px] w-[3688px] relative shrink-0 [debug_commit:69da668] max-w-[257%]">
        <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_6.5px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-slateblue w-full h-full" />
        <div className="absolute top-[219px] left-[1285px] rounded-11xl bg-mediumpurple w-[1157px] h-[756px] z-[1]">
          <div className="absolute top-[0px] left-[0px] rounded-11xl bg-mediumpurple w-full h-full hidden" />
          <div className="absolute top-[56px] left-[127px] w-[901px] h-[642px] z-[2]">
            <img
              className="absolute h-full top-[0px] bottom-[0px] left-[113px] max-h-full w-[615px] object-cover z-[1]"
              alt=""
              src="/acupuncture-1@2x.png"
            />
            <div className="absolute top-[0px] left-[0px] w-full h-full">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full object-cover"
                alt=""
                src="/acupuncture-2@2x.png"
              />
              <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(4px)] bg-gray-300 w-full h-full" />
            </div>
            <img
              className="absolute top-[264px] left-[372px] w-[113px] h-[113px] overflow-hidden z-[3]"
              loading="lazy"
              alt=""
              src="/frame-1.svg"
            />
            <h1 className="m-0 absolute top-[377px] left-[18px] text-inherit tracking-[-0.03em] font-extrabold font-inherit inline-block w-[816px] z-[4] mq800:text-39xl mq450:text-24xl">
              Here’s how Acupuncture can help you become stress free!
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

AcupunctureImage.propTypes = {
  className: PropTypes.string,
};

export default AcupunctureImage;
