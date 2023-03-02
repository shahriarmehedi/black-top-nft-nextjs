import Head from 'next/head'

import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'

export default function nftdetail() {
    return (
        <div>
            <Head>
                <title>BlackTop</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <h1 className='min-h-screen'>NFT Detail</h1>
            <Footer />
        </div>
    )
}
