import React from 'react'
import './Footer.css'
import twitter_icon from '../../assets/twitter_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import youtube_icon from '../../assets/youtube_icon.png'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='footer-icons'>
            <img src={twitter_icon} alt='' />
            <img src={instagram_icon} alt='' />
            <img src={facebook_icon} alt='' />
            <img src={youtube_icon} alt='' />

        </div>

      
            <div className="footer-links">
        <ul>
            <li>Contact Us</li>
        </ul>
        <ul>
          <li>Cookie Preferences</li>
        </ul>
        <ul>
          <li>Account</li>
        </ul>
        <ul>
          <li>Terms of Use</li>
          
        </ul>
      </div>   
     
    </div>
  )
}

export default Footer
