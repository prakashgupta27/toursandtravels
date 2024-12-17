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
                <Breadcrumb heading='Contact us' subHeading='Contact us' />
            </div>
            <section className="py-12 bg-gray-100">
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