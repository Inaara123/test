import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end py-0 px-[50px] box-border max-w-full text-center text-29xl text-gray-200 font-outfit mq800:pl-[25px] mq800:pr-[25px] mq800:box-border ${className}`}
    >
      <div className="w-[1323px] rounded-11xl bg-ghostwhite flex flex-col items-start justify-start py-[26px] pr-[30px] pl-9 box-border gap-[55px] max-w-full mq800:gap-[27px] mq800:pt-5 mq800:pb-5 mq800:box-border">
        <div className="w-[1323px] h-[666px] relative rounded-11xl bg-ghostwhite hidden max-w-full" />
        <b className="relative tracking-[0.02em] leading-[129.26%] font-semibold z-[1] mq800:text-19xl mq800:leading-[50px] mq450:text-10xl mq450:leading-[37px]">
          Contact Us
        </b>
        <div className="w-3 h-3 relative overflow-hidden shrink-0 hidden" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[15px] box-border max-w-full text-9xl">
          <div className="flex-1 flex flex-row items-start justify-center gap-[176px] max-w-full mq800:gap-[44px] mq450:gap-[22px] mq1350:flex-wrap mq1350:gap-[88px]">
            <div className="w-[392px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border min-w-[392px] max-w-full mq800:min-w-full mq1350:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start gap-[37.5px] max-w-full mq450:gap-[19px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[27px] max-w-full">
                  <div className="w-[380px] flex flex-col items-start justify-start gap-[5px] max-w-full">
                    <div className="relative tracking-[0.02em] leading-[129.26%] font-medium z-[1] mq450:text-3xl mq450:leading-[29px]">
                      Name
                    </div>
                    <div className="relative text-5xl tracking-[0.02em] leading-[129.26%] font-medium text-dimgray-100 z-[1] mq450:text-lgi mq450:leading-[25px]">
                      John Doe(*)
                    </div>
                    <div className="self-stretch h-0.5 relative box-border z-[1] border-t-[2px] border-solid border-dimgray-200" />
                  </div>
                  <div className="w-[380px] flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border gap-[5px] max-w-full">
                    <div className="relative tracking-[0.02em] leading-[129.26%] font-medium z-[1] mq450:text-3xl mq450:leading-[29px]">
                      Email
                    </div>
                    <div className="relative text-5xl tracking-[0.02em] leading-[129.26%] font-medium text-dimgray-100 whitespace-nowrap z-[1] mq450:text-lgi mq450:leading-[25px]">
                      johndoe@example.com(*)
                    </div>
                    <div className="self-stretch h-0.5 relative box-border z-[1] border-t-[2px] border-solid border-dimgray-200" />
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[31px] box-border max-w-full">
                    <div className="h-[41px] w-[380px] flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border gap-[5px] max-w-full z-[2]">
                      <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                        <div className="relative tracking-[0.02em] leading-[129.26%] font-medium mq450:text-3xl mq450:leading-[29px]">
                          Reason for contact
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[12.5px] px-0 pb-0">
                          <img
                            className="w-5 h-[11px] relative"
                            alt=""
                            src="/xmlid-225.svg"
                          />
                        </div>
                      </div>
                      <div className="self-stretch h-0.5 relative box-border border-t-[2px] border-solid border-dimgray-200" />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[5.3px]">
                    <div className="relative tracking-[0.02em] leading-[129.26%] font-medium z-[1] mq450:text-3xl mq450:leading-[29px]">
                      Message
                    </div>
                    <div className="relative text-5xl tracking-[0.02em] leading-[129.26%] font-medium text-dimgray-100 z-[1] mq450:text-lgi mq450:leading-[25px]">
                      Hi I’m looking for an appointment...
                    </div>
                    <div className="self-stretch h-0.5 relative box-border z-[1] border-t-[2px] border-solid border-dimgray-200" />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-0.5 text-5xl text-white">
                  <div className="rounded-11xl bg-gray-200 flex flex-row items-start justify-start py-[7px] px-5 gap-[4px] z-[1]">
                    <div className="relative tracking-[0.02em] leading-[129.26%] mq450:text-lgi mq450:leading-[25px]">
                      Send
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                      <img
                        className="w-[19.7px] h-[13px] relative"
                        alt=""
                        src="/svgrepo-iconcarrier.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-end justify-start gap-[19.5px] min-w-[438px] max-w-full text-left text-xl mq800:min-w-full">
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[5px] pl-0 box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-start gap-[25px] max-w-full mq800:flex-wrap mq1350:flex-1">
                  <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border min-w-[237px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[48px] max-w-full mq450:gap-[24px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full">
                        <div className="flex flex-row items-start justify-start py-0 px-px text-13xl">
                          <div className="relative tracking-[0.02em] leading-[129.26%] font-medium z-[1] mq800:text-7xl mq800:leading-[33px] mq450:text-lgi mq450:leading-[25px]">
                            Location
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[15px] pr-0 pl-px box-border max-w-full">
                          <div className="flex-1 relative tracking-[0.02em] leading-[129.26%] inline-block max-w-full z-[1] mq450:text-base mq450:leading-[21px]">
                            KS bakery, back side, Madhava Nagar Colony, Ambedkar
                            Nagar, Hafeezpet, Hyderabad, Telangana 500049
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[20px]">
                          <div className="flex flex-row items-start justify-start">
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
                              loading="lazy"
                              alt=""
                              src="/frame-5.svg"
                            />
                            <div className="relative tracking-[0.02em] leading-[129.26%] whitespace-nowrap z-[2] mq450:text-base mq450:leading-[21px]">
                              +91-9192939495
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
                            <div className="flex flex-row items-start justify-start">
                              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                                <img
                                  className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                                  alt=""
                                  src="/frame-6.svg"
                                />
                              </div>
                              <div className="relative tracking-[0.02em] leading-[129.26%] whitespace-nowrap z-[2] mq450:text-base mq450:leading-[21px]">
                                resetwellnesscenter@gmail.com
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[9px] text-13xl">
                        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-1">
                          <div className="relative tracking-[0.02em] leading-[129.26%] font-medium z-[1] mq800:text-7xl mq800:leading-[33px] mq450:text-lgi mq450:leading-[25px]">
                            Follow us
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[13px]">
                          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                            <img
                              className="w-5 h-5 relative overflow-hidden shrink-0 z-[1]"
                              alt=""
                              src="/frame-7.svg"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-start gap-[7px]">
                            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                              <img
                                className="w-[25px] h-[17px] relative z-[1]"
                                alt=""
                                src="/svgrepo-iconcarrier-1.svg"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-start">
                              <img
                                className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px] z-[2]"
                                loading="lazy"
                                alt=""
                                src="/frame-8.svg"
                              />
                              <img
                                className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px] z-[1]"
                                loading="lazy"
                                alt=""
                                src="/frame-9.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-lavender flex flex-row items-start justify-start pt-12 px-12 pb-[49px] box-border min-w-[280px] z-[1] mq800:flex-1 mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <div className="h-[280px] w-[280px] relative rounded-xl bg-lavender hidden" />
                    <img
                      className="h-[183px] w-[183px] relative overflow-hidden shrink-0 z-[2] mq800:flex-1"
                      loading="lazy"
                      alt=""
                      src="/frame-10.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[662px] h-px relative box-border max-w-full z-[1] border-t-[1px] border-solid border-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
