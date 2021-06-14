import React from 'react';
import "../../style/MainPage.css"
import {FiMail, FiPhone, FiInstagram,FiFacebook, FiTwitter} from "react-icons/fi";

const Footer = () =>  {

    return (
        <footer className='footerr'>
          <div className='footer-div'>
        <div className='about-us'>
            <h1>O nas</h1>
            <p>W tym momencie jest drugą największą siecią kinową na świecie obejmującą 9 518 sal w 790 kinach. Cineworld działa w 10 krajach - w Stanach Zjednoczonych, Wielkiej Brytanii, Polsce, Irlandii, Izraelu, Czechach, Bułgarii, Rumunii, na Węgrzech i na Słowacji. Rocznie organizuje 14,5 miliona projekcji filmowych, które wyświetlane są ponad 300 milionom widzów.</p>
        </div >
        <div className='contact'>
            <h1>Kontakt</h1>
            <p className='phone' ><FiPhone />  123456789</p>
            <p className='phone' ><FiMail />  cineaapp@gmail.com</p>
            <div className='social'>
            <a href="https://twitter.com/?lang=pl"><FiTwitter /> </a> 
            <a href="https://www.instagram.com/grzegorzpryjma/"><FiInstagram /> </a> 
            <a href="https://www.facebook.com/grzegorz.pryjma/"><FiFacebook /> </a> 
            </div>
        </div>
        </div>
        <h3>&#xA9; Grzegorz Pryjma</h3>
        </footer>
  );
};

export default Footer;