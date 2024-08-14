"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Cover } from "./ui/cover";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        <Cover>Usefull Information</Cover>
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const Content1 = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          What is MoneyGlitch -
        </span>{" "}
        MoneyGlitch is an all-in-one platform empowering content creators to
        build their own personalized, subscription-based websites with ease.
        Designed to help you maximize your earnings, MoneyGlitch offers a suite
        of powerful tools for content creation, fan engagement, and
        monetization. Whether you're selling digital content, physical products,
        or exclusive subscriptions, MoneyGlitch gives you full control over your
        brand, with a user-friendly interface and stunning designs. It's your
        creativity, your way—amplified by cutting-edge technology and seamless
        integration. Monetize your passion, connect with your audience, and take
        your creator business to the next level with MoneyGlitch.
      </p>
    </div>
  );
};
const Content2 = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Join the MoneyGlitch Beta -
        </span>{" "}
        MoneyGlitch is currently in its beta stage, and we're excited to
        collaborate with forward-thinking influencers and content creators who
        are eager to be among the first to experience our platform. <br />
        <br />
        If you're interested in building your own personalized website, complete
        with subscription options, digital and physical product sales, and
        powerful content creation tools, we want to hear from you! <br />
        <br />
        To get started, simply fill out the form on our site or reach out to us
        via email at{" "}
        <a href="mailto:your-email@example.com">your-email@example.com</a>,
        Instagram{" "}
        <a href="https://www.instagram.com/yourusername" target="_blank">
          @MoneyGlitch
        </a>
        , or X{" "}
        <a href="https://twitter.com/yourusername" target="_blank">
          @MoneyGlitch
        </a>
        . <br />
        <br />
        We'll work closely with you to set up your website and gather your
        feedback as we continue to refine and streamline the process. We're
        committed to making MoneyGlitch as seamless and user-friendly as
        possible, and your input during this beta phase is invaluable. <br />
        <br />
        <strong>
          Don't miss this opportunity to be part of the next big thing in
          content creation and monetization—join the MoneyGlitch beta today!
        </strong>
      </p>
    </div>
  );
};

const data = [
  {
    category: "About us",
    title: "What is MoneyGlitch?",
    src: "/mg.webp",
    content: <Content1 />,
  },
  {
    category: "Content Creator",
    title: "How to join us as a Content Creator?",
    src: "/creator-blog.webp",
    content: <Content2 />,
  },
];
