import Head from 'next/head'

import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Collection from '../components/CollectionComponents/Collection'
export default function collection() {
    return (
        <div>
            <Head>
                <title>BlackTop</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Collection />
            <Footer />
        </div>
    )
}
