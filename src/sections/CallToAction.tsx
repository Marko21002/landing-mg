import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#b9b8b8] py-24 overflow-x-clip overflow-y-clip">
      <div className="">
        <div className="section-heading relative">
          <h2 className="section-title">Soon in production</h2>
          <p className="section-description">
            You can send us an application if you want to become content creator
            at the platform
          </p>
          <Image
            src={starImage}
            alt="Star Image"
            width={200}
            className="absolute -left-[350px] -top-[100px]"
          />
          <Image
            src={springImage}
            alt="Spring Image"
            width={200}
            className="absolute -right-[300px] -top-[40px]"
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Become content creator</button>
          <button className="btn btn-text gap-1">
            <span>Join the waitlist</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
