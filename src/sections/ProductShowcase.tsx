import productImage from "@/assets/screen2.png";
import pyramidImage from "@/assets/backpack.png";
import tybeImage from "@/assets/wifi.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="overflow-x-clip bg-gradient-to-b from-[#FFFFFF] to-[#ffffff] py-4">
      <div className="p-2 md:p-12 lg:p-24">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your income</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way of content monetization
          </h2>
          <p className="section-description mt-5">
            Effortlessly create you blogs with paywall and great UI
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="prodcut image" className="mt-10" />
          <Image
            src={pyramidImage}
            alt="pyramid image"
            className="hidden md:block absolute -right-36 -top-32"
            height={262}
            width={262}
          />
          <Image
            src={tybeImage}
            alt="tube image"
            height={248}
            className="hidden md:block absolute bottom-24 -left-40"
          />
        </div>
      </div>
    </section>
  );
};
