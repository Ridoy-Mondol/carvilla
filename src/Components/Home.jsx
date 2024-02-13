import React from 'react'
import img from '../Components/images/welcome-hero/welcome-banner.jpg';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className='home-div' id='home'>
      <Navbar />
      <img src = {img} alt = "banner" className='home-bg' />
      <div className='home-text'>
        <h1 className='home-head'>
          GET YOUR DESIRED CAR IN RESONABLE PRICE
        </h1>
        <span className='home-para'>
        Find your perfect car at an unbeatable price with our vast selection. 
        From compact city cars to spacious SUVs, discover the right fit for your needs and budget
        </span>
        <button type='button' className='home-btn'>Contact Us</button>
      </div>
    </div>
  )
}

export default Home
