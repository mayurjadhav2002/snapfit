import React from "react";
import {FiPlay, FiPlayCircle} from "react-icons/fi";

function Hero() {
	return (
		<section className='py-10 sm:py-16 lg:py-24'>
			<div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
				<div className='grid items-center grid-cols-1 gap-12 lg:grid-cols-2'>
					<div>
						<h1 className='text-4xl font-bold text-black sm:text-6xl lg:text-7xl'>
							Transform Shopping with
							<div className='relative inline-flex'>
								<span className='absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]'></span>
								<h1 className='relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl'>
									Virtual Try-On.
								</h1>
							</div>
						</h1>

						<p className='mt-8 text-base text-black sm:text-xl'>
							Let your customers see how clothes will look on them
							before purchasing. Reduce returns, boost sales, and
							create happy, confident shoppers.
						</p>

						<div className='mt-10 sm:flex sm:items-center items-center sm:space-x-8'>
							<a
								href='#'
								title=''
								className='inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-600'
								role='button'
							>
								{" "}
								Start exploring{" "}
							</a>

							<a
								href='#'
								title=''
								className='inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80'
							>
								<FiPlayCircle
									size={40}
									className='text-red-500 mr-3'
								/>
								Watch video
							</a>
						</div>
					</div>

					<div>
						<img
							className='w-full'
							src='https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png'
							alt=''
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
