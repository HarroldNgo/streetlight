import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Modal = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <div className="overlay">
            <div className="pop-up-container">
                <div className="menu">
                    <a href="/">HOME</a>
                    <a href="/categories" style={{ display: "none"}}>CATEGORIES</a>
                    <a href="/about">ABOUT</a>
                </div>
                <p className="closeBtn" onClick={onClose}>X</p>
            </div>
        </div>
    )
}
export default Modal;