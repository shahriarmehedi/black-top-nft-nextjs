import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/shared/Header'
import Hero from '../components/LandingPageComponents/Hero'
import ActivePreSale from '../components/LandingPageComponents/ActivePreSale'
import UpcomingPreSale from '../components/LandingPageComponents/UpcomingPreSale'
import Footer from '../components/shared/Footer'

const Home: NextPage = () => {
  return (
    <div className='mt-[68px] lg:mt-0'>
      <Head>
        <title>BlackTop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <ActivePreSale />
      <UpcomingPreSale />
      <Footer />

    </div>
  )
}

export default Home
