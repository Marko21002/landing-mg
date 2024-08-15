"use client";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import React from "react";
import Wifi from "@/assets/wifi.png";
import Backpack from "@/assets/backpack.png";

const creatorFeatures = [
  {
    name: "Effortless Monetization: ",
    description:
      "Easily set up paywalls and subscription tiers to start earning from your content with just a few clicks.",
    icon: "💵",
  },
  {
    name: "Content Ownership: ",
    description:
      "You own your content, and our platform gives you the control to decide how and when to monetize it.",
    icon: "🔑",
  },

  {
    name: "Analytics Insights: ",
    description:
      "Track your earnings, audience growth, and content performance with our comprehensive analytics dashboard.",
    icon: "📊",
  },
];

const consumerFeatures = [
  {
    name: "Exclusive Content: ",
    description:
      "Gain access to exclusive content from your favorite creators that you won’t find anywhere else.",
    icon: "🔒",
  },
  {
    name: "Flexible Subscriptions: ",
    description:
      "Choose from various subscription plans to fit your budget and access the content you love.",
    icon: "📅",
  },
  {
    name: "Connect with Creators: ",
    description:
      "Possibility to interact with influencers more closely then in other social media apps",
    icon: "🤝",
  },
  {
    name: "Seamless Experience: ",
    description:
      "Enjoy a smooth, user-friendly interface that makes browsing and accessing content a breeze.",
    icon: "📱",
  },
];
export default function Feature() {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        {/* For Content Creators */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg ">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
                For Content Creators
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We create the most user-friendly and monetizable platform for
                creators:
              </p>
              <dl className="mt-10 space-y-8 text-lg leading-7 text-gray-600 lg:max-w-none">
                {creatorFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold ">
                      <div className="absolute left-0 top-0 text-[25px]">
                        {feature.icon}
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="inline ">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <motion.img
              src={Wifi.src}
              alt="Features for creators"
              className="max-w-full h-auto"
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
          </div>
        </div>

        {/* For Consumers */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start mt-20">
          <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
                For Consumers
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Explore unique, high-quality content curated just for you:
              </p>
              <dl className="mt-10 space-y-8 text-lg leading-7 text-gray-600 lg:max-w-none">
                {consumerFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold ">
                      <div className="absolute left-0 top-0 text-[25px]">
                        {feature.icon}
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <img
              src={Backpack.src}
              alt="Features for consumers"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
