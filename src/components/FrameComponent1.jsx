import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-row items-start justify-start pt-0 px-[42px] pb-[60px] box-border max-w-full text-left text-29xl text-foundation-text-blue-text-blue-500 font-outfit mq800:pl-[21px] mq800:pr-[21px] mq800:pb-[25px] mq800:box-border mq1350:pb-[39px] mq1350:box-border ${className}`}
    >
      <div className="w-[1346px] flex flex-col items-start justify-start gap-[26px] max-w-full">
        <h2 className="m-0 h-[60px] relative text-inherit tracking-[-0.03em] font-semibold font-inherit inline-block max-w-full mq800:text-19xl mq450:text-10xl">
          Here’s what you need to know about us
        </h2>
        <div className="self-stretch flex flex-col items-end justify-start gap-[42px] max-w-full text-justify text-15xl text-foundation-text-blue-text-blue-700 mq800:gap-[21px]">
          <div className="self-stretch rounded-11xl bg-slateblue flex flex-row items-start justify-start pt-[33px] pb-10 pr-7 pl-[35px] box-border gap-[26px] max-w-full mq800:pt-[21px] mq800:pb-[26px] mq800:box-border mq1350:flex-wrap">
            <div className="h-[717px] w-[1346px] relative rounded-11xl bg-slateblue hidden max-w-full" />
            <div className="flex-1 rounded-11xl bg-white overflow-hidden flex flex-row items-start justify-start py-[21px] px-[50px] box-border max-w-full z-[1] mq800:pt-5 mq800:pb-5 mq800:box-border mq800:min-w-full mq1125:pl-[25px] mq1125:pr-[25px] mq1125:box-border">
              <p className="m-0 h-[602px] flex-1 relative tracking-[0.01em] font-medium inline-block max-w-full mq800:text-8xl mq450:text-xl">
                <span className="block">
                  It started with one question, Why are so many people today,
                  experiencing chronic pains and what are people doing about it
                  ? Some have learned to live with pain and accepted it as a
                  constant companion in their life, while some have spent
                  thousands of Rupees in supplements and medicines treating only
                  the symptoms and not addressing the root cause.
                </span>
                <span className="block">
                  Nothing frustrates me more than seeing patients consistently
                  eat tablets causing dangerous side affects and still be in
                  pain. It is my life’s mission to help people to get rid of
                  their pain without a single side effect. You don’t have to
                  become old before time. Our rigorous training and experience
                  will make your pain a thing of the past.
                </span>
              </p>
            </div>
            <div className="flex flex-col items-start justify-start gap-[31px] min-w-[339px] max-w-full text-7xl text-white font-noto-serif-telugu mq800:min-w-full mq450:gap-[15px] mq1350:flex-1">
              <div className="w-[322px] rounded-11xl bg-foundation-primary-blue-primary-blue-700 flex flex-row items-start justify-start pt-[9px] px-[9px] pb-[11px] box-border max-w-full z-[1]">
                <div className="h-[387px] w-[322px] relative rounded-11xl bg-foundation-primary-blue-primary-blue-700 hidden max-w-full" />
                <img
                  className="h-[367px] flex-1 relative rounded-11xl max-w-full overflow-hidden object-cover z-[2]"
                  loading="lazy"
                  alt=""
                  src="/dr-ss-1@2x.png"
                />
              </div>
              <div className="rounded-11xl bg-foundation-primary-blue-primary-blue-700 overflow-hidden flex flex-col items-start justify-start py-[13px] px-[18px] gap-[3px] z-[1]">
                <b className="relative mq450:text-2xl">
                  <p className="m-0">Dr Prem Chand Vemula</p>
                  <p className="m-0">(NT Delhi)</p>
                </b>
                <div className="h-[120px] relative text-5xl font-medium font-outfit text-left inline-block mq450:text-lgi">
                  <p className="m-0">Neuro Therapist</p>
                  <p className="m-0">Alternative Therapist</p>
                  <p className="m-0">MD Acupuncture</p>
                  <p className="m-0">Dip Chiropractor</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1332px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-53xl text-foundation-tertiary-text-blue-tertiary-text-blue-300">
            <div className="h-[393px] w-[1168px] relative rounded-11xl bg-foundation-primary-blue-primary-blue-700 overflow-hidden shrink-0 max-w-full">
              <div className="absolute top-[201.9px] left-[56px] box-border w-[1073px] h-[3px] border-t-[3px] border-solid border-gray-400" />
              <div className="absolute top-[28.3px] left-[288px] box-border w-[3px] h-[328px] z-[1] border-r-[3px] border-solid border-gray-400" />
              <img
                className="absolute top-[28.3px] left-[586px] w-0 h-[325px] object-contain z-[1]"
                alt=""
                src="/line-3-1.svg"
              />
              <div className="absolute top-[28.3px] left-[884px] box-border w-[3px] h-[328px] z-[1] border-r-[3px] border-solid border-gray-400" />
              <div className="absolute top-[73px] left-[112px] tracking-[0.01em] mq800:text-39xl mq450:text-24xl">
                20+
              </div>
              <div className="absolute top-[73px] left-[300px] tracking-[0.01em] mq800:text-39xl mq450:text-24xl">
                10,000+
              </div>
              <div className="absolute top-[73px] left-[985px] tracking-[0.01em] mq800:text-39xl mq450:text-24xl">
                3
              </div>
              <div className="absolute top-[73px] left-[675px] tracking-[0.01em] mq800:text-39xl mq450:text-24xl">
                68+
              </div>
              <div className="absolute top-[240px] left-[84px] text-17xl tracking-[0.01em] text-foundation-secondary-text-green-secondary-text-green-300 text-center inline-block w-[183px] mq800:text-10xl mq450:text-3xl">
                Years of experience
              </div>
              <div className="absolute top-[240px] left-[353px] text-17xl tracking-[0.01em] text-foundation-secondary-text-green-secondary-text-green-300 text-center mq800:text-10xl mq450:text-3xl">
                <p className="m-0">Successful</p>
                <p className="m-0"> therapies</p>
              </div>
              <div className="absolute top-[240px] left-[622px] text-17xl tracking-[0.01em] text-foundation-secondary-text-green-secondary-text-green-300 text-center mq800:text-10xl mq450:text-3xl">
                <p className="m-0">{`Trained `}</p>
                <p className="m-0">Professionals</p>
              </div>
              <div className="absolute top-[240px] left-[895px] text-17xl tracking-[0.01em] text-foundation-secondary-text-green-secondary-text-green-300 text-center mq800:text-10xl mq450:text-3xl">
                <p className="m-0">Centers across</p>
                <p className="m-0">Hyderabad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
