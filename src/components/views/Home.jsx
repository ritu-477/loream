import React from 'react'
import HeroHome from '../home/HeroHome'
import Update from '../home/Update'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import { PracticeSwiper } from '../home/PracticeSwiper'
import EffectSlider from '../home/EffectSlider'


const Home = () => {
  return (
    <>
      <Header />
      <HeroHome />
      <PracticeSwiper />
      <EffectSlider/>
      <Update />
      <Footer />
    </>
  )
}

export default Home