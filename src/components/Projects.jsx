import terms from './Assets/terms1.png'
import blogs from './Assets/blogs.png'
import './Projects.css'
import { useNavigate } from 'react-router-dom'

const Projects = () => {
    const navigate = useNavigate();
    const nav = () => {
        navigate('/blogs')
    }
    const nav2 = () => {
        navigate('/terms')
    }
    return (
        <>
        <div id="projects">
            <div className="title">
                <h1>Projects</h1>
            </div>
            <div className='project-section'>
                <div className='col'>
                    <img src={terms} alt="" onClick={nav2}/>
                    <span className='skills'>
                        TERMS-Traffic Enforcement Reporting and Management System
                    </span>
                </div>
                <br />
                <div className='col' id='col'>
                    <img src={blogs} alt="" onClick={nav}/>
                    <span>Blogs Website - <br />Post your Stories ! </span>
                </div>
            </div>
        </div>


        </>
    )
}

export default Projects