import React from 'react'

export default function ActivePreSale() {

    const activePreSale = [
        {
            id: 1,
            image: '/img/activeimage.png',
            name: 'Blingz',
            verified: '/img/activeverified.png',
            progress: 1502,
            max: 3500,
            token: 'Solana',
            tokenImage: '/img/solana.png'
        },
        {
            id: 2,
            image: '/img/activeimage.png',
            name: 'Blingz',
            verified: '/img/activeverified.png',
            progress: 1802,
            max: 3500,
            token: 'Solana',
            tokenImage: '/img/solana.png'
        },
        {
            id: 3,
            image: '/img/activeimage.png',
            name: 'Blingz',
            verified: '/img/activeverified.png',
            progress: 2202,
            max: 3500,
            token: 'Solana',
            tokenImage: '/img/solana.png'
        },
        {
            id: 4,
            image: '/img/activeimage.png',
            name: 'Blingz',
            verified: '/img/activeverified.png',
            progress: 502,
            max: 3500,
            token: 'Solana',
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
                        Active Pre-Sales
                    </h3>
                </div>
                <h3 className='text-[#00FF7F] font-semibold text-lg'>
                    View all
                </h3>
            </div>

            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-7">
                    {
                        activePreSale.map((item, index) => (
                            <div key={index} className='bg-[#242826] rounded-2xl pb-5'>
                                <picture>
                                    <img src='/img/activeimage.png' className='w-full' alt='hero' />
                                </picture>
                                <div className='px-5 pt-5'>
                                    <div className="flex items-center">
                                        <h3 className='text-white font-semibold'>
                                            {item.name}
                                        </h3>
                                        <picture>
                                            <img src={item.verified} className='w-5 h-5 ml-2' alt='hero' />
                                        </picture>
                                    </div>
                                    <div>
                                        <progress className="progress progress-secondary w-full" value={item.progress} max={item.max}></progress>
                                    </div>
                                    <div className="flex justify-between items-center pt-1">
                                        <h3 className='text-white font-semibold text-xs'> {item.progress}/ <span className='text-gray-400 font-normal'>{item.max} remaining</span> </h3>
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
