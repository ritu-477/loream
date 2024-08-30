import React from 'react';
import { useLocation } from 'react-router-dom';
import { FacebookIcon } from '../common/Icon';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    let path = window.location.pathname;
    let logo = window.location.pathname;
    return (
        <div className={`${path ==="/features" ? "bg_darkgray":"bg_black"}`}>
            <div className='container'>
                <div className='row py_78'>
                    <div className='col-sm-6 col-12'>
                        <a className='logo' href="">
                            <span className={`${logo === "/features" ? "text_blue" :"color_orange"}`}>Logo</span> Here
                        </a>
                        <p className='para_1 mb-0 pt-3'>
                            Lorem ipsum dolor sit amet consectetur. Metus mattis cum sem integer est. Amet fringilla tristique hendrerit vestibulum diam est penatibus interdum imperdiet. Duis ut libero suspendisse arcu erat. Pulvinar in est.
                        </p>
                    </div>
                    <div className='col-lg-3 col-sm-6 col-12 pt-4 pt-sm-0'>
                        <ul className='ps-0 mb-0'>
                            <li className='about'>About website</li>
                            <li className='pb-3'><a className='footer_text' href="">Home</a></li>
                            <li className='pb-3'><a className='footer_text' href="">How It Works</a></li>
                            <li className='pb-3'><a className='footer_text' href="">Testimonials</a></li>
                            <li><a className='footer_text' href="">Why Choose Us</a></li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-sm-6 col-12 pt-4 pt-sm-0'>
                        <ul className='ps-0 mb-0'>
                            <li className='about'>Follow links</li>
                            <li className='pb-3'><a className='footer_text' href="">Instagram</a></li>
                            <li className='pb-3'><a className='footer_text' href="">Twitter</a></li>
                            <li className='pb-3'><a className='footer_text' href="">Discord</a></li>
                            <li><a className='footer_text' href="">You Tube</a></li>
                        </ul>
                        <FacebookIcon />
                    </div>
                </div>
            </div>
            <div className='bottom_line'>
                <p className='footer_text text-center'>Copyright©{currentYear} (Logo) All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
