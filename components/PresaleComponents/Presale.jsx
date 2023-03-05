import React from 'react'

export default function Presale() {
    return (
        <div className='bg-[#0C0D0C] border-t-[1px] border-gray-800'>
            <div className='container mx-auto flex flex-col lg:flex-row pb-20 '>
                <div className=' w-full lg:w-[60%]'>
                    <div className='lg:w-1/2 mx-auto'>
                        <h1 className='text-4xl font-bold  text-white pt-10'>Create Pre-Sale Page</h1>
                        <p className=' text-gray-500 text-xl pt-3'>
                            Select your blockchain
                        </p>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-14'>
                            <div className='border-[1px] hover:border-[3px] transition duration-200 border-gray-800 hover:border-gray-300 rounded-2xl p-7'>
                                <picture className='flex justify-center'>
                                    <img src='/img/solanalogo.png' alt='solana' />
                                </picture>
                                <h1 className='text-2xl font-semibold text-center text-white pt-3'>Solana</h1>
                            </div>
                            <div className='border-[1px] hover:border-[3px] transition duration-200 border-gray-800 hover:border-gray-300 rounded-2xl p-7'>
                                <picture className='flex justify-center'>
                                    <img src='/img/ethereumlogo.png' alt='ethereum' />
                                </picture>
                                <h1 className='text-2xl font-semibold text-center text-white pt-3'>Ethereum</h1>
                            </div>
                            <div className='border-[1px] hover:border-[3px] transition duration-200 border-gray-800 hover:border-gray-300 rounded-2xl p-7'>
                                <picture className='flex justify-center'>
                                    <img src='/img/polygonlogo.png' alt='polygon' />
                                </picture>
                                <h1 className='text-2xl font-semibold text-center text-white pt-3'>Polygon</h1>
                            </div>
                            <div className='border-[1px] hover:border-[3px] transition duration-200 border-gray-800 hover:border-gray-300 rounded-2xl p-7'>
                                <picture className='flex justify-center'>
                                    <img src='/img/bitcoinlogo.png' alt='ethereum' />
                                </picture>
                                <h1 className='text-2xl font-semibold text-center text-white pt-3'>Bitcoin</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' w-full lg:w-[40%] border-l-[1px] border-gray-800 lg:pl-10'>
                    <div className='lg:w-3/5 lg:pl-7'>
                        <h3 className='text-gray-200 text-lg font-semibold pt-14 pb-5'>
                            Preview
                        </h3>
                        <div className='bg-[#242826] rounded-2xl pb-5'>
                            <picture>
                                <img src='/img/noimage.png' className='w-full' alt='hero' />
                            </picture>
                            <div className='px-5 pt-5'>
                                <div className="flex items-center">
                                    <h3 className='text-white font-semibold'>
                                        Company Name
                                    </h3>

                                </div>
                                <div>
                                    <progress className="progress progress-secondary w-full" value={10} max={30}></progress>
                                </div>
                                <div className="flex justify-between items-center pt-1">
                                    <h3 className='text-white font-semibold text-xs'> Sold supply/ <span className='text-gray-400 font-normal'>Total suplly</span> </h3>
                                    <div className="flex items-center gap-1">
                                        <picture>
                                            <img src="/img/solana.png" alt='hero' />
                                        </picture>
                                        <h3 className='text-gray-400 text-xs'>
                                            Solana
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mt-10 flex flex-col gap-3'>
                            <div className='bg-[#242826] py-4 w-full px-5 flex justify-between rounded-full'>
                                <h3 className='text-white font-semibold'>
                                    1 <span className='pl-3'>Blockchain</span>
                                </h3>
                                <h3 className='text-white'>
                                    In progress
                                </h3>
                            </div>
                            <div className='border-[#242826] border-[1px] py-4 w-full px-5 flex justify-between rounded-full'>
                                <h3 className='text-white font-semibold'>
                                    1 <span className='pl-3'>Details</span>
                                </h3>
                                <h3 className='text-white'>
                                    {/* In progress */}
                                </h3>
                            </div>
                            <div className='border-[#242826] border-[1px] py-4 w-full px-5 flex justify-between rounded-full'>
                                <h3 className='text-white font-semibold'>
                                    1 <span className='pl-3'>Team info</span>
                                </h3>
                                <h3 className='text-white'>
                                    {/* In progress */}
                                </h3>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <button className='bg-[#003319] w-full py-5 text-black rounded-2xl'>
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
