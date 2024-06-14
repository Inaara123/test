import FrameComponent8 from "./FrameComponent8";
import PainReliefContent from "./PainReliefContent";
import PostureItem from "./PostureItem";
import PropTypes from "prop-types";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-foundation-pale-background-pale-background-500 overflow-hidden flex flex-col items-start justify-start pt-[99px] px-[31px] pb-[82px] box-border gap-[22px] shrink-0 [debug_commit:69da668] max-w-full mt-[-52px] text-justify text-29xl text-foundation-text-blue-text-blue-600 font-outfit mq800:pb-[34px] mq800:box-border mq1350:pb-[53px] mq1350:box-border ${className}`}
    >
      <h2 className="m-0 h-[60px] relative text-inherit font-semibold font-inherit inline-block max-w-full mq800:text-19xl mq450:text-10xl">
        Chiropractic Session
      </h2>
      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border max-w-full text-17xl text-white">
        <div className="rounded-11xl bg-foundation-primary-blue-primary-blue-400 overflow-hidden flex flex-row items-start justify-start py-[21px] px-[33px]">
          <div className="h-[45px] relative tracking-[0.01em] font-semibold inline-block mq800:text-10xl mq450:text-3xl">
            <span>{`Here’s what you will experience after `}</span>
            <span className="text-foundation-secondary-text-green-secondary-text-green-300">
              One
            </span>
            <span>{` `}</span>
            <span className="text-foundation-tertiary-text-blue-tertiary-text-blue-300">
              Chiropractic
            </span>
            <span> Session with us</span>
          </div>
        </div>
        <div className="w-[994px] flex flex-row items-start justify-start py-0 px-[33px] box-border max-w-full text-9xl text-midnightblue">
          <div className="flex-1 flex flex-row items-start justify-start max-w-full">
            <img
              className="h-[644px] w-[1.8px] relative object-contain"
              loading="lazy"
              alt=""
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
                <FrameComponent8 improvedConfidence="Improved Confidence" />
                <div className="flex flex-col items-start justify-start gap-[23px] max-w-full">
                  <PainReliefContent
                    line3="/line-3.svg"
                    reliefFromSciaticaPain="80% relief from Sciatica Pain"
                  />
                  <PainReliefContent
                    line3="/line-2.svg"
                    reliefFromSciaticaPain="Your Energy will literally double"
                    propRowGap="20px"
                    propPadding="unset"
                    propGap="unset"
                    propMargin="unset"
                  />
                </div>
                <PostureItem
                  postureCorrectionYesInsta="Posture Correction, yes Instantly!!"
                  line11="/line-2.svg"
                />
                <PostureItem
                  postureCorrectionYesInsta="Deep state of calm and relaxation"
                  line11="/line-2-1.svg"
                  propWidth="659px"
                  propPadding="0px 20px"
                  propPadding1="4px 17px"
                  propTextAlign="left"
                />
                <PainReliefContent
                  line3="/line-2.svg"
                  reliefFromSciaticaPain="Your Migraine will disappear... Guaranteed!"
                  propRowGap="unset"
                  propPadding="0px 0px 7px"
                  propGap="1px"
                  propMargin="0"
                />
                <FrameComponent8
                  improvedConfidence="Improvement in Sleep Quality(You will thank us for this)"
                  propWidth="909px"
                  propPadding="0px 20px 11px"
                  propAlignSelf="unset"
                  propPadding1="4px 11px"
                />
                <FrameComponent8
                  improvedConfidence="Instant relief from Chronic Back, Neck, Knee and Shoulder Pain"
                  propWidth="unset"
                  propPadding="unset"
                  propAlignSelf="stretch"
                  propPadding1="4px 12px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1306px] flex flex-row items-start justify-start py-0 px-[34px] box-border max-w-full text-13xl text-foundation-primary-blue-primary-blue-800">
        <div className="flex-1 relative tracking-[0.01em] font-semibold inline-block max-w-full mq800:text-7xl mq450:text-lgi">
          <span className="leading-[40px]">
            Not exaggerating, your bad posture is doing more harm than you know,
            poor blood circulation will mess up your hormonal balance and will
            cause dysfunction of your crucial hormones like dopamine, serotonin
            and testosterone. With one session you will restart your hormonal
            engine and meet the new you
          </span>
          .
        </div>
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
