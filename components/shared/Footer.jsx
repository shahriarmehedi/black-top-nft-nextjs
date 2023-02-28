import React from 'react'

export default function Footer() {
    return (
        <div className='bg-[#0F1312]'>
            <div className='container mx-auto w-11/12 lg:w-full flex justify-between py-24'>
                <div>
                    <div className="flex items-center gap-4">
                        <picture>
                            <img src='/img/logo.png' alt='hero' />
                        </picture>
                        <h3 className='text-white text-2xl font-semibold'>
                            BlackTop
                        </h3>
                    </div>

                    <p className='text-gray-200 py-5'>
                        The premier Solana pre-sale NFT platform.
                    </p>
                </div>

                {/* footer menus 3 column */}
                <div className="flex items-center gap-24">
                    <div className="flex flex-col gap-5">
                        <h3 className='text-white text-lg font-semibold'>
                            Payment
                        </h3>
                        <h3 className='text-gray-400'>
                            About
                        </h3>
                        <h3 className='text-gray-400'>
                            Contact
                        </h3>
                        <h3 className='text-gray-400'>
                            Terms
                        </h3>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h3 className='text-white text-lg font-semibold'>
                            Payment
                        </h3>
                        <h3 className='text-gray-400'>
                            About
                        </h3>
                        <h3 className='text-gray-400'>
                            Contact
                        </h3>
                        <h3 className='text-gray-400'>
                            Terms
                        </h3>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h3 className='text-white text-lg font-semibold'>
                            Payment
                        </h3>
                        <h3 className='text-gray-400'>
                            About
                        </h3>
                        <h3 className='text-gray-400'>
                            Contact
                        </h3>
                        <h3 className='text-gray-400'>
                            Terms
                        </h3>
                    </div>

                </div>
            </div>
            <hr className='border-gray-800' />
            <div>
                <div className='container mx-auto w-11/12 lg:w-full flex justify-between py-10'>
                    <div className="flex items-center gap-4">

                        <h3 className='text-white font-semibold'>
                            © 2023 Paymint, Inc.
                        </h3>

                    </div>
                    <div className="flex items-center gap-7">
                        <h3 className='text-white font-semibold'>
                            Terms of Service
                        </h3>
                        <h3 className='text-white font-semibold'>
                            Privacy Policy
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
