import fb from './Assets/facebook.png'
import git from './Assets/github.png'
import linked from './Assets/linkedin.png'

const SocialMedia = () => {
  return (
    <ul>
        <li>
            <img src={fb} alt="" />
        </li>
        <li>
           <img src={git} alt="" />
        </li>
        <li>
           <img src={linked} alt="" />
        </li>
    </ul>
  )
}

export default SocialMedia