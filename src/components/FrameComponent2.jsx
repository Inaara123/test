import FrameComponent5 from "./FrameComponent5";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-[17px] pb-[86px] box-border max-w-full text-justify text-29xl text-foundation-text-blue-text-blue-600 font-outfit mq450:pb-9 mq450:box-border mq1125:pb-14 mq1125:box-border ${className}`}
    >
      <div className="w-[1381px] flex flex-col items-start justify-start gap-[62px] max-w-full mq800:gap-[31px] mq450:gap-[15px]">
        <div className="w-[1096px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[21px] max-w-full">
          <div className="w-[713px] flex flex-col items-start justify-start gap-[24px] max-w-full">
            <h2 className="m-0 h-[60px] relative text-inherit font-semibold font-inherit inline-block mq800:text-19xl mq450:text-10xl">
              Acupuncture
            </h2>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1.5 box-border max-w-full text-17xl">
              <div className="h-[90px] flex-1 relative tracking-[0.01em] leading-[45px] font-medium inline-block max-w-full mq800:text-10xl mq800:leading-[36px] mq450:text-3xl mq450:leading-[27px]">
                <span className="text-mediumseagreen">Experience</span>
                <span>{` the ancient art of healing for a renewed sense of `}</span>
                <span className="text-darkturquoise">balance</span>
                <span>{` and `}</span>
                <span className="text-deepskyblue-100">well-being</span>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-2 box-border max-w-full text-17xl">
            <div className="h-[135px] flex-1 relative tracking-[0.01em] leading-[45px] font-medium inline-block max-w-full mq800:text-10xl mq800:leading-[36px] mq450:text-3xl mq450:leading-[27px]">
              We understand that modern life is filled with stress, fast-paced
              routines, office deadlines, and countless other factors that leave
              you feeling overwhelmed and out of balance.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start max-w-full text-17xl text-white">
          <div className="rounded-11xl bg-foundation-primary-blue-primary-blue-500 overflow-hidden flex flex-row items-start justify-start py-[21px] px-[54px] box-border max-w-full z-[1] mq1125:pl-[27px] mq1125:pr-[27px] mq1125:box-border">
            <div className="h-[45px] relative tracking-[0.01em] font-semibold inline-block mq800:text-10xl mq450:text-3xl">
              Three ways Acupuncture will impact your life
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[33px] box-border max-w-full text-9xl text-midnightblue">
            <div className="h-[251px] flex-1 relative max-w-full mq1125:h-auto mq1125:min-h-[251]">
              <div className="absolute top-[0px] left-[0px] box-border w-0.5 h-[222px] border-r-[2px] border-solid border-midnightblue" />
              <div className="absolute top-[51.5px] left-[1.4px] w-[58px] h-[179.2px] flex flex-col items-start justify-start gap-[74.6px]">
                <div className="self-stretch h-[10.7px] relative max-w-full shrink-0 z-[1] flex items-center justify-center">
                  <img
                    className="self-stretch h-full overflow-hidden shrink-0 z-[1] object-contain absolute left-[-3px] top-[0px] w-full [transform:scale(1.091)]"
                    loading="lazy"
                    alt=""
                    src="/line-21-1.svg"
                  />
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[83px]">
                  <img
                    className="self-stretch h-[0.2px] relative max-w-full overflow-hidden shrink-0 object-contain z-[1]"
                    loading="lazy"
                    alt=""
                    src="/line-22-1.svg"
                  />
                  <div className="self-stretch h-[10.7px] relative max-w-full shrink-0 z-[1] flex items-center justify-center">
                    <img
                      className="self-stretch h-full overflow-hidden shrink-0 z-[1] object-contain absolute left-[-3px] top-[0px] w-full [transform:scale(1.091)]"
                      loading="lazy"
                      alt=""
                      src="/line-20-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-[20px] left-[59.4px] w-[1288px] flex flex-col items-start justify-start gap-[22px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-[59px] max-w-full mq1125:flex-wrap">
                  <div className="flex flex-col items-start justify-start gap-[26px] min-w-[452px] max-w-full mq800:min-w-full mq1125:flex-1">
                    <div className="rounded-11xl overflow-hidden flex flex-row items-start justify-start py-1 pr-[33px] pl-[38px] border-[3px] border-solid border-midnightblue">
                      <div className="relative tracking-[0.01em] leading-[45px] font-semibold mq450:text-3xl mq450:leading-[36px]">
                        Relieves Pain and Discomfort
                      </div>
                    </div>
                    <div className="rounded-11xl overflow-hidden flex flex-row items-start justify-start py-1 px-[47px] z-[1] border-[3px] border-solid border-midnightblue">
                      <div className="relative tracking-[0.01em] leading-[45px] font-semibold mq450:text-3xl mq450:leading-[36px]">
                        Reduces Stress and Anxiety
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[28px] min-w-[505px] max-w-full text-white mq800:min-w-full">
                    <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border relative max-w-full">
                      <img
                        className="h-[11.5px] w-[63px] absolute !m-[0] bottom-[16.5px] left-[-59px] z-[1]"
                        loading="lazy"
                        alt=""
                        src="/line-23.svg"
                      />
                      <div className="rounded-11xl bg-foundation-primary-blue-primary-blue-400 overflow-hidden flex flex-row items-start justify-start py-[7px] px-[34px] box-border max-w-full z-[2] mq1125:flex-1">
                        <div className="relative tracking-[0.01em] leading-[45px] font-semibold mq450:text-3xl mq450:leading-[36px]">
                          Effective for treating chronic pain
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded-11xl bg-foundation-primary-blue-primary-blue-400 overflow-hidden flex flex-row items-start justify-start py-[7px] pr-0 pl-[18px] box-border max-w-full z-[1]">
                      <div className="w-[775px] relative tracking-[0.01em] leading-[45px] font-semibold inline-block shrink-0 max-w-[103%] mq450:text-3xl mq450:leading-[36px]">
                        Promotes relaxation and helps manage stress and anxiety
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[5px] pl-0 box-border gap-[63px] max-w-full">
                  <div className="rounded-11xl box-border overflow-hidden flex flex-row items-start justify-start py-1 px-[13px] max-w-full border-[3px] border-solid border-midnightblue">
                    <div className="relative tracking-[0.01em] leading-[45px] font-semibold mq450:text-3xl mq450:leading-[36px]">
                      Boosts Energy and Vitality
                    </div>
                  </div>
                  <FrameComponent5
                    addressSleepDisordersForB="Enhances overall energy levels and supports immune function"
                    propMinWidth="551px"
                    propPadding="7px 29px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
