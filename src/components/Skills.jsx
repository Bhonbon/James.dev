import './Skills.css'
import html from './Assets/html.png'
import css from './Assets/css.png'
import laravel from './Assets/laravel.png'
import bootstrap from './Assets/bootstrap.png'
import JS from './Assets/JS.png'
import tailwind from './Assets/tailwind.png'

import { useState } from 'react'

const Skills = () => {

  const [show, setShow] = useState(true)
  const [showText, setShowText] = useState(false)
  const [showText2, setShowText2] = useState(false)
  const [showText3, setShowText3] = useState(false)
  const [showText4, setShowText4] = useState(false)
  const [showText5, setShowText5] = useState(false)
  const [showText6, setShowText6] = useState(false)

  const hoverLeave = () => {
    setShow(true)
    setShowText(false)
    setShowText2(false)
    setShowText3(false)
    setShowText4(false)
    setShowText5(false)
    setShowText6(false)
  }
  const hoverHTML = () => {
    setShowText(true)
    setShow(false)
  }
  const hoverCSS = () => {
    setShowText2(true)
    setShow(false)
  }
  const hoverBootstrap = () => {
    setShowText3(true)
    setShow(false)
  }
  const hoverLaravel = () => {
    setShowText4(true)
    setShow(false)
  }
  const hoverTailwind = () => {
    setShowText5(true)
    setShow(false)
  }
  const hoverJS = () => {
    setShowText6(true)
    setShow(false)
  }
  return (
    <section id="skills">
        <h1 className="title">
          My Skills
        </h1>
      <div className='skills-section'>
        <div className='skills-option'>
              <img src={html} 
                  alt="" 
                  onMouseEnter={hoverHTML} 
                  onMouseLeave={hoverLeave}
              />
              <img src={css} 
                  alt="" 
                  onMouseEnter={hoverCSS} 
                  onMouseLeave={hoverLeave} 
              />
              <img src={JS} 
                  alt="" 
                  onMouseEnter={hoverJS} 
                  onMouseLeave={hoverLeave} 
              />
              <img src={bootstrap} 
                  alt="" 
                  onMouseEnter={hoverBootstrap}
                  onMouseLeave={hoverLeave}
               />
               <img src={tailwind} 
                  alt="" 
                  onMouseEnter={hoverTailwind}
                  onMouseLeave={hoverLeave}
               />
              <img src={laravel} 
                  alt=""
                  onMouseEnter={hoverLaravel}
                  onMouseLeave={hoverLeave}
              />
        </div>

        {show && 
        <div id='skills-display' className='title-1'>
          <p><strong>Hi everyone!</strong> These are my skills used to build systems in web development, and I am</p>
          <p>also learning libraries and frameworks for future systems.</p>
        </div>}

        {showText && 
        <div className='html-1' id='skills-display'>
        <p><strong>HTML stands for HyperText Markup Language</strong>, one of important technologies in web </p>
        <p>development. This technology is the 1st skill to learn when it comes to web developing.</p>
        <img src={html} alt="" />
      
        </div>}

        {showText2 && 
        <div className='css-1' id='skills-display'>
          <p><strong>CSS known as Cascading Style Sheet</strong>, the 2nd skill you have to learn in your journey</p>
          <p>as a Web developer. This makes your website beautiful.</p>
          <img src={css} alt="" />
          </div>}

        {showText3 && 
        <div className='bootstrap-1' id='skills-display'>
          <p>Oh! <strong>Bootstrap!</strong> This is one of the frameworks of CSS. It also style your HTML, it is being</p>
          <p>developed to the Web developers to have easier life. Maybe?</p>
          <img src={bootstrap} alt="" />
        </div>
        }

        {showText4 && 
        <div className='laravel-1' id='skills-display'>
            <p>"<strong>Laravel </strong>is a php (a Language) web application framework with expressive, elegant syntax.</p>
            <p>We’ve already laid the foundation — freeing you to create without sweating the small</p>
            <p>things." <strong>from https://laravel.com/ ")</strong></p>
            <img src={laravel} alt="" />
        </div>
        }

        {showText5 && 
        <div className='tailwind-1' id='skills-display'>
            <p>Oh! <strong>Tailwind!</strong> This is also one of the frameworks of CSS. It also style your HTML, it is one</p>
            <p>of the css frameworks that are popular to the developers.</p>
            <img src={tailwind} alt="" />
          </div>
          }
        {showText6 && 
        <div className='js-1' id='skills-display'>
            <p><strong>JavaScript</strong> is it a language or not? btw, this language makes your websites dynamically</p>
            <p>and it is very important in building web systems.</p>
            <img src={JS} alt="" />
          </div>
          }
      </div>
    </section>
  )
}

export default Skills