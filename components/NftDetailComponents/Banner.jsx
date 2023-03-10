import React from 'react'

export default function Banner() {

    return (

        <div className="bg-[url('/img/background.png')] lg:h-[850px] pb-10 lg:pb-0 bg-cover bg-center bg-no-repeat">
            {/* space */}
            <div className='h-[100px]'></div>
            <div className=' container mx-auto  bg-[#242826] border-[1px] border-[#555E59] rounded-2xl flex flex-col lg:flex-row justify-between  w-11/12 lg:w-full'>
                <div className='w-full lg:w-[36%] px-5 lg:px-10 py-10'>
                    <div className='flex gap-2'>
                        <button className='flex gap-2 items-center bg-[#00FF7F] bg-opacity-[0.15] px-3 py-2 rounded-full'>
                            <picture>
                                <img src='/img/activeverified.png' className='' alt='hero' />
                            </picture>
                            <h3 className='text-[#00FF7F] text-xs font-semibold'>Verified</h3>
                        </button>
                        <button className='flex gap-2 items-center bg-white bg-opacity-[0.15] px-3 py-2 rounded-full'>
                            <picture>
                                <img src='/img/world.png' className='' alt='hero' />
                            </picture>
                            <h3 className='text-white text-xs font-semibold'>Public</h3>
                        </button>
                    </div>

                    <div>
                        <h1 className='text-white text-3xl font-bold mt-5'>MoonHolders</h1>
                        <div className='pt-5 flex items-center gap-2 lg:gap-3'>
                            <button className='flex text-xs lg:text-base items-center gap-2 lg:gap-2 text-white border-[1px] border-[#555E59] p-3 rounded-xl'>
                                <picture>
                                    <img src='/img/text.png' className='' alt='hero' />
                                </picture>
                                WhitePaper
                            </button>
                            <button className='flex text-xs lg:text-base items-center gap-2 lg:gap-2 text-white border-[1px] border-[#555E59] p-3 rounded-xl'>
                                <picture>
                                    <img src='/img/text.png' className='' alt='hero' />
                                </picture>
                                WhitePaper
                            </button>
                            <button className='flex text-xs lg:text-base items-center gap-2 lg:gap-2 text-white border-[1px] border-[#555E59] p-3 rounded-xl'>
                                <picture>
                                    <img src='/img/text.png' className='' alt='hero' />
                                </picture>
                                WhitePaper
                            </button>
                        </div>
                        <p className='text-gray-200 pt-5'>
                            MoonHoldings is a crypto and NFT portfolio tracker, management and competitive comparison app. Bringing engaging features to capture the attention of crypto investors. <span className='text-[#00FF7F]'>Read more</span>
                        </p>
                        <div className='mt-5'>
                            <div className='bg-[#313633] px-5 py-3 rounded-md flex items-center justify-between'>
                                <h3 className='text-white font-semibold'>
                                    Supply: 3500
                                </h3>
                                <picture>
                                    <img src='/img/lock.png' className='' alt='hero' />
                                </picture>
                            </div>
                        </div>

                        <div className='mt-3 flex justify-between items-center'>
                            <h3>
                                <span className='text-gray-400 font-semibold'>Price: </span>
                                <span className='text-white font-semibold'>3 SOL</span>
                            </h3>
                            <button className='px-3 py-2 bg-[#313633] text-white rounded-md'>
                                Ends in: 1d 12h 30m
                            </button>
                        </div>
                        <div className='mt-5'>
                            <progress className="progress progress-secondary w-full" value={1502} max={3500}></progress>
                            <div className="flex justify-between">
                                <p className='text-white'>
                                    <span className='text-white font-semibold text-sm'>1,502</span>
                                </p>
                                <div className="flex items-center gap-1">
                                    <picture>
                                        <img src='/img/solana.png' alt='hero' />
                                    </picture>
                                    <h3 className='text-gray-400 text-xs'>
                                        Solana
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <button className='py-5 px-7 w-full bg-white rounded-xl text-xl font-bold'>
                                Connect your wallet
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-[40%]'>
                    <picture className='flex relative'>
                        <img src='/img/nftimage.png' className='w-full h-full' alt='hero' />
                        <img src='/img/leftgradient.png' className='w-[200px] h-full absolute' alt='hero' />
                    </picture>
                </div>
                <div className='w-full lg:w-[24%]'>
                    <div className='text-white text-center py-7 bg-[#242826] rounded-tr-[35px]'>
                        <h3 className='font-semibold text-gray-300'>PRE-SALE CHAT</h3>
                    </div>
                    <div>
                        {/* chat items */}

                    </div>
                    <div className='bg-black h-[533px] '>
                        {/* chat input */}
                    </div>
                </div>
            </div>
        </div>
    )
}
