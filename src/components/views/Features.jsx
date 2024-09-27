import React from 'react'
import Hero from '../features/Hero'
import Lorem from '../features/Lorem'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import MapSwiper from '../features/MapSwiper'
import Validation from '../features/Validation'

function features() {
  return (
    <div>
      <Header />
      <Hero />
      <Validation />
      <Lorem />
      <MapSwiper/>
      <Footer />
    </div>
  )
}

export default features