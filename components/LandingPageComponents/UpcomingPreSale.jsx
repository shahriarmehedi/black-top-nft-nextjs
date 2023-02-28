import React from 'react'

export default function UpcomingPreSale() {


    const upcomingPreSale = [
        {
            id: 1,
            image: '/img/activeimage.png',
            name: 'Blingz',
            verified: '/img/activeverified.png',
            supply: 1502,
            token: 'Solana',
            timeLeft: '05h 40m 02s',
            tokenImage: '/img/solana.png'
        },
        {
            id: 1,
            image: '/img/activeimage.png',
            name: 'Blingz',
            verified: '/img/activeverified.png',
            supply: 1502,
            token: 'Solana',
            timeLeft: '05h 40m 02s',
            tokenImage: '/img/solana.png'
        },
        {
            id: 1,
            image: '/img/activeimage.png',
            name: 'Blingz',
            verified: '/img/activeverified.png',
            supply: 1502,
            token: 'Solana',
            timeLeft: '05h 40m 02s',
            tokenImage: '/img/solana.png'
        },
        {
            id: 1,
            image: '/img/activeimage.png',
            name: 'Blingz',
            verified: '/img/activeverified.png',
            supply: 1502,
            token: 'Solana',
            timeLeft: '05h 40m 02s',
            tokenImage: '/img/solana.png'
        },

    ]


    return (
        <div className='bg-[#0F1312] pb-10'>
            <div className="container mx-auto flex justify-between pb-10">
                <div className="flex items-center gap-4">
                    <picture>
                        <img src='/img/active.png' alt='hero' />
                    </picture>
                    <h3 className='text-white text-2xl font-semibold'>
                        Upcoming Pre-Sales
                    </h3>
                </div>
                <h3 className='text-[#00FF7F] font-semibold text-lg'>
                    View all
                </h3>
            </div>

            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-7">
                    {
                        upcomingPreSale.map((item, index) => (
                            <div key={index} className='bg-[#242826] rounded-2xl pb-5'>
                                <picture>
                                    <img src='/img/activeimage.png' className='w-full' alt='hero' />
                                </picture>
                                <div className='px-5 pt-5'>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <h3 className='text-white font-semibold'>
                                                {item.name}
                                            </h3>
                                            <picture>
                                                <img src={item.verified} className='w-5 h-5 ml-2' alt='hero' />
                                            </picture>
                                        </div>
                                        <div>
                                            <h3 className='text-white font-semibold text-xs'>
                                                {item.timeLeft}
                                            </h3>
                                        </div>

                                    </div>

                                    <div className="flex justify-between items-center pt-2">
                                        <h3 className='text-white font-semibold text-xs'> <span className='text-gray-400 font-normal'>{item.supply} supply</span> </h3>
                                        <div className="flex items-center gap-1">
                                            <picture>
                                                <img src={item.tokenImage} alt='hero' />
                                            </picture>
                                            <h3 className='text-gray-400 text-xs'>
                                                {item.token}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
