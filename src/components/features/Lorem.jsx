import React from 'react'
import { CARDS_DATA } from '../../common/Helper'

const Lorem = () => {
  return (
    <div className='py_140'>
      <div className='container'>
        <h2 className='update_heading text-center mb-0 pb_40'>Lorem ipsum</h2>
        <div className='row'>
          {CARDS_DATA.map((items, index) => (
            <div className='col-lg-4 col-md-6 col-12 pb-4'>
              <div key={index} className='card_box w-100 d-flex flex-column'>
                <img width={60} src={items.icon} alt="icon" />
                <h3 className='map_heading'>{items.heading}</h3>
                <p className='mb-0 map_para'>{items.parapgraph} <span className='read_more'>{items.read}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Lorem