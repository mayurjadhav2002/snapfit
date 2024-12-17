import React from "react";

function HowTo() {
	return (
		<>
			<section className='py-15 relative'>
				<div className='w-full flex-col justify-start items-center gap-2.5 flex pb-10'>
					<h2 className='text-center text-gray-900 text-4xl font-bold font-manrope leading-normal'>
						How It Works for Users
					</h2>
					<p className='max-w-4xl mx-auto text-center text-gray-500 text-lg font-normal leading-8'>
						A simple process that allows your customers to easily
						engage with your store and make valuable purchases.
					</p>
				</div>
				<div className='w-full max-w-7xl mx-auto px-4 md:px-8'>
					<div className='grid grid-cols-12 gap-y-11'>
						<div className='col-span-12 lg:col-span-7 py-12 px-4 lg:px-11 flex items-center justify-center gap-8 max-lg:max-w-lg max-lg:mx-auto order-2 lg:order-1'>
							<div className='text-center lg:text-left'>
								<h2 className='font-manrope font-bold text-3xl text-indigo-500 sm:text-4xl leading-10 '>
                                Browse & Try On 🛍️📸

								</h2>
								<p className='text-md font-normal text-gray-700 pt-5'>
                                Browse the store and find the perfect clothing item. Click the ‘Try On’ button and upload your photo to see the garment on you instantly!

								</p>
							</div>
						</div>

						<div className='col-span-12 lg:col-span-5 max-lg:mx-auto flex items-center justify-center order-1 lg:order-2'>
							<img
								src='https://pagedone.io/asset/uploads/1701234779.png'
								alt='Warehouse image'
								className='w-5/6 h-5/6 rounded-3xl lg:rounded-r-2xl object-cover'
							/>
						</div>
					</div>

					<div className=' grid grid-cols-12 gap-y-11'>
						<div className='col-span-12 lg:col-span-5 flex items-center justify-center lg:order-1'>
							<img
								src='https://pagedone.io/asset/uploads/1701234779.png'
								alt='Warehouse image'
								className='w-5/6 h-5/6 rounded-3xl lg:rounded-l-2xl object-cover'
							/>
						</div>
						<div className='col-span-12 lg:col-span-7 py-12 px-4 lg:px-11 flex items-center justify-center gap-8 max-lg:max-w-lg max-lg:mx-auto lg:order-2'>
							<div className='text-center lg:text-left'>
								<h2 className='font-manrope font-bold text-3xl sm:text-4xl leading-10 text-indigo-500A'>
                                Shop & Share 💬💖
								</h2>
								<p className='text-md font-normal text-gray-700 pt-5'>
                                Love your look? Share it on social media to unlock exclusive discounts. Then, complete your purchase with confidence knowing it fits perfectly!

								</p>
							</div>
						</div>
					</div>


				</div>
			</section>
		</>
	);
}

export default HowTo;
