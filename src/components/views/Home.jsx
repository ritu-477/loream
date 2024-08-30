import React from 'react'
import HeroHome from '../home/HeroHome'
import Update from '../home/Update'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import { PracticeSwiper } from '../home/PracticeSwiper'


const Home = () => {
  return (
    <>
      <Header />
      <HeroHome />
      <PracticeSwiper />
      <Update />
      <Footer />
    </>
  )
}

export default Home