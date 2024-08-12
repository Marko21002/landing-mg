import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 200,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Basic blogging tools",
      "Standard templates and themes",
      "Platform branding",
      "Basic analytics",
      "Monetization with limited revenue share",
      "Community support",
    ],
  },
  {
    title: "Premium",
    monthlyPrice: 0,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Independent domain",
      "Removal of platform branding",
      "Enhanced customization options",
      "Advanced analytics and reporting",
      "Priority customer support",
      "Higher revenue share from monetization",
      "Access to premium templates",
    ],
  },
  {
    title: "Custom Solution",
    monthlyPrice: "Contact us",
    buttonText: "Get a custom solution",
    popular: false,
    inverse: false,
    features: [
      "Bespoke design and UI",
      "Custom domain and branding",
      "Unique features and integrations",
      "Dedicated account manager",
      "Full control over monetization",
      "Exclusive analytics tools",
      "Custom development and API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description mt-5">
            Free if you are a part of platform,Upgrade if you want your personal
            blog
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                key={title}
                className={twMerge(
                  "p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full",
                  inverse === true && "border-black bg-black text-white"
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      inverse === true && "text-white/60"
                    )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <span className="bg-[linear-gradient(to_right,#9B529F,#A49C52,#7A8A5E,#4B8CAC,#2AABAB)] text-transparent bg-clip-text font-medium">
                        Currently in Beta
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tight leading-none">
                    {monthlyPrice}
                  </span>
                  <span
                    className={twMerge(
                      "tracking-tight font-bold text-black/50",
                      inverse === true && "text-white/80"
                    )}
                  >
                    /month
                  </span>
                </div>
                <button
                  className={twMerge(
                    "btn btn-primary w-full mt-[30px]",
                    inverse === true && "bg-white text-black"
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex text-sm items-center gap-4"
                    >
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
