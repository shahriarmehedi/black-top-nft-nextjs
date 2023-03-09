import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

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
            <Menu as="div" className="">
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
                        <div className='flex items-center relative'>
                            <div className='flex items-center ml-7 gap-3'>
                                <p className='text-white text-sm font-semibold mr-5 hover:bg-zinc-800 rounded-xl transition duration-300 p-3 cursor-pointer'>+ Create</p>
                            </div>
                            <Menu.Button>
                                <div className='flex items-center gap-3 bg-zinc-700 hover:bg-zinc-600 transition duration-300 rounded-xl px-5 py-3'>
                                    <picture><img src='/img/cubby.png' alt='profile' className='h-[25px]' /></picture>
                                    <h3 className='text-white'>JacobCubby</h3>
                                </div>
                            </Menu.Button>


                            {/* -------------------- POPUP MENU -------------------- */}

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute top-[0px] left-[127px] w-[270px] rounded-xl bg-[#242826] p-4">
                                    <div className='flex items-center gap-3'>
                                        <picture><img src='/img/menupic.png' alt='profile' className='w-[45px]' /></picture>
                                        <div>
                                            <h3 className='text-white text-lg font-semibold'>JacobCubby</h3>
                                            <p className='text-[#00FF7F] text-sm'>Birdie Holder</p>
                                        </div>
                                    </div>
                                    <h3 className='text-lg text-white font-semibold my-3'>Account</h3>
                                    <Menu.Item className='hover:bg-[#454847] p-2 rounded-md cursor-pointer'>
                                        <div className='flex items-center gap-3'>
                                            <picture>
                                                <img src='/img/people.png' alt='setting' className='' />
                                            </picture>
                                            <p className='text-[#AFB6B2]'>Settings</p>
                                        </div>
                                    </Menu.Item>
                                    <Menu.Item className='hover:bg-[#454847] p-2 rounded-md cursor-pointer'>
                                        <div className='flex items-center gap-3'>
                                            <picture>
                                                <img src='/img/file.png' alt='setting' className='' />
                                            </picture>
                                            <p className='text-[#AFB6B2]'>Wallets</p>
                                        </div>
                                    </Menu.Item>
                                    <Menu.Item className='hover:bg-[#454847] p-2 rounded-md cursor-pointer'>
                                        <div className='flex items-center gap-3'>
                                            <picture>
                                                <img src='/img/qs.png' alt='setting' className='' />
                                            </picture>
                                            <p className='text-[#AFB6B2]'>Help</p>
                                        </div>
                                    </Menu.Item>

                                    <hr className='border-[#555E59] my-3' />

                                    <h3 className='text-lg text-white font-semibold my-3'>Manage</h3>

                                    <Menu.Item className='hover:bg-[#454847] p-2 rounded-md cursor-pointer'>
                                        <div className='flex items-center gap-3'>
                                            <picture>
                                                <img src='/img/cp1.png' alt='setting' className='' />
                                            </picture>
                                            <p className='text-[#AFB6B2]'>Collection 1</p>
                                        </div>
                                    </Menu.Item>
                                    <Menu.Item className='hover:bg-[#454847] p-2 rounded-md cursor-pointer'>
                                        <div className='flex items-center gap-3'>
                                            <picture>
                                                <img src='/img/cp2.png' alt='setting' className='' />
                                            </picture>
                                            <p className='text-[#AFB6B2]'>Collection 2</p>
                                        </div>
                                    </Menu.Item>

                                    <hr className='border-[#555E59] my-3' />

                                    <Menu.Item className='hover:bg-[#454847] p-2 rounded-md cursor-pointer'>
                                        <div className='flex items-center gap-3'>
                                            <picture>
                                                <img src='/img/lo.png' alt='setting' className='' />
                                            </picture>
                                            <p className='text-[#AFB6B2]'>Sign Out</p>
                                        </div>
                                    </Menu.Item>


                                </Menu.Items>
                            </Transition>
                        </div>
                    </div>
                </div>




            </Menu>



        </div>
    )
}
