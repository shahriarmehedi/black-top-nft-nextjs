import Head from 'next/head'

import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Presale from '../components/PresaleComponents/Presale'
export default function presale() {
    return (
        <div>
            <Head>
                <title>BlackTop</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Presale />
            <Footer />
        </div>
    )
}
