import SocialMedia from "./SocialMedia"
import robot from './Assets/robot.png'
import chat from './Assets/cloud.png'

const Home = () => {
  return (
  <>
  <section id="home">
    <div className="container-home">
        <div className="descriptions">
            <div className="text-description">
                <h1>Hello! My name is</h1>
                <h1>James.</h1>
                <h2 style={{color:'blue', fontWeight:'bold'}}>I am a Web/Laravel Developer</h2>
            </div>
            <div className="social-media-icons">
                <SocialMedia/>
            </div>
        </div>
        <div className="robot">
                <img src={robot} alt="" />
        </div>
    </div>
    </section>
    </>
  )
}

export default Home
