import React from 'react'
import './welcome.css'
import { Link } from "react-router-dom"

export default function Welcome() {
    return (
        <div className="welcome-outer">
            <div className='welcome-container'>
                <img className='welcome-img' src={require("../../components/img/juststreetlightcrop.png")} alt="lamp" />
                <h4 className='welcome-text'>Hi! This is our portfolio blog exhibiting original and personalized content. <Link className='link' to={"/home"}>CHECK IT OUT</Link>!</h4>
                <br />
                <br />
                <h4 className='welcome-text'>If you like our stuff, follow us on <a className='link' href="https://www.instagram.com/streetlightblog/">SOCIAL MEDIA.</a><br/>For any inquiries or questions regarding any posts feel free to  <Link className='link' to={"/"}>CONTACT US</Link>.</h4>
                <br />
                <br />
                <h4 className='welcome-text'>I know this wasn't much but here's so you can get to know more <Link className='link' to={"/about"}>ABOUT US</Link> :{`)`}</h4>
            </div>
        </div>
    )
}
