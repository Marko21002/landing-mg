import { VelocityScroll } from "@/components/scrolltext";
import { CallToAction } from "@/sections/CallToAction";
import Example from "@/sections/Footer";
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
        text="Create Content  Make Money"
        default_velocity={3}
        className="opacity-40 font-display text-center text-2xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-5xl md:leading-[5rem]"
      />
      <ProductShowcase></ProductShowcase>
      <Pricing></Pricing>
      <CallToAction></CallToAction>
      <Example></Example>
    </>
  );
}
