import React from 'react'
import './Footer.css'
import twitter_icon from '../../assets/assets/twitter_icon.png'
import facebook_icon from '../../assets/assets/facebook_icon.png'
import instagram_icon from '../../assets/assets/instagram_icon.png'
import youtube_icon from '../../assets/assets/youtube_icon.png'

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
          <li>FAQ</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Speed Test</li>
        </ul>
        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices </li>
        </ul>
        <ul>
          <li>Account</li>
          <li>Ways to Watch</li>
          <li>Corporate Information</li>
          <li>Only on Netflix</li>
        </ul>
        <ul>
          <li>Media Center</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
      </div>

        
      
    </div>
  )
}

export default Footer
