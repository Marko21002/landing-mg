import { AppleCardsCarouselDemo } from "@/components/carousel";
import { VelocityScroll } from "@/components/scrolltext";
import { LampDemo } from "@/components/ui/lamp";
import { CallToAction } from "@/sections/CallToAction";
import Feature from "@/sections/Feature";
import Example from "@/sections/Footer";
import Form from "@/sections/Form";
import { Navbar } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>;
      <VelocityScroll
        text="Create and Monetize"
        default_velocity={3}
        className="opacity-60 font-display text-center text-2xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-5xl md:leading-[5rem]"
      />
      {/* <ProductShowcase></ProductShowcase> */}
      <Feature></Feature>
      <AppleCardsCarouselDemo></AppleCardsCarouselDemo>
      <LampDemo></LampDemo>
      <Form></Form>
      {/* <CallToAction></CallToAction> */}
      <Example></Example>
    </>
  );
}
