import React from "react";
import {FiTrendingUp, FiPackage, FiUsers, FiHeart} from "react-icons/fi";

const iconsClassName = "text-indigo-600 ";
const features = [
	{
		id: 1,
		icon: <FiTrendingUp size={30} className={iconsClassName} />,
		title: "Increased Conversions",
		description:
			"Turn window shoppers into buyers! Our virtual try-on helps customers visualize how clothes will fit, boosting confidence and sales.",
		cta: "Get started >",
	},
	{
		id: 2,
		icon: <FiPackage size={30} className={iconsClassName} />,
		title: "Reduced Returns",
		description:
			"Lower return rates by letting customers try on clothes virtually before purchasing. More accurate choices mean fewer returns and happier customers.",
		cta: "See how >",
	},
	{
		id: 3,
		icon: <FiUsers size={30} className={iconsClassName} />,
		title: "Engage & Retain Customers",
		description:
			"Engage customers with interactive virtual try-ons that enhance their shopping experience and encourage them to return.",
		cta: "Learn more >",
	},
	{
		id: 4,
		icon: <FiHeart size={30} className={iconsClassName} />,
		title: "Enhanced Brand Loyalty",
		description:
			"Build long-term customer relationships by offering innovative solutions that set your brand apart and improve satisfaction.",
		cta: "Explore now >",
	},
];

function Features() {
	return (
		<section className='py-24'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				{/* Heading Section */}
				<div className='mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto'>
					<div className='relative w-full text-center lg:text-left lg:w-2/4'>
						<span className='bg-indigo-50 text-indigo-500 text-sm font-medium mr-2 px-2.5 rounded py-1.5'>
							Features
						</span>

						<h2 className='text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0'>
							Why Fashion Store Owners Love Our Virtual Try-On
							Solution!
						</h2>
					</div>
					<div className='relative w-full text-center  lg:text-left lg:w-2/4'>
						<p className='text-lg font-normal text-gray-500 mb-5'>
							We offer all the benefits that create a personalized
							shopping experience, boosting confidence,
							satisfaction, and customer loyalty.{" "}
						</p>
						<a
							href='#'
							className='flex flex-row items-center justify-center gap-2 text-base font-semibold text-indigo-600 lg:justify-start hover:text-indigo-700 '
						>
							Button CTA{" "}
							<svg
								width='20'
								height='20'
								viewBox='0 0 20 20'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5'
									stroke='#4F46E5'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								></path>
							</svg>
						</a>
					</div>
				</div>

				{/* Features List */}
				<div className='flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8'>
					{features.map((feature) => (
						<div
							key={feature.id}
							className='group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-600'
						>
							<div className='bg-white  rounded-full flex justify-center items-center w-14 h-14 mb-4'>
								{feature.icon}
							</div>
							<h4 className='text-xl font-semibold text-gray-900 group-hover:text-white transition-all'>
								{feature.title}
							</h4>
							<p className='text-sm py-4 text-gray-500 group-hover:text-white transition-all leading-5'>
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Features;
