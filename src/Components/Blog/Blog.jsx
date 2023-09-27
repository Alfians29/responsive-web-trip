import React, { useEffect } from 'react'
import './blog.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

import { BsArrowRightShort } from 'react-icons/bs'

// import images
import img from '../../Assets/image (2).png'
import img2 from '../../Assets/image (3).png'
import img3 from '../../Assets/image (9).jpg'
import img4 from '../../Assets/image (10).png'

// array method to display all the destination using (map)
const Posts = [
  {
    id: 1,
    postImage: img,
    title: 'lorem ipsum dolor',
    desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerit non proident.',
  },
  {
    id: 2,
    postImage: img2,
    title: 'lorem ipsum dolor',
    desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerit non proident.',
  },
  {
    id: 3,
    postImage: img3,
    title: 'lorem ipsum dolor',
    desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerit non proident.',
  },
  {
    id: 4,
    postImage: img4,
    title: 'lorem ipsum dolor',
    desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerit non proident.',
  },
]

const Blog = () => {
  // animation using Aos
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className='blog container section'>
      <div className='secContainer'>
        <div className='secIntro'>
          <h2 data-aos='fade-up' data-aos-duration='2000' className='secTitle'>
            Our Best Blog?
          </h2>
          <p data-aos='fade-up' data-aos-duration='2500'>
            An insight to the incredible experience in the world!
          </p>
        </div>

        <div className='mainContainer grid'>
          {Posts.map(({ id, postImage, title, desc }) => {
            return (
              <div
                data-aos='fade-up'
                data-aos-duration='2000'
                className='singlePost grid'
              >
                <div className='imgDiv'>
                  <img src={postImage} alt={title} />
                </div>

                <div className='postDetails'>
                  <h3 data-aos='fade-up' data-aos-duration='3000'>
                    {title}
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='4000'>
                    {desc}
                  </p>

                  <a
                    href=''
                    className='flex'
                    data-aos='fade-up'
                    data-aos-duration='4500'
                  >
                    Read More
                    <BsArrowRightShort className='icon' />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Blog
