import Head from 'next/head'

import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Banner from '../components/nftDetailComponents/Banner'
import FullDetails from '../components/nftDetailComponents/FullDetails'

export default function nftdetail() {
    return (
        <div className='mt-[68px] lg:mt-0'>
            <Head>
                <title>BlackTop</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Banner />
            <FullDetails />
            <Footer />
        </div>
    )
}
