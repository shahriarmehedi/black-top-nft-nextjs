import React from 'react'

export default function Header() {
    return (
        <div className='hidden lg:block z-40'>
            {/* ----TOP HEADER (LIMITED TIME OFFER)--- */}

            <div className='h-[32px] w-full bg-[#F9C986]'>
                <div className='container mx-auto h-full flex items-center justify-center'>
                    <p className='text-[#1F1F1F] text-sm font-bold'>
                        Limited Time Launch Offer: <span className=' font-normal'>No upfront cost + No marketplace fee</span>
                    </p>
                </div>
            </div>


            {/* ----NAVBAR---- */}
            <div className='h-[80px] w-full bg-[#0C0D0D]'>
                <div className='container mx-auto h-full flex items-center justify-between'>
                    <div className='flex items-center'>
                        <picture><img src='/img/logo.png' alt='logo' className='h-[25px]' /></picture>
                        <p className='text-white text-2xl font-semibold ml-2'>
                            BlackTop
                        </p>

                        {/* search box */}
                        <div className='flex items-center justify-between bg-[#242826] rounded-md ml-5 w-[300px]'>
                            <input type='text' placeholder='Search collections' className='bg-transparent outline-none text-white text-sm font-semibold ml-2 px-3 py-3' />
                            <picture><img src='/img/searchtail.png' alt='search' className='h-[25px] relative right-3' /></picture>
                        </div>

                        {/* nav menu */}
                        <div className='flex items-center ml-7 gap-3'>
                            <p className='text-white text-sm font-semibold mr-5 hover:bg-zinc-800 rounded-xl transition duration-300 p-3 cursor-pointer'>Active</p>
                            <p className='text-white text-sm font-semibold mr-5 hover:bg-zinc-800 rounded-xl transition duration-300 p-3 cursor-pointer'>Upcoming</p>
                        </div>

                    </div>
                    <div className='flex items-center'>
                        <div className='flex items-center ml-7 gap-3'>
                            <p className='text-white text-sm font-semibold mr-5 hover:bg-zinc-800 rounded-xl transition duration-300 p-3 cursor-pointer'>+ Create</p>
                        </div>
                        <div className='flex items-center gap-3 bg-zinc-700 hover:bg-zinc-600 transition duration-300 rounded-xl px-5 py-3'>
                            <picture><img src='/img/cubby.png' alt='profile' className='h-[25px]' /></picture>
                            <h3 className='text-white'>JacobCubby</h3>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
