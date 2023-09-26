import React from 'react'
import './blog.css'

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
    desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  },
  {
    id: 2,
    postImage: img2,
    title: 'lorem ipsum dolor',
    desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  },
  {
    id: 3,
    postImage: img3,
    title: 'lorem ipsum dolor',
    desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  },
  {
    id: 4,
    postImage: img4,
    title: 'lorem ipsum dolor',
    desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  },
]

const Blog = () => {
  return (
    <section className='blog container section'>
      <div className='secContainer'>
        <div className='secIntro'>
          <h2 className='secTitle'>Our Best Blog?</h2>
          <p>An insight to the incredible experience in the world!</p>
        </div>

        <div className='mainContainer grid'>
          {Posts.map(({ id, postImage, title, desc }) => {
            return (
              <div className='singlePost grid'>
                <div className='imgDiv'>
                  <img src={postImage} alt={title} />
                </div>

                <div className='postDetails'>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>

                <a href='' className='flex'>
                  Read More
                  <BsArrowRightShort className='icon' />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Blog
