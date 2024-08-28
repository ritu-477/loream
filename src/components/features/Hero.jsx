import React from 'react'
import PrimaryHeading from '../../common/PrimaryHeading'
import PrimaryPara from '../../common/PrimaryPara'

const Hero = () => {
  return (
      <div className='bg_blue min-vh-100'>
          <div className='container'>
              <div className='py_180'>
                  <PrimaryHeading className="text-center mx-auto" text="Lorem ipsum dolor sit amet consectetur. Sceleris" />
                  <PrimaryPara className="text-center mx-auto" text="Lorem ipsum dolor sit amet consectetur. Id mattis at tristique duis." />
              </div>
          </div>
    </div>
  )
}

export default Hero