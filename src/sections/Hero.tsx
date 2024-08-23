"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/eth.png";
import cylinderImage from "@/assets/backpack.png";
import noodleImage from "@/assets/wifi.png";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";
import { Cover } from "@/components/ui/cover";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 p-4 pb-20 md:pt-5 md:pb-10  overflow-x-clip"
    >
      <div className="md:pl-24">
        <div className="md:flex items-center ">
          <div className="md:w-[478px]">
            <div className="tag">Currently in private beta</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#1d1220] text-transparent bg-clip-text mt-6">
              MoneyGlitch
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Create your own blog and start earning with subscription-based
              payments. Share exclusive content, engage with your audience, and
              monetize your work—all in one place.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary ">
                <a href="/meeting" target="_blank">
                  Book a Call
                </a>
              </button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md: md:max-w-none md:-left-1"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cylinderImage.src}
              width={220}
              height={220}
              alt="cylinder image"
              className="hidden md:block -top-8 -left-52 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              width={220}
              alt="noodle"
              className="hidden md:block absolute top-[480px] left-[600px] rotate-[30deg]"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
