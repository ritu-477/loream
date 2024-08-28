import React from 'react'
import HeroHome from '../home/HeroHome'
import Update from '../home/Update'
import Header from '../../common/Header'
import Footer from '../../common/Footer'

const Home = () => {
  return (
    <>
      <Header/>
      <HeroHome />
      <Update />
      <Footer/>
    </>
  )
}

export default Home