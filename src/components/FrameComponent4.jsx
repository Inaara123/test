import PainReliefContent from "./PainReliefContent";
import FrameComponent5 from "./FrameComponent5";
import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-[43px] pb-[98px] box-border max-w-full text-justify text-17xl text-white font-outfit mq800:pl-[21px] mq800:pr-[21px] mq800:box-border mq450:pb-16 mq450:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start max-w-full">
        <div className="rounded-11xl bg-foundation-primary-blue-primary-blue-500 overflow-hidden flex flex-row items-start justify-start py-[21px] px-[42px] box-border max-w-full mq1125:pl-[21px] mq1125:pr-[21px] mq1125:box-border">
          <div className="h-[45px] relative tracking-[0.01em] font-semibold inline-block mq800:text-10xl mq450:text-3xl">
            Three ways Neurotherapy will impact your life
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[33px] box-border max-w-full text-9xl text-midnightblue">
          <div className="h-[250px] flex-1 relative max-w-full mq1125:h-auto mq1125:min-h-[250]">
            <div className="absolute top-[0px] left-[0px] box-border w-0.5 h-[222px] border-r-[2px] border-solid border-midnightblue" />
            <div className="absolute top-[21px] left-[1.4px] w-full flex flex-col items-start justify-start gap-[22px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                <div className="w-[1234px] flex flex-row items-start justify-start [row-gap:20px] max-w-full mq1125:flex-wrap">
                  <div className="flex flex-col items-start justify-start gap-[24px] min-w-[452px] max-w-full mq800:min-w-full mq1125:flex-1">
                    <div className="rounded-11xl flex flex-row items-start justify-start py-1 pr-[30px] pl-[35px] relative gap-[10px] border-[3px] border-solid border-midnightblue">
                      <div className="relative tracking-[0.01em] leading-[45px] font-semibold mq450:text-3xl mq450:leading-[36px]">
                        Improves Attention and Focus
                      </div>
                      <div className="h-[10.7px] w-[88px] absolute !m-[0] bottom-[19.3px] left-[-85px] z-[1] flex items-center justify-center">
                        <img
                          className="h-full w-full z-[1] object-contain absolute left-[-3px] top-[0px] [transform:scale(1.06)]"
                          loading="lazy"
                          alt=""
                          src="/line-2.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start relative max-w-full">
                      <div className="h-[10.7px] w-[88px] absolute !m-[0] bottom-[19.5px] left-[-85px] flex items-center justify-center z-[0]">
                        <img
                          className="h-full w-full object-contain absolute left-[-3px] top-[0px] [transform:scale(1.06)]"
                          loading="lazy"
                          alt=""
                          src="/line-3.svg"
                        />
                      </div>
                      <div className="rounded-11xl box-border overflow-hidden flex flex-row items-start justify-start py-1 px-3.5 max-w-full z-[1] border-[3px] border-solid border-midnightblue">
                        <div className="relative tracking-[0.01em] leading-[45px] font-semibold mq450:text-3xl mq450:leading-[36px]">
                          Reduces Anxiety and Depression
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[27px] min-w-[508px] max-w-full text-white mq800:min-w-full">
                    <div className="w-[504px] flex flex-row items-start justify-start relative max-w-full">
                      <img
                        className="h-[11.5px] w-[63px] absolute !m-[0] bottom-[17.5px] left-[-1px] z-[1]"
                        loading="lazy"
                        alt=""
                        src="/line-23.svg"
                      />
                      <div className="flex-1 flex flex-row items-start justify-end max-w-full mq1125:flex-1">
                        <div className="rounded-11xl bg-foundation-primary-blue-primary-blue-400 overflow-hidden flex flex-row items-start justify-start py-[7px] px-[34px] box-border whitespace-nowrap max-w-full z-[2]">
                          <div className="relative tracking-[0.01em] leading-[45px] font-semibold">
                            {" "}
                            Effective for treating ADHD.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-end justify-start max-w-full [row-gap:20px] mq800:flex-wrap">
                      <div className="w-[63px] flex flex-col items-start justify-end pt-0 px-0 pb-[17.5px] box-border">
                        <img
                          className="self-stretch h-[11.5px] relative max-w-full overflow-hidden shrink-0"
                          alt=""
                          src="/line-23.svg"
                        />
                      </div>
                      <div className="flex-1 rounded-11xl bg-foundation-primary-blue-primary-blue-400 overflow-hidden flex flex-row items-start justify-start py-[7px] px-[22px] box-border min-w-[467px] max-w-full z-[1] mq800:min-w-full">
                        <div className="relative tracking-[0.01em] leading-[45px] font-semibold whitespace-pre-wrap mq450:text-3xl mq450:leading-[36px]">
                          Helps manage symptoms of anxiety and depression.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[1085px] flex flex-row flex-wrap items-start justify-start gap-[62px] max-w-full text-white mq800:gap-[15px] mq1125:gap-[31px]">
                <PainReliefContent
                  line3="/line-2.svg"
                  reliefFromSciaticaPain="Enhances Sleep Quality"
                  propRowGap="20px"
                  propPadding="unset"
                  propGap="unset"
                  propMargin="unset"
                />
                <FrameComponent5 addressSleepDisordersForB="Address sleep disorders for better rest." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
