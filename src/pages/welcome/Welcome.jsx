import React from 'react'
import './welcome.css'

export default function Welcome() {
    return (
        <div className="welcome-outer">
            <div className='welcome-container'>
                <h1 className='welcome-title'>Streetlight</h1>
                <img className='welcome-img' src={require("../../components/img/titlelogo.png")} alt="titlelogo" />
                <h4 className='welcome-home'>Home</h4>
                <h4 className='welcome-about'>About</h4>
            </div>
        </div>
    )
}
