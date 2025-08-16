import './project.css'

/////icons
import { FiBox } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { BsAlexa } from "react-icons/bs";

export default function project(){
    return(
        <>
            <div className="project">
                <button className='btn1'> <span><FiBox/></span> Projects </button>
                <div className="project-boxs">
                    <div className="project-box backimg1">
                        <div className='project-top'></div>
                        <div className='project-bottom'>
                            <h3> Movie Website <span> React.js </span> </h3>
                            <button className='project-btn1'> <span><BsAlexa/></span> <a href="https://movieapi-website.netlify.app/"> View Project </a> </button>
                            <button className='project-btn2'> <span><FaGithub/></span> Source </button>
                        </div>
                    </div>
                    <div className="project-box backimg2">
                        <div className='project-top'></div>
                        <div className='project-bottom'>
                            <h3> CORMO <span> Javascript </span> </h3>
                            <button className='project-btn1'> <span><BsAlexa/></span> <a href="https://ranjithaacha93.github.io/Charmant/"> View Project </a> </button>
                            <button className='project-btn2'> <span><FaGithub/></span> Source </button>
                        </div>
                    </div>
                    <div className="project-box backimg3">
                        <div className='project-top'></div>
                        <div className='project-bottom'>
                            <h3> Etech <span> React.js </span> </h3>
                            <button className='project-btn1'> <span><BsAlexa/></span> <a href="https://etech-website.netlify.app/about"> View Project </a> </button>
                            <button className='project-btn2'> <span><FaGithub/></span> Source </button>
                        </div>
                    </div>
                    <div className="project-box backimg4">
                        <div className='project-top'></div>
                        <div className='project-bottom'>
                            <h3> Course <span> HTML, CSS </span> </h3>
                            <button className='project-btn1'> <span><BsAlexa/></span> View Project </button>
                            <button className='project-btn2'> <span><FaGithub/></span> Source </button>
                        </div>
                    </div>
                    <div className="project-box backimg5">
                        <div className='project-top'></div>
                        <div className='project-bottom'>
                            <h3> Course <span> HTML, CSS </span> </h3>
                            <button className='project-btn1'> <span><BsAlexa/></span> View Project </button>
                            <button className='project-btn2'> <span><FaGithub/></span> Source </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}