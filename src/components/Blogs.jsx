import blog1 from './Assets/blog/1.png'
import blog2 from './Assets/blog/2.png'
import blog3 from './Assets/blog/3.png'
import blog4 from './Assets/blog/4.png'
import blog5 from './Assets/blog/5.png'
import blog6 from './Assets/blog/blogs.png'

import './Blogs.css'
const Blogs = () => {
  return (
    <section className='blogs-section' id='blogs'>
        <div className="images">
          <li>SIMPLE BLOG SITES WHERE YOU CAN POST YOUR STORIES</li>
          <img src={blog6} alt="" />
          <li>LOGIN FORM</li>
          <img src={blog3} alt="" />
          <li>REGISTRATION FORM</li>
          <img src={blog4} alt="" />
          <li>MAIN FORM</li>
          <img src={blog1} alt="" />
          <img src={blog5} alt="" />
          <li>PROFILE INFO FORM</li>
          <img src={blog2} alt="" />          
        </div>
    </section>
  )
}

export default Blogs