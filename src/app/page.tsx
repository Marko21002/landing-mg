"use client";
import { useRef } from "react";
import { AppleCardsCarouselDemo } from "@/components/carousel";
import { VelocityScroll } from "@/components/scrolltext";
import { LampDemo } from "@/components/ui/lamp";
import { CallToAction } from "@/sections/CallToAction";
import Feature from "@/sections/Feature";
import Example from "@/sections/Footer";
import Form from "@/sections/Form";
import { Navbar } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import LetsMakeThingsHappenSection from "@/sections/lets-make-thing-happen";

export default function Home() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Pass the scrollToForm function to the Navbar */}
      <Navbar scrollToForm={scrollToForm} />
      <Hero />
      <VelocityScroll
        text="Create and Monetize"
        default_velocity={3}
        className="opacity-60 font-display text-center text-2xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-5xl md:leading-[5rem]"
      />
      <Feature />
      <AppleCardsCarouselDemo />
      <LampDemo />

      {/* Attach the ref to the div wrapping the Form component */}
      <div ref={formRef}>{/* <Form /> */}</div>

      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>
      <Example />
    </>
  );
}
