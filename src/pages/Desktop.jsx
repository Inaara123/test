import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import AcupunctureImage from "../components/AcupunctureImage";
import FrameComponent1 from "../components/FrameComponent1";
import PatientTestimonials from "../components/PatientTestimonials";
import FrameComponent from "../components/FrameComponent";

const Desktop = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-[19px] px-0 pb-[75px] box-border gap-[51px] leading-[normal] tracking-[normal] mq800:gap-[25px]">
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[17px] max-w-full">
        <FrameComponent10 />
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <FrameComponent9 />
          <FrameComponent7 />
          <FrameComponent6 />
        </div>
      </section>
      <section className="w-[1270px] flex flex-row items-start justify-start pt-0 px-[43px] pb-[11px] box-border max-w-full text-justify text-29xl text-foundation-text-blue-text-blue-600 font-outfit mq1350:pl-[21px] mq1350:pr-[21px] mq1350:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[21px] max-w-full">
          <div className="w-[836px] flex flex-col items-start justify-start gap-[24px] max-w-full">
            <h2 className="m-0 h-[60px] relative text-inherit font-semibold font-inherit inline-block mq800:text-19xl mq450:text-10xl">
              Neurotherapy
            </h2>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1.5 box-border max-w-full text-17xl">
              <div className="h-[90px] flex-1 relative tracking-[0.01em] leading-[45px] font-medium inline-block max-w-full mq800:text-10xl mq800:leading-[36px] mq450:text-3xl mq450:leading-[27px]">
                <span className="text-foundation-secondary-text-sky-secondary-text-sky-600">
                  Experience
                </span>
                <span>{` a new `}</span>
                <span className="text-foundation-primary-blue-primary-blue-400">
                  stress free
                </span>
                <span> calm that you haven't experienced in a long time.</span>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-2 box-border max-w-full text-17xl">
            <p className="m-0 h-[135px] flex-1 relative tracking-[0.01em] leading-[45px] font-medium inline-block max-w-full mq800:text-10xl mq800:leading-[36px] mq450:text-3xl mq450:leading-[27px]">
              We understand your Life is filled with stress, the fast paced
              life, office deadlines and a 100 other things that are leaving you
              completely disturbed.
            </p>
          </div>
        </div>
      </section>
      <FrameComponent4 />
      <FrameComponent3 />
      <img
        className="w-[63px] h-[11.5px] absolute !m-[0] bottom-[4327.5px] left-[587px]"
        loading="lazy"
        alt=""
        src="/line-23.svg"
      />
      <FrameComponent2 />
      <AcupunctureImage />
      <FrameComponent1 />
      <PatientTestimonials />
      <FrameComponent />
    </div>
  );
};

export default Desktop;
