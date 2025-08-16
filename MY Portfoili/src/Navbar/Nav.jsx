import './Nav.css';
import profile from '../assets/Images/nav.jpeg';

// Icons
import { TiHome } from "react-icons/ti";
import { LuUserRound } from "react-icons/lu";
import { FaSkyatlas } from "react-icons/fa6";
import { BsBox } from "react-icons/bs";
import { LiaSmsSolid } from "react-icons/lia";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiMenu } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";

// ✅ This must be here
import { Link } from "react-router-dom";
export default function Nav({ show, setshow }) {
    return (
        <>
            <div className="nav">
                <div className="profile">
                    <img src={profile} alt="Profile" />
                    <div></div>
                </div>

                <div className="sections">
                    <Link to="/"><TiHome /> Home</Link>
                    <Link to="/about"><LuUserRound /> About Us</Link>
                    <Link to="/skills"><FaSkyatlas /> Skills</Link>
                    <Link to="/projects"><BsBox /> Projects</Link>
                    <Link to="/contact"><LiaSmsSolid /> Contact Us</Link>
                </div>

                <div className="icons">
                    <span><FaLinkedinIn /></span>
                    <span><FaGithub /></span>
                    <span><FaInstagram /></span>
                    <span><FaXTwitter /></span>
                </div>
            </div>

            {show && (
                <div className="sidenavbar">
                    <div onClick={() => setshow(false)}>
                        <span className='close'><IoClose /></span>
                    </div>
                    <Link to="/" onClick={() => setshow(false)}><TiHome /> Home</Link>
                    <Link to="/about" onClick={() => setshow(false)}><LuUserRound /> About Us</Link>
                    <Link to="/skills" onClick={() => setshow(false)}><FaSkyatlas /> Skills</Link>
                    <Link to="/projects" onClick={() => setshow(false)}><BsBox /> Projects</Link>
                    <Link to="/contact" onClick={() => setshow(false)}><LiaSmsSolid /> Contact Us</Link>
                </div>
            )}

            <span className="menu" onClick={() => setshow(true)}><TfiMenu /></span>
        </>
    );
}
