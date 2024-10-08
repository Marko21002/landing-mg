import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/eth.png";
import springImage from "@/assets/eth.png";
import { CardDemo } from "@/components/funcard";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#eae7e7] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Soon in production</h2>
          {/* <p className="section-description">
            You can send us an application if you want to become content creator
            at the platform
          </p> */}
          <Image
            src={starImage}
            alt="Star Image"
            width={200}
            className="hidden lg:block absolute -left-[350px] -top-[100px]"
          />
          <Image
            src={springImage}
            alt="Spring Image"
            width={200}
            className="hidden lg:block absolute -right-[300px] -top-[40px]"
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          {/* <button className="btn btn-primary">Become content creator</button> */}

          {/* <button className="btn btn-text gap-1">
            <span>Join the waitlist</span>
            <ArrowRight className="h-5 w-5" />
          </button> */}
        </div>
        <div className="flex items-center justify-center mt-10">
          {/* <CardDemo></CardDemo> */}
        </div>
      </div>
    </section>
  );
};
