import React from 'react';

const advantages = [
    {
      title: "Boost Customer Confidence",
      description: "By allowing customers to virtually try on clothes, they can visualize how they’ll look, leading to more confident buying decisions and fewer returns.",
      image: "path/to/boost-confidence-image.jpg" // Replace with actual image path
    },
    {
      title: "Fewer Returns for Retailers",
      description: "With a better idea of fit and style, customers are less likely to return items, saving you time and money on returns handling.",
      image: "path/to/fewer-returns-image.jpg" // Replace with actual image path
    },
    {
      title: "Stronger Brand Image & Loyalty",
      description: "Deliver a modern, AI-powered shopping experience that sets your brand apart, encouraging customers to return and recommend your store.",
      image: "path/to/brand-loyalty-image.jpg" // Replace with actual image path
    },
    {
      title: "Higher Revenue Potential",
      description: "Fewer returns, more confident customers, and an engaging shopping experience lead to higher average order values and increased sales.",
      image: "path/to/revenue-potential-image.jpg" // Replace with actual image path
    },
    {
      title: "Distinct Market Advantage",
      description: "Stand out in the competitive online fashion market with a cutting-edge feature that enhances the shopping experience and attracts new customers.",
      image: "path/to/market-advantage-image.jpg" // Replace with actual image path
    },
    {
      title: "Enhanced Marketing",
      description: "Follow up with personalized email campaigns after virtual try-ons, offering tailored discounts and encouraging customers to complete their purchases.",
      image: "path/to/enhanced-marketing-image.jpg" // Replace with actual image path
    },
    {
      title: "Improved Customer Satisfaction",
      description: "Offering a personalized virtual try-on experience increases overall customer satisfaction, as shoppers feel more in control of their decisions.",
      image: "path/to/customer-satisfaction-image.jpg" // Replace with actual image path
    },
    {
      title: "Data-Driven Insights",
      description: "Gain valuable data on customer preferences, size selections, and purchasing behavior, which can be used to refine inventory and marketing strategies.",
      image: "path/to/data-insights-image.jpg" // Replace with actual image path
    }
  ];
const Advantages = () => {
    return (
        <section className="py-10 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full flex-col justify-start items-center lg:gap-11 gap-8 inline-flex">
              <div className="w-full flex-col justify-start items-center gap-2.5 flex">
                <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                  Advantages
                </h2>
                <p className="max-w-4xl mx-auto text-center text-gray-500 text-lg font-normal leading-8">
                  Discover the benefits of our platform and how it can enhance your career growth.
                </p>
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-start items-start gap-8">
                {advantages.map((advantage, index) => (
                  <div
                    key={index}
                    className="w-full flex flex-col justify-between px-6 py-8 rounded-2xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out gap-2.5"
                  >
                    <div className="flex-col justify-start items-center gap-3.5 flex flex-grow">
                      <img
                        src={advantage.image}
                        alt={advantage.title}
                        className="w-12 h-12 object-contain"
                      />
                      <h4 className="text-center text-gray-900 text-lg font-semibold leading-8">
                        {advantage.title}
                      </h4>
                      <p className="text-center text-gray-500 text-sm font-normal leading-snug">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      );
    };
export default Advantages;
