import React from 'react'
import './offer.css'

import { MdKingBed } from 'react-icons/md'
import { MdBathtub } from 'react-icons/md'
import { MdWifi } from 'react-icons/md'
import { MdAirportShuttle } from 'react-icons/md'
import { MdLocationPin } from 'react-icons/md'
import { BsArrowRightShort } from 'react-icons/bs'

// import images
import img6 from '../../Assets/image (6).jpg'
import img7 from '../../Assets/image (7).jpg'
import img8 from '../../Assets/image (8).jpg'

// array method to display all the offers using (map)
const Offers = [
  {
    id: 1,
    imgSrc: img8,
    destTitle: 'Dolomites',
    location: 'Italy',
    price: '$4,091',
    discount: '10%',
  },
  {
    id: 2,
    imgSrc: img6,
    destTitle: 'Hallstatt',
    location: 'Austria',
    price: '$2,821',
    discount: '30%',
  },
  {
    id: 4,
    imgSrc: img7,
    destTitle: 'Hannegan Pass',
    location: 'USA',
    price: '$3,495',
    discount: '20%',
  },
]

const Offer = () => {
  return (
    <section className='offer container section'>
      <div className='secContainer'>
        <div className='secIntro'>
          <h2 className='secTitle'>Special Offers</h2>
          <p>
            From historical cities to natural spectaculars, come see the best of
            the world!
          </p>
        </div>

        <div className='mainContent grid'>
          {Offers.map(
            ({ id, imgSrc, destTitle, location, price, discount }) => {
              return (
                <div className='singleOffer'>
                  <div className='destImage'>
                    <img src={imgSrc} alt={destTitle} />

                    <span className='discount'>{discount} Off</span>
                  </div>

                  <div className='offerBody'>
                    <div className='price flex'>
                      <h4>{price}</h4>
                      <span className='status'>For Rent</span>
                    </div>

                    <div className='amenities flex'>
                      <div className='singleAmenity flex'>
                        <MdKingBed className='icon' />
                        <small>2 Beds</small>
                      </div>
                      <div className='singleAmenity flex'>
                        <MdBathtub className='icon' />
                        <small>1 Bath</small>
                      </div>
                      <div className='singleAmenity flex'>
                        <MdWifi className='icon' />
                        <small>WiFi</small>
                      </div>
                      <div className='singleAmenity flex'>
                        <MdAirportShuttle className='icon' />
                        <small>Shuttle</small>
                      </div>
                    </div>

                    <div className='location flex'>
                      <MdLocationPin className='icon' />
                      <small>
                        {destTitle}, {location}
                      </small>
                    </div>

                    <button className='btn flex'>
                      View Details
                      <BsArrowRightShort className='icon' />
                    </button>
                  </div>
                </div>
              )
            }
          )}
        </div>
      </div>
    </section>
  )
}

export default Offer
