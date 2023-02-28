import React from 'react'

export default function Hero() {

    return (

        <div className="bg-[url('/img/gradient.png')] h-[750px] bg-cover bg-center bg-no-repeat">
            {/* space */}
            <div className='h-[100px]'></div>
            <div className=' container mx-auto  bg-[#3AC5A6] h--[700px] lg:h-[550px] rounded-2xl flex flex-col lg:flex-row items-center justify-between  w-11/12 lg:w-full'>
                <div className='lg:pl-14 w-5/6 lg:w-1/3 pt-5 lg:pt-0'>
                    <button className='bg-[#6BD4BC] rounded-lg px-3 py-2 text-white font-semibold text-sm'>
                        PRE-SALE IS ACTIVE
                    </button>
                    <div>
                        <h2 className='text-5xl text-white font-bold
                        leading-[1.2] mt-2
                        '>
                            Lorem ipsum <br /> dolor sit amet <br /> consectetur.
                        </h2>
                    </div>
                    <div className='mt-5'>
                        <progress className="progress progress-accent w-[200px] lg:w-[350px]" value={1502} max={3500}></progress>
                        <p className='text-white'>
                            <span className='text-white font-semibold text-sm'>1502/3500</span>  remaining
                        </p>
                    </div>
                    <div className='flex mt-7 gap-5'>
                        <button className='bg-white rounded-lg px-7 py-5 text-black font-bold'>
                            Mint Now
                        </button>
                        <button className='border-white border-2 rounded-lg px-7 py-5 text-white font-bold'>
                            Mint Now
                        </button>

                    </div>
                </div>
                <div className=''>
                    <picture>
                        <img src='/img/heroimage.png' className='w-full' alt='hero' />
                    </picture>
                </div>

            </div>
        </div>

    )
}
