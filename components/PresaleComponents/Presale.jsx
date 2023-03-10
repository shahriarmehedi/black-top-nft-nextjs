import React, { useState } from 'react'

export default function Presale() {


    const [stepOne, setStepOne] = React.useState(true)
    const [stepTwo, setStepTwo] = React.useState(false)
    const [stepThree, setStepThree] = React.useState(false)

    const handleStepOne = (id) => {
        console.log(id)
        setStepOne(false)
        setStepTwo(true)
        setStepThree(false)
    }

    const handleStepTwo = () => {
        setStepOne(false)
        setStepTwo(true)
        setStepThree(false)
    }

    const handleStepThree = () => {
        setStepOne(false)
        setStepTwo(false)
        setStepThree(true)
    }


    const [image, setImage] = useState(null);



    const allBlockchain = [
        {
            id: 1,
            name: 'Solana',
            logo: '/img/solanalogo.png'
        },
        {
            id: 2,
            name: 'Ethereum',
            logo: '/img/ethereumlogo.png'
        },
        {
            id: 3,
            name: 'Polygon',
            logo: '/img/polygonlogo.png'
        },
        {
            id: 4,
            name: 'Bitcoin',
            logo: '/img/bitcoinlogo.png'
        },
    ]

    const imageURL = image ? URL.createObjectURL(image) : null;




    return (
        <div className='bg-[#0C0D0C] border-t-[1px] border-[#242826]'>
            <div className='container mx-auto px-5 lg:px-0 flex flex-col lg:flex-row pb-20 '>
                <div className=' w-full lg:w-[60%]'>
                    <div className='lg:w-1/2 mx-auto'>
                        <h1 className='text-4xl font-bold  text-white pt-10'>Create Pre-Sale Page</h1>

                        {/* -------------STEP ONE [BLOCKCHAIN SELECTION]------------- */}
                        {
                            stepOne && (
                                <>
                                    <p className=' text-gray-500 text-xl pt-3'>
                                        Select your blockchain
                                    </p>
                                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-14'>
                                        {
                                            allBlockchain.map((item, index) => (
                                                <div key={index} onClick={() => handleStepOne(item.id)} className='border-[1px] hover:border-[3px] transition duration-200 border-[#242826] hover:border-gray-300 rounded-2xl p-7'>
                                                    <picture className='flex justify-center'>
                                                        <img src={item.logo} alt='solana' />
                                                    </picture>
                                                    <h1 className='text-2xl font-semibold text-center text-white pt-3'>
                                                        {item.name}
                                                    </h1>
                                                </div>
                                            ))
                                        }

                                    </div>
                                </>
                            )
                        }


                        {/* -------------STEP TWO [FORM]------------- */}
                        {
                            stepTwo && (
                                <>
                                    <p className=' text-gray-500 text-xl pt-3'>
                                        Enter your details
                                    </p>
                                    <div className='mt-14'>
                                        {/* drag and drop file upload inside dotted box */}
                                        <label className='text-white text-sm font-semibold'>Upload File</label>
                                        <div
                                            style={{ backgroundImage: `url(${imageURL})` }}
                                            className={`flex bg-cover flex-col items-center justify-center border-dashed border-2 border-[#242826] rounded-2xl h-[300px] mt-2 mb-2`}>
                                            <button className='bg-[#242826] text-white rounded-2xl px-5 py-3 mt-3'>Drag and Drop or Upload File</button>
                                            {/* input file */}
                                            <input type="file" onChange={(event) => setImage(event.target.files[0])} className=' opacity-0 cursor-pointer relative bottom-10 left-5' />
                                        </div>
                                        <p className='text-gray-400 text-sm mb-5'>
                                            PNG, GIF, WEBP, MP4 are supported up to 100mb.
                                        </p>

                                        <div className='flex flex-col gap-3'>
                                            <label className='text-white text-sm font-semibold'>Collection Name</label>
                                            <input type="text" placeholder='Collection Name' className='bg-[#242826] text-white rounded-lg px-5 py-3' />
                                        </div>
                                        <div className='flex flex-col gap-3 mt-5'>
                                            <label className='text-white text-sm font-semibold'>Description</label>
                                            <textarea type="text" placeholder='e.g. ???BlackTop is a premier NFT presale platform???' className='bg-[#242826] text-white rounded-lg px-5 py-3' />
                                        </div>
                                        <div className='flex flex-col gap-3 mt-5'>
                                            <label className='text-white text-sm font-semibold'>Price</label>
                                            <input type="number" placeholder='Solana Per Sale' className='bg-[#242826] text-white rounded-lg px-5 py-3' />
                                        </div>
                                        <div className='flex flex-col gap-3 mt-5'>
                                            <label className='text-white text-sm font-semibold'>Supply</label>
                                            <input type="number" placeholder='Amount' className='bg-[#242826] text-white rounded-lg px-5 py-3' />
                                        </div>
                                        <div className='flex flex-col gap-3 mt-5'>
                                            <label className='text-white text-sm font-semibold'>Limit per wallet</label>
                                            <input type="number" placeholder='Amount' className='bg-[#242826] text-white rounded-lg px-5 py-3' />
                                        </div>
                                        <div className='flex flex-col gap-3 mt-5'>
                                            <label className='text-white text-sm font-semibold'>Sale visibility</label>
                                            <select className='bg-[#242826] text-white rounded-lg px-5 py-3'>
                                                <option value="public">Public</option>
                                                <option value="private">Private</option>
                                            </select>
                                        </div>
                                        <div className='flex flex-col gap-3 mt-5'>
                                            <label className='text-white text-sm font-semibold'>Twitter link</label>
                                            <input type="text" placeholder='https://twitter.com/username' className='bg-[#242826] text-white rounded-lg px-5 py-3' />
                                        </div>
                                        <div className='flex flex-col gap-3 mt-5'>
                                            <label className='text-white text-sm font-semibold'>Discord link</label>
                                            <input type="text" placeholder='https://discord.gg/invite' className='bg-[#242826] text-white rounded-lg px-5 py-3' />
                                        </div>
                                    </div>
                                </>
                            )



                        }

                        {/* -------------STEP THREE [TEAM MEMBER]------------- */}

                        {
                            stepThree && (
                                <>
                                    <p className=' text-gray-500 text-xl pt-3'>
                                        Setup your details
                                    </p>
                                    <div className='mt-14 border-[1px] border-[#242826] rounded-xl p-7'>
                                        <div className='flex items-center justify-between'>
                                            <p className=' text-white font-semibold pb-3 text-2xl pt-3'>
                                                Team member 1
                                            </p>
                                            <picture className='cursor-pointer'>
                                                <img src="/img/delete.png" alt="" />
                                            </picture>
                                        </div>
                                        {/* drag and drop file upload inside dotted box */}
                                        <label className='text-white text-sm font-semibold'>Profile picture</label>
                                        <div
                                            style={{ backgroundImage: `url(${imageURL})` }}
                                            className={`flex bg-cover flex-col items-center justify-center border-dashed border-2 border-[#242826] rounded-2xl h-[300px] mt-2 mb-2`}>
                                            <button className='bg-[#242826] text-white rounded-2xl px-5 py-3 mt-3'>Drag and Drop or Upload File</button>
                                            {/* input file */}
                                            <input type="file" onChange={(event) => setImage(event.target.files[0])} className=' opacity-0 cursor-pointer relative bottom-10 left-5' />
                                        </div>
                                        <p className='text-gray-400 text-sm mb-5'>
                                            PNG, GIF, WEBP, MP4 are supported up to 100mb.
                                        </p>

                                        <div className='flex flex-col gap-3'>
                                            <label className='text-white text-sm font-semibold'>Name</label>
                                            <input type="text" placeholder='Collection Name' className='bg-[#242826] text-white rounded-lg px-5 py-3' />
                                        </div>
                                        <div className='flex flex-col gap-3 mt-5'>
                                            <label className='text-white text-sm font-semibold'>Role</label>
                                            <input type="text" placeholder='Solana Per Sale' className='bg-[#242826] text-white rounded-lg px-5 py-3' />
                                        </div>
                                        <div className='flex flex-col gap-3 mt-5'>
                                            <label className='text-white text-sm font-semibold'>About</label>
                                            <textarea type="text" placeholder='e.g. ???With over 10 years of experience...??????' className='bg-[#242826] text-white rounded-lg px-5 py-3' />
                                        </div>
                                        <div className='flex flex-col gap-3 mt-5'>
                                            <label className='text-white text-sm font-semibold'>Twitter link</label>
                                            <input type="text" placeholder='https://twitter.com/username' className='bg-[#242826] text-white rounded-lg px-5 py-3' />
                                        </div>
                                        <div className='flex flex-col gap-3 mt-5'>
                                            <label className='text-white text-sm font-semibold'>LinkedIn</label>
                                            <input type="text" placeholder='https://discord.gg/invite' className='bg-[#242826] text-white rounded-lg px-5 py-3' />
                                        </div>
                                    </div>

                                    <div className='mt-7'>
                                        <div className='border-[#242826] hover:border-white transition duration-200 border-[1px] w-full text-white rounded-lg px-5 py-5 mt-5 flex items-center gap-5 cursor-pointer'>
                                            <picture>
                                                <img src="/img/plus.png" alt="" />
                                            </picture>
                                            <p>
                                                Add another team member
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )
                        }



                    </div>
                </div>


                {/* -----------------PREVIEW PART---------------- */}

                <div className=' w-full lg:w-[40%] lg:border-l-[1px] border-[#242826] lg:pl-10'>
                    <div className='lg:w-3/5 lg:pl-7'>
                        <h3 className='text-gray-200 text-lg font-semibold pt-14 pb-5'>
                            Preview
                        </h3>
                        <div className='bg-[#242826] rounded-2xl pb-5'>
                            <picture>
                                {
                                    image ? (
                                        <img className='h-[330px] w-full object-cover rounded-t-2xl' src={URL.createObjectURL(image)} alt='hero' />) :
                                        (<img className='h-[330px] w-full object-cover rounded-t-2xl' src="/img/noimage.png" alt='hero' />)
                                }
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
                                    <h3 className='text-white font-semibold text-xs'> Sold supply / <span className='text-gray-400 font-normal'>Total suplly</span> </h3>
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
                            {
                                stepOne ? (
                                    <div className='bg-[#242826] py-4 w-full px-5 flex justify-between rounded-full'>
                                        <h3 className='text-white font-semibold'>
                                            1 <span className='pl-3'>Blockchain</span>
                                        </h3>
                                        <h3 className='text-white'>
                                            In progress
                                        </h3>
                                    </div>
                                ) : (
                                    <div className='border-[#242826] border-[1px] py-4 w-full px-5 flex justify-between rounded-full'>
                                        <h3 className='text-white font-semibold'>
                                            1 <span className='pl-3'>Blockchain</span>
                                        </h3>
                                        <h3 className='text-gray-500'>
                                            Completed
                                        </h3>
                                    </div>
                                )
                            }
                            {
                                stepTwo && (
                                    <div className='bg-[#242826] py-4 w-full px-5 flex justify-between rounded-full'>
                                        <h3 className='text-white font-semibold'>
                                            1 <span className='pl-3'>Details</span>
                                        </h3>
                                        <h3 className='text-white'>
                                            In progress
                                        </h3>
                                    </div>
                                ) || stepOne && (
                                    <div className='border-[#242826] border-[1px] py-4 w-full px-5 flex justify-between rounded-full'>
                                        <h3 className='text-white font-semibold'>
                                            1 <span className='pl-3'>Details</span>
                                        </h3>
                                        <h3 className='text-white'>
                                            {/* In progress */}
                                        </h3>
                                    </div>
                                ) || stepThree && (
                                    <div className='border-[#242826] border-[1px] py-4 w-full px-5 flex justify-between rounded-full'>
                                        <h3 className='text-white font-semibold'>
                                            1 <span className='pl-3'>Details</span>
                                        </h3>
                                        <h3 className='text-gray-500'>
                                            Completed
                                        </h3>
                                    </div>
                                )
                            }

                            {
                                stepThree ? (
                                    <div className='bg-[#242826] py-4 w-full px-5 flex justify-between rounded-full'>
                                        <h3 className='text-white font-semibold'>
                                            1 <span className='pl-3'>Team Info</span>
                                        </h3>
                                        <h3 className='text-white'>
                                            In progress
                                        </h3>
                                    </div>
                                ) : (
                                    <div className='border-[#242826] border-[1px] py-4 w-full px-5 flex justify-between rounded-full'>
                                        <h3 className='text-white font-semibold'>
                                            1 <span className='pl-3'>Team Info</span>
                                        </h3>
                                        <h3 className='text-white'>
                                            {/* In progress */}
                                        </h3>
                                    </div>
                                )
                            }
                        </div>

                        <div className='mt-5'>
                            {
                                stepOne && (
                                    <button className='bg-[#00FF7D] font-semibold w-full py-5 text-black rounded-2xl'>
                                        Continue
                                    </button>
                                )
                            }
                            {
                                stepTwo && (
                                    <button onClick={handleStepThree} className='bg-[#00FF7D] font-semibold w-full py-5 text-black rounded-2xl'>
                                        Continue
                                    </button>
                                )
                            }
                            {
                                stepThree && (
                                    <button onClick={handleStepThree} className='bg-[#00FF7D] font-semibold w-full py-5 text-black rounded-2xl'>
                                        Launch
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
