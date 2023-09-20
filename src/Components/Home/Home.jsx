import React from 'react'
import './home.css'

const Home = () => {
  return (
    <section className='home'>
      <div className='secContainer container'>
        <div className='homeText'>
          <h1 className='title'>Plan Your Trip With Us</h1>
          <p className='subTitle'>
            Travel to your favorite city with respectful of the environment!
          </p>
          <button className='btn'>
            <a href='#'>Explore Now</a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home
