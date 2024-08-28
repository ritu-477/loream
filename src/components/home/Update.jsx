import React from 'react'
import laptopImg from '../../assets/images/png/laptop-image.png'

function Update() {
    return (
        <div className='py_155'>
            <div className='container max_w1100'>
                <div className='row'>
                    <div className='col-lg-4 col-12 d-flex justify-content-center'>
                        <img src={laptopImg} alt=" laptopImg" className='w-100 img_w' />
                    </div>
                    <div className='col-lg-8 col-12 d-flex justify-content-center flex-column pt-4 pt-lg-0'>
                            <h2 className='update_heading'>Get Updated With Us</h2>
                            <p className='update_para'>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.</p>
                            <form action="">
                                <div className='row'>
                                    <div className='col-md-6 col-12'>
                                        <input required type="name" placeholder='Your Name' className='input_modify' />
                                    </div>
                                <div className='col-md-6 col-12 pt-4 pt-md-0'>
                                    <input required type="text" placeholder='Your Email Address' className='input_modify' />
                                    </div>
                                <div className='col-md-6 col-12 pt-4'>
                                    <input required type="password" placeholder='Enter Password' className='input_modify' />
                                    </div>
                                <div className='col-md-6 col-12 pt-4'>
                                    <input required type="password" placeholder='Confirm Password' className='input_modify' />
                                    </div>
                            </div>
                            <button type="submit" className='message_button'>Send Message</button>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Update