import React from 'react'

export default function Collection() {


    const tableData = [
        {
            id: 1,
            username: 'username',
            wallet: '6A8nNg7pURHgkm89xC3b7NL2FppuaBuZLeMg3iiTgdko',
            amount: '$27,000',
            twitter: '@twitterusername',
            discord: 'Discord #1234',
        },
        {
            id: 2,
            username: 'username',
            wallet: '6A8nNg7pURHgkm89xC3b7NL2FppuaBuZLeMg3iiTgdko',
            amount: '$27,000',
            twitter: '@twitterusername',
            discord: 'Discord #1234',
        },
        {
            id: 3,
            username: 'username',
            wallet: '6A8nNg7pURHgkm89xC3b7NL2FppuaBuZLeMg3iiTgdko',
            amount: '$27,000',
            twitter: '@twitterusername',
            discord: 'Discord #1234',
        },
        {
            id: 4,
            username: 'username',
            wallet: '6A8nNg7pURHgkm89xC3b7NL2FppuaBuZLeMg3iiTgdko',
            amount: '$27,000',
            twitter: '@twitterusername',
            discord: 'Discord #1234',
        },
        {
            id: 5,
            username: 'username',
            wallet: '6A8nNg7pURHgkm89xC3b7NL2FppuaBuZLeMg3iiTgdko',
            amount: '$27,000',
            twitter: '@twitterusername',
            discord: 'Discord #1234',
        },
        {
            id: 6,
            username: 'username',
            wallet: '6A8nNg7pURHgkm89xC3b7NL2FppuaBuZLeMg3iiTgdko',
            amount: '$27,000',
            twitter: '@twitterusername',
            discord: 'Discord #1234',
        },
        {
            id: 7,
            username: 'username',
            wallet: '6A8nNg7pURHgkm89xC3b7NL2FppuaBuZLeMg3iiTgdko',
            amount: '$27,000',
            twitter: '@twitterusername',
            discord: 'Discord #1234',
        },
        {
            id: 8,
            username: 'username',
            wallet: '6A8nNg7pURHgkm89xC3b7NL2FppuaBuZLeMg3iiTgdko',
            amount: '$27,000',
            twitter: '@twitterusername',
            discord: 'Discord #1234',
        },
        {
            id: 9,
            username: 'username',
            wallet: '6A8nNg7pURHgkm89xC3b7NL2FppuaBuZLeMg3iiTgdko',
            amount: '$27,000',
            twitter: '@twitterusername',
            discord: 'Discord #1234',
        },
        {
            id: 10,
            username: 'username',
            wallet: '6A8nNg7pURHgkm89xC3b7NL2FppuaBuZLeMg3iiTgdko',
            amount: '$27,000',
            twitter: '@twitterusername',
            discord: 'Discord #1234',
        },
    ]
    return (
        <div className='bg-[#0C0D0C] text-white'>
            <div className='container mx-auto py-20 px-5 lg:px-0'>
                <div className='flex flex-col lg:flex-row'>

                    {/* ----SIDEBAR---- */}
                    <div className='w-full lg:w-[20%] pl-10 lg:pl-0 pb-10 lg:pb-0'>
                        <h1 className=' font-bold mb-3'>Dashboards</h1>
                        <div className='flex flex-col gap-3'>
                            <a href='#' className='text-[#00FF7F]'>Collection 1</a>
                            <a href='#' className='text-[#AFB6B2]'>Collection 1</a>
                        </div>
                        <hr className='my-3 border-[#555E59] w-[150px]' />
                        <h1 className=' font-bold mb-3'>Settings</h1>
                        <div className='flex flex-col gap-3'>
                            <a href='#' className='text-[#AFB6B2]'>Account</a>
                            <a href='#' className='text-[#AFB6B2]'>Wallets</a>
                        </div>
                    </div>

                    {/* ----CONTENT---- */}
                    <div className='w-full lg:w-[55%] lg:pl-20'>
                        <div className='bg-[#242826] rounded-xl p-5'>
                            <div className="flex flex-col lg:flex-row justify-between items-center">
                                <div className="flex gap-3 items-center">
                                    <picture>
                                        <img src="/img/collectionprofile.png" alt="" />
                                    </picture>
                                    <div className=''>
                                        <h1 className='font-bold text-lg'>Collection 1</h1>
                                        <button className='text-[#AFB6B2] mt-2 text-xs px-2 py-1 rounded-lg border-[#AFB6B2] border-[1px]'>Free tier</button>
                                    </div>
                                </div>
                                <div className='flex  gap-3 mt-7 lg:mt-0'>
                                    <button className='font-semibold px-7 py-2 rounded-lg border-[#AFB6B2] border-[1px]'>Edit</button>
                                    <button className='font-semibold px-5 py-2 rounded-lg bg-[#00FF7F] text-black'>Visit page</button>
                                </div>
                            </div>
                            <div className='bg-[#0C0D0C] mt-7 p-5 rounded-xl'>
                                <div className="flex justify-between items-center">
                                    <h2 className='font-semibold text-sm'>Sale is Live</h2>
                                    <h2 className='font-semibold text-sm'>50% Sold</h2>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h2 className='text-[#AFB6B2] text-xs'>15:00:00 remaining</h2>
                                    <h2 className='text-[#AFB6B2] text-xs'>1500 / 3000</h2>
                                </div>
                                <progress className='w-full progress-secondary h-1 mt-2' value="1500" max="3000"></progress>
                            </div>
                        </div>

                        <div className='bg-[#00FF7F] p-5 text-black rounded-xl mt-5'>
                            <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center">
                                <div>
                                    <h3 className='text-2xl font-bold'>
                                        Free staking is on its way!
                                    </h3>
                                    <p>
                                        Join the discord to be the first to know!
                                    </p>
                                </div>
                                <div>
                                    <button className='p-10 py-4 rounded-lg bg-black text-white font-semibold'>
                                        Join Discord
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='border-[#242826] border-[1px] p-5 rounded-xl mt-5 text-white'>
                            <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row justify-between items-center mb-5">
                                <h3 className='font-semibold'>Sale Overview</h3>
                                <div className='flex items-center px-4 py-1 gap-3 bg-[#242826] rounded-lg'>
                                    <h4>walllet:</h4>
                                    <picture>
                                        <img src="/img/solanasmall.png" alt="" />
                                    </picture>
                                    <p className=' text-[#AFB6B2]'>
                                        6A8nNg7pURHgkm...
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col lg:flex-row gap-2'>
                                <div className='w-full lg:w-[40%] bg-[#242826] rounded-xl text-center px-5 py-7'>
                                    <h2 className='text-2xl font-bold'>$27,000</h2>
                                    <p className='text-[#AFB6B2] text-xs mt-2'>Total USDC</p>
                                </div>
                                <div className='w-full lg:w-[40%] bg-[#242826] rounded-xl text-center px-5 py-7'>
                                    <div className="flex items-center gap-2 justify-center">
                                        <picture>
                                            <img src="/img/solanalarge.png" alt="" />
                                        </picture>
                                        <h2 className='text-2xl font-bold'>1,200</h2>
                                    </div>
                                    <p className='text-[#AFB6B2] text-xs mt-2'>Total Solana</p>
                                </div>
                                <div className='w-full lg:w-[20%] bg-[#242826] rounded-xl text-center px-5 py-7'>
                                    <h2 className='text-2xl font-bold'>90</h2>
                                    <p className='text-[#AFB6B2] text-xs mt-2'>Buyers</p>
                                </div>

                            </div>
                        </div>

                        <div className='border-[#242826] border-[1px] p-5 rounded-xl mt-5 text-white'>
                            <div className="flex justify-between items-center mb-5">
                                <h3 className='font-semibold'>Buyers List</h3>
                                <button className='bg-white px-5 py-2 rounded-lg text-black font-semibold'>
                                    Export List
                                </button>
                            </div>
                            <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row justify-between items-center mb-5">
                                <div className='flex items-center w-full'>
                                    <input type="text" name="" placeholder='Search List  (Twitter, Discord, Username)' id="" className='px-5 w-full lg:w-[370px] py-2 bg-[#242826] text-white rounded-lg' />
                                    <picture>
                                        <img src="/img/search.png" alt="" className='relative right-8' />
                                    </picture>
                                </div>
                                <div className='flex items-center border-[#242826]  border-[1px] px-7 rounded-lg '>
                                    <p className='text-[#AFB6B2]'>
                                        Filter by:
                                    </p>
                                    <select name="" id="" className='px-7 py-2  bg-[#0C0D0C] text-[#AFB6B2] '>
                                        <option value="">All</option>

                                    </select>
                                </div>
                            </div>


                            <div className=' overflow-x-scroll lg:overflow-x-auto'>
                                <table className='w-full table-auto overflow-x-scroll'>
                                    <thead>
                                        <tr className='text-[#AFB6B2] text-xs gap-2'>
                                            <th className='py-3 text-left'>Username</th>
                                            <th className='py-3'>Discord ID</th>
                                            <th className='py-3'>Twitter @</th>
                                            <th className='py-3'>Amount</th>
                                            <th className='py-3 text-right'>Wallet Address</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            tableData.map((item, index) => (
                                                <tr key={index} className='text-white text-xs gap-2'>
                                                    <td className='py-3 text-left'>
                                                        {item.username}
                                                    </td>
                                                    <td className='py-3'>
                                                        {item.discord}
                                                    </td>
                                                    <td className='py-3'>
                                                        {item.twitter}
                                                    </td>
                                                    <td className='py-3'>
                                                        {item.amount}
                                                    </td>
                                                    <td className='py-3 text-right'>
                                                        {item.wallet}
                                                    </td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </table>

                                {/* mobile device table */}


                                <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 mt-10 justify-between items-center">
                                    <div className='flex items-center gap-2'>
                                        <h3>
                                            Page:
                                        </h3>
                                        <div className="btn-group">
                                            <button className="btn btn-sm bg-[#303130]">1</button>
                                            <button className="btn btn-sm bg-[#0C0D0C] text-white">2</button>
                                            <button className="btn btn-sm bg-[#0C0D0C] text-white">3</button>
                                            <button className="btn btn-sm bg-[#0C0D0C] text-white">4</button>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <h3>
                                            Show:
                                        </h3>
                                        {/* select */}
                                        <select name="" id="" className='bg-[#0C0D0C]'>
                                            <option value="">10 per page</option>
                                            <option value="">20 per page</option>
                                            <option value="">30 per page</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}
