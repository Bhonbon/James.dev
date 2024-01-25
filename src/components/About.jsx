import img from './Assets/img.png'

const About = () => {
  return (
    <section id='about'>
        <div className="about-section">
            <div className='image'><img src={img} alt="image" /></div>
            <div className='about-me'>
                <h1 className='about-title'>ABOUT</h1>
                <span className='about-description'>
                  Hi ! I am James, a fresh graduate with a degree of BSIT, I just graduated last year. I am an aspiring developer specifically in web developing. I experienced web developing last year during our Capstone.
                </span>
            </div>
        </div>
    </section>
  )
}

export default About