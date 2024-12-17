import React from "react";

function CTA() {
	return (
		<section className='py-20'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='xl:p-24 gap-32 p-12 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 flex  justify-between flex-col-reverse lg:flex-row'>
					<div className='w-full lg:w-2/6 relative'>
						<img
							src='https://pagedone.io/asset/uploads/1696241449.png'
							alt='CTA tailwind section'
							className='xl:absolute xl:bottom-0 rounded-t-3xl -mb-12 mx-auto lg:-mb-12 xl:-mb-24 lg:mx-0 object-cover'
						/>
					</div>
					<div className='w-full lg:w-2/3'>
						<h2 className='font-manrope text-5xl text-white font-semibold mb-5 text-center lg:text-left'>
							Ready to Transform Your Store?{" "}
						</h2>
						<p className='text-lg text-white leading-8 mb-10 text-center lg:text-left'>
							Sign up for early access and enjoy exclusive
							benefits.
						</p>
						<ul className=' space-y-3 text-left text-lg text-white'>
							<li className='flex items-center space-x-4'>
								<svg
									className='flex-shrink-0 w-6 h-6 text-white'
									viewBox='0 0 30 30'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z'
										stroke='currentColor'
										strokeWidth='1.6'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
								<span>
									Priority Access to SnapFit when we launch.
								</span>
							</li>
							<li className='flex items-center space-x-4'>
								<svg
									className='flex-shrink-0 w-6 h-6 text-white'
									viewBox='0 0 30 30'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z'
										stroke='currentColor'
										strokeWidth='1.6'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
								<span>
									A Big Discount 🎉 on your any subscription.
								</span>
							</li>
							<li className='flex items-center space-x-4'>
								<svg
									className='flex-shrink-0 w-6 h-6 text-white'
									viewBox='0 0 30 30'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z'
										stroke='currentColor'
										strokeWidth='1.6'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
								<span>
									The chance to shape the product to fit your
									store’s needs.
								</span>
							</li>
						</ul>
						<div className='relative mt-8'>
							<input
								type='text'
								name='email'
								className='w-full py-2.5 px-5 h-14 border border-gray-300 bg-white shadow-sm rounded-full text-lg text-indigo-500 focus:outline-none placeholder:text-indigo-400 pr-16'
								placeholder='Your mail id..'
							/>
							<button className='absolute right-1 top-1/2 transform -translate-y-1/2 h-auto py-3 px-7 bg-indigo-600 shadow-sm rounded-full text-white font-semibold'>
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CTA;
