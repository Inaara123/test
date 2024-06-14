import PropTypes from "prop-types";

const PatientTestimonials = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-[45px] pb-[67px] box-border max-w-full text-center text-33xl text-foundation-text-blue-text-blue-600 font-outfit mq800:pb-11 mq800:box-border mq450:pb-[29px] mq450:box-border mq1350:pl-[22px] mq1350:pr-[22px] mq1350:box-border ${className}`}
    >
      <div className="w-[1317.5px] flex flex-col items-start justify-start gap-[38px] max-w-full mq800:gap-[19px]">
        <h2 className="m-0 relative text-inherit tracking-[0.02em] leading-[129.26%] font-semibold font-inherit inline-block max-w-full mq800:text-23xl mq800:leading-[54px] mq450:text-12xl mq450:leading-[40px]">
          What our patients absolutely love about us!
        </h2>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-3 box-border max-w-full text-5xl text-white">
          <div className="flex-1 flex flex-row flex-wrap items-end justify-center gap-[34.5px] max-w-full mq800:gap-[17px]">
            <div className="flex-1 flex flex-row items-end justify-start py-0 pr-[19px] pl-0 box-border min-w-[277px] max-w-full [row-gap:20px] mq450:flex-wrap">
              <div className="h-[507px] flex-1 relative min-w-[247px] max-w-full">
                <div className="absolute top-[73px] left-[0px] shadow-[0px_4px_30px_rgba(109,_104,_210,_0.55),_0px_4px_50px_#ceccff_inset] rounded-xl bg-mediumslateblue w-full flex flex-col items-start justify-start pt-[81px] pb-[18px] pr-[7px] pl-[11px] box-border max-w-full">
                  <div className="w-[380px] h-[434px] relative shadow-[0px_4px_30px_rgba(109,_104,_210,_0.55),_0px_4px_50px_#ceccff_inset] rounded-xl bg-mediumslateblue hidden max-w-full" />
                  <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[9px]">
                    <div className="relative tracking-[0.02em] leading-[25px] z-[1] mq450:text-lgi mq450:leading-[25px]">
                      ⭐⭐⭐⭐⭐
                    </div>
                  </div>
                  <blockquote className="m-0 self-stretch relative text-xl tracking-[0.02em] leading-[129.26%] z-[1] mq450:text-base mq450:leading-[21px]">
                    <p className="m-0">{`"I was suffering from chronic back pain for years and tried everything from medication to physical therapy, but nothing worked. After just one 90-minute session with Dr. Prem Chand Vemula, I felt a significant improvement. Now, I’m pain-free and can enjoy my daily activities again. `}</p>
                    <p className="m-0">Highly recommend!"</p>
                  </blockquote>
                  <div className="flex flex-row items-start justify-start py-0 px-[11px] text-17xl">
                    <div className="flex flex-col items-start justify-start">
                      <b className="relative tracking-[0.02em] leading-[129.26%] font-bold z-[2] mq800:text-10xl mq800:leading-[37px] mq450:text-3xl mq450:leading-[28px]">
                        Priya S.
                      </b>
                      <div className="flex flex-row items-start justify-start py-0 px-[3px] mt-[-1px] text-base text-lightsteelblue">
                        <div className="relative tracking-[0.02em] leading-[129.26%] z-[3]">
                          Hyd, Telangana
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[117px] w-[145px] flex flex-row items-start justify-start">
                  <div className="h-[145px] flex-1 relative">
                    <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_7.3px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-thistle-100 w-full h-full z-[1]" />
                    <img
                      className="absolute top-[16px] left-[16px] rounded-980xl w-[113px] h-[114px] object-contain z-[2]"
                      loading="lazy"
                      alt=""
                      src="/random-p2-1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[27.5px] flex flex-col items-start justify-end pt-0 px-0 pb-[37.5px] box-border text-sm">
                <div className="self-stretch h-[160.5px] relative">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                    loading="lazy"
                    alt=""
                    src="/rectangle-13.svg"
                  />
                  <div className="absolute top-[67px] left-[23px] tracking-[0.02em] leading-[129.26%] [transform:_rotate(90deg)] [transform-origin:0_0] z-[2]">
                    Vitals.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[402.5px] flex flex-col items-start justify-start pt-0 px-0 pb-[103px] box-border min-h-[610px] max-w-full text-sm mq800:pb-[67px] mq800:box-border">
              <div className="self-stretch flex flex-col items-start justify-end pt-[73px] pb-0 pr-[23px] pl-0 box-border max-w-full mq800:pt-[47px] mq800:box-border">
                <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                  <div className="h-[160.5px] w-[27.5px] !m-[0] absolute right-[-22.5px] bottom-[37.5px] flex flex-row items-start justify-start pt-9 pb-[22.5px] pr-1 pl-[5px] box-border">
                    <div className="w-[102px] relative tracking-[0.02em] leading-[129.26%] inline-block [transform:_rotate(90deg)] shrink-0 z-[2]">
                      Google Reviews
                    </div>
                    <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                      <img
                        className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                        alt=""
                        src="/rectangle-13.svg"
                      />
                      <img
                        className="absolute top-[21px] left-[8px] w-3 h-3 overflow-hidden object-contain z-[2]"
                        alt=""
                        src="/frame-4@2x.png"
                      />
                    </div>
                  </div>
                  <div className="flex-1 shadow-[0px_4px_30px_rgba(109,_104,_210,_0.55),_0px_4px_50px_#ceccff_inset] rounded-xl bg-mediumslateblue flex flex-col items-start justify-start pt-[78px] px-1.5 pb-[17px] box-border gap-[6px] max-w-full text-5xl mq450:pt-[51px] mq450:pb-5 mq450:box-border">
                    <div className="w-[380px] h-[434px] relative shadow-[0px_4px_30px_rgba(109,_104,_210,_0.55),_0px_4px_50px_#ceccff_inset] rounded-xl bg-mediumslateblue hidden max-w-full" />
                    <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[30px] pl-5">
                      <div className="relative tracking-[0.02em] leading-[25px] z-[1] mq450:text-lgi mq450:leading-[25px]">
                        ⭐⭐⭐⭐⭐
                      </div>
                    </div>
                    <blockquote className="m-0 self-stretch relative text-xl tracking-[0.02em] leading-[129.26%] z-[1] mq450:text-base mq450:leading-[21px]">
                      <p className="m-0">{`"I was suffering from chronic back pain for years and tried everything from medication to physical therapy, but nothing worked. After just one 90-minute session with Dr. Prem Chand Vemula, I felt a significant improvement. Now, I’m pain-free and can enjoy my daily activities again. `}</p>
                      <p className="m-0">Highly recommend!"</p>
                    </blockquote>
                    <div className="flex flex-row items-start justify-start py-0 px-[11px] text-17xl">
                      <div className="flex flex-col items-start justify-start">
                        <b className="relative tracking-[0.02em] leading-[129.26%] font-bold z-[1] mq800:text-10xl mq800:leading-[37px] mq450:text-3xl mq450:leading-[28px]">
                          Rajesh K.
                        </b>
                        <div className="flex flex-row items-start justify-start py-0 px-[3px] text-base text-lightsteelblue">
                          <div className="relative tracking-[0.02em] leading-[129.26%] z-[2]">
                            Hyd, Telangana
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[145px] !m-[0] absolute top-[-73px] left-[112px] flex flex-row items-start justify-start">
                    <div className="h-[145px] flex-1 relative">
                      <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_7.3px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-thistle-100 w-full h-full z-[1]" />
                      <img
                        className="absolute top-[15px] left-[15px] rounded-980xl w-[116px] h-[116px] object-contain z-[2]"
                        loading="lazy"
                        alt=""
                        src="/random-p1-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[407.5px] flex flex-row items-end justify-start [row-gap:20px] max-w-full mq450:flex-wrap">
              <div className="h-[507px] flex-1 relative min-w-[247px] max-w-full">
                <div className="absolute top-[73px] left-[0px] shadow-[0px_4px_30px_rgba(109,_104,_210,_0.55),_0px_4px_50px_#ceccff_inset] rounded-xl bg-mediumslateblue w-full flex flex-col items-start justify-start pt-[81px] pb-[18px] pr-[7px] pl-[11px] box-border max-w-full">
                  <div className="w-[380px] h-[434px] relative shadow-[0px_4px_30px_rgba(109,_104,_210,_0.55),_0px_4px_50px_#ceccff_inset] rounded-xl bg-mediumslateblue hidden max-w-full" />
                  <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-2">
                    <div className="relative tracking-[0.02em] leading-[25px] z-[1] mq450:text-lgi mq450:leading-[25px]">
                      ⭐⭐⭐⭐⭐
                    </div>
                  </div>
                  <blockquote className="m-0 self-stretch relative text-xl tracking-[0.02em] leading-[129.26%] z-[1] mq450:text-base mq450:leading-[21px]">
                    <p className="m-0">{`"I was suffering from chronic back pain for years and tried everything from medication to physical therapy, but nothing worked. After just one 90-minute session with Dr. Prem Chand Vemula, I felt a significant improvement. Now, I’m pain-free and can enjoy my daily activities again. `}</p>
                    <p className="m-0">Highly recommend!"</p>
                  </blockquote>
                  <div className="flex flex-row items-start justify-start py-0 px-[13px] text-17xl">
                    <div className="flex flex-col items-start justify-start">
                      <b className="relative tracking-[0.02em] leading-[129.26%] font-bold z-[2] mq800:text-10xl mq800:leading-[37px] mq450:text-3xl mq450:leading-[28px]">
                        Arjun M.
                      </b>
                      <div className="relative text-base tracking-[0.02em] leading-[129.26%] text-lightsteelblue z-[3]">
                        Hyd, Telangana
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[117px] w-[145px] flex flex-row items-start justify-start">
                  <div className="h-[145px] flex-1 relative">
                    <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_7.3px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-thistle-100 w-full h-full z-[1]" />
                    <img
                      className="absolute w-[calc(100%_-_26px)] top-[9px] right-[13px] left-[13px] rounded-980xl max-w-full overflow-hidden h-[127px] object-contain z-[2]"
                      loading="lazy"
                      alt=""
                      src="/random-p3-1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[27.5px] flex flex-col items-start justify-end pt-0 px-0 pb-[37.5px] box-border text-sm">
                <div className="self-stretch h-[160.5px] relative">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                    loading="lazy"
                    alt=""
                    src="/rectangle-13.svg"
                  />
                  <div className="absolute top-[33px] left-[23px] tracking-[0.02em] leading-[129.26%] [transform:_rotate(90deg)] [transform-origin:0_0] z-[2]">
                    Health Grades
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PatientTestimonials.propTypes = {
  className: PropTypes.string,
};

export default PatientTestimonials;
