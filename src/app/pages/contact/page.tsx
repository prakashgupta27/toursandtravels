'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer'


const Aboutus = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='About us' subHeading='About us' />
            </div>
            <div className="relative w-full h-screen">
                {/* Image Section */}
                <div
                    className="w-full h-1/2 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/images/tourTravel/bahubalilake.png')`,
                        backgroundSize: 'cover', // Make sure the image covers the entire div
                        backgroundPosition: 'center', // Center the image
                    }}
                >
                    <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-5">
                        {/* Text Overlay */}
                        <div className="text-secondary2 text-center px-8 md:px-16">
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                                Here are about the IndianPrivateChauffeur
                            </h1>
                            <p className="mt-4 text-lg md:text-xl">
                                This is a catchy headline with some exciting text overlaid on the image.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="what-new-block bg-[#f9f9f9] py-5">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center mt-10 md:mt-16 gap-10">
                        {/* Text Section */}
                        <div className="text-section w-full md:w-1/2 text-center md:text-left">
                            <h2 className="text-2xl font-bold text-black sm:text-3xl">
                                Food
                            </h2>
                            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-700 px-2 md:px-0">
                            Rajasthani food offers a rich and flavorful experience, featuring a variety of spices and unique ingredients. Dishes like dal baati churma, gatte ki sabzi, and laal maas provide a perfect blend of traditional flavors. The vibrant, hearty meals leave travelers delighted, offering a true taste of Rajasthan's culinary heritage.
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className="image-section w-full md:w-1/2 flex justify-center">
                            <Image
                                src="/images/tourTravel/rajasthanifood.jpg"
                                alt="A view showcasing the beauty of Rajasthan"
                                width={800}
                                height={533}
                                className="rounded-xl shadow-lg w-full max-w-md md:max-w-none"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center mt-10 md:mt-16 gap-10">
                        <div className="image-section w-full md:w-1/2 flex justify-center">
                            <Image
                                src="/images/tourTravel/incridebilerajasthan.jpeg"
                                alt="A view showcasing the beauty of Rajasthan"
                                width={800}
                                height={533}
                                className="rounded-xl shadow-lg w-full max-w-md md:max-w-none"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="text-section w-full md:w-1/2 text-center md:text-left">
                            <h2 className="text-2xl font-bold text-black sm:text-3xl">
                                About <br /> Incredible Rajasthan
                            </h2>
                            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-700 px-2 md:px-0">
                                Rajasthan, often referred to as the &quot;Land of Kings,&quot; is a state that exudes timeless charm, steeped in rich history and vibrant culture. From the majestic palaces of Jaipur to the haunting beauty of the Thar Desert, Rajasthan offers a captivating blend of architectural wonders, colorful traditions, and breathtaking landscapes. The state is renowned for its royal heritage, with its forts and temples narrating tales of bravery and grandeur. Visitors are enchanted by its bustling markets, traditional dance forms like Ghoomar, and the hospitality of its people. Rajasthan is truly a place where the past and present merge, offering an unforgettable experience.
                            </p>
                        </div>

                        {/* Image Section */}

                    </div>
                </div>
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center mt-10 md:mt-16 gap-10">
                        {/* Text Section */}
                        <div className="text-section w-full md:w-1/2 text-center md:text-left">
                            <h2 className="text-2xl font-bold text-black sm:text-3xl">
                                About <br /> Incredible Rajasthan
                            </h2>
                            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-700 px-2 md:px-0">
                                Rajasthan, often referred to as the &quot;Land of Kings,&quot; is a state that exudes timeless charm, steeped in rich history and vibrant culture. From the majestic palaces of Jaipur to the haunting beauty of the Thar Desert, Rajasthan offers a captivating blend of architectural wonders, colorful traditions, and breathtaking landscapes. The state is renowned for its royal heritage, with its forts and temples narrating tales of bravery and grandeur. Visitors are enchanted by its bustling markets, traditional dance forms like Ghoomar, and the hospitality of its people. Rajasthan is truly a place where the past and present merge, offering an unforgettable experience.
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className="image-section w-full md:w-1/2 flex justify-center">
                            <Image
                                src="/images/tourTravel/incridebilerajasthan.jpeg"
                                alt="A view showcasing the beauty of Rajasthan"
                                width={800}
                                height={533}
                                className="rounded-xl shadow-lg w-full max-w-md md:max-w-none"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>            <div className="container mx-auto px-4">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center mt-10 md:mt-16 gap-10">
                            <div className="image-section w-full md:w-1/2 flex justify-center">
                                <Image
                                    src="/images/tourTravel/travlersatisafications.jpeg"
                                    alt="A view showcasing the beauty of Rajasthan"
                                    width={800}
                                    height={533}
                                    className="rounded-xl shadow-lg w-full max-w-md md:max-w-none"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="text-section w-full md:w-1/2 text-center md:text-left">
                                <h2 className="text-2xl font-bold text-black sm:text-3xl">
                                    Travler Satistaction first
                                </h2>
                                <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-700 px-2 md:px-0">
                                Chauffeur services offer travelers a seamless and luxurious experience, ensuring comfort and convenience. From punctuality to professional drivers, every detail is tailored to meet the highest standards. With personalized attention, premium vehicles, and smooth rides, travelers enjoy stress-free journeys, making their trips both memorable and satisfying.
                                </p>
                            </div>

                            {/* Image Section */}

                        </div>
                    </div>
                </div>

            </div>
            <section className=" bg-gray-100">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center">
                        {/* Business Owner Section */}
                        <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
                            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                                <Image
                                    src={'/images/slider/taraji.jpeg'} // Replace with your business owner's image
                                    alt="Owner of indianPrivateChauffeur"
                                    width={128}
                                    height={128}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h2 className="text-3xl font-semibold text-gray-800 mt-4">Tara Chandra </h2>
                            <h3 className="text-xl text-gray-800 mt-2">Owner of indianPrivateChauffeur</h3>
                            <p className="mt-4 text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur impedit amet expedita! Minima distinctio ea eum iste eos neque expedita vel molestias. Delectus labore culpa fugiat enim optio officia inventore.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur impedit amet expedita! Minima distinctio ea eum iste eos neque expedita vel molestias. Delectus labore culpa fugiat enim optio officia inventore.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur impedit amet expedita! Minima distinctio ea eum iste eos neque expedita vel molestias. Delectus labore culpa fugiat enim optio officia inventore.
                            </p>
                        </div>

                        {/* About Business Section */}
                        <div className="lg:w-1/2 pl-0 lg:pl-16 text-center lg:text-left">
                            <h2 className="text-4xl font-bold text-blue-600">About IndianPrivateChauffeur Business</h2>
                            <p className="text-lg text-gray-700 mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur impedit amet expedita! Minima distinctio ea eum iste eos neque expedita vel molestias. Delectus labore culpa fugiat enim optio officia inventore.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur impedit amet expedita! Minima distinctio ea eum iste eos neque expedita vel molestias. Delectus labore culpa fugiat enim optio officia inventore.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur impedit amet expedita! Minima distinctio ea eum iste eos neque expedita vel molestias. Delectus labore culpa fugiat enim optio officia inventore.
                            </p>
                            <div className="mt-6">
                                <a
                                    href="#"
                                    className="inline-block py-3 px-8 bg-blue-600 text-black font-semibold text-lg rounded-md hover:bg-blue-500 transition duration-300"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Aboutus