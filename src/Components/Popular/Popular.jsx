import React, { useEffect } from 'react'
import './popular.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

import { BsArrowLeftShort } from 'react-icons/bs'
import { BsArrowRightShort } from 'react-icons/bs'
import { BsDot } from 'react-icons/bs'

// import images
import img2 from '../../Assets/image (2).jpg'
import img5 from '../../Assets/image (5).jpg'
import img7 from '../../Assets/image (5).png'
import img9 from '../../Assets/image (9).jpg'

// array method to display all the destination using (map)
const Data = [
  {
    id: 1,
    imgSrc: img2,
    destTitle: 'Fontana di Trevi',
    locCity: 'Rome',
    locCountry: 'Italy',
    grade: 'CULTURAL RELAX',
  },
  {
    id: 2,
    imgSrc: img5,
    destTitle: 'Metro Over Street',
    locCity: 'Chicago',
    locCountry: 'United States',
    grade: 'CULTURAL RELAX',
  },
  {
    id: 3,
    imgSrc: img7,
    destTitle: 'Serengeti National Park',
    locCity: 'Simiyu',
    locCountry: 'Tanzania',
    grade: 'CULTURAL RELAX',
  },
  {
    id: 4,
    imgSrc: img9,
    destTitle: 'Kaghan Valley',
    locCity: 'Mansehra',
    locCountry: 'Pakistan',
    grade: 'CULTURAL RELAX',
  },
]

const Popular = () => {
  // animation using Aos
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className='popular section container'>
      <div className='secContainer'>
        <div className='secHeader flex'>
          <div
            data-aos='fade-right'
            data-aos-duration='2500'
            className='textDiv'
          >
            <h2 className='secTitle'>Popular Destination</h2>
            <p>
              From historical cities to natural spectaculars, come see the best
              of the world!
            </p>
          </div>

          <div
            data-aos='fade-left'
            data-aos-duration='2500'
            className='iconsDiv flex'
          >
            <BsArrowLeftShort className='icon leftIcon' />
            <BsArrowRightShort className='icon' />
          </div>
        </div>

        <div className='mainContent grid'>
          {Data.map(({ id, imgSrc, destTitle, locCity, locCountry, grade }) => {
            return (
              <div data-aos='fade-up' className='singleDestination'>
                <div className='destImage'>
                  <img src={imgSrc} alt='Image title' />

                  <div className='overlayInfo'>
                    <h3>{destTitle}</h3>
                    <p>
                      {locCity}, {locCountry}
                    </p>

                    <BsArrowRightShort className='icon' />
                  </div>
                </div>

                <div className='destFooter'>
                  <div className='number'>0{id}</div>

                  <div className='destText flex'>
                    <h6>{locCountry}</h6>
                    <span className='flex'>
                      <span className='dot'>
                        <BsDot className='icon' />
                      </span>
                      Trip
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Popular
