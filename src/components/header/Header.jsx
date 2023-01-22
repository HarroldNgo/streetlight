import { Link, useLocation } from "react-router-dom"
import "./header.css"
import axios from "../../api/axios"
import { useEffect, useState } from "react"
import Modal from "../PopUp"

export default function Header() {
    const [cats, setCats] = useState([]);
    const location = useLocation();
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/api/categories")
            setCats(res.data)
        }
        getCats()
    }, [])

    return (
        <div className="header">
            <div className="socials">
                <a href="https://twitter.com/Streetlightca" target="_blank" rel="noopener noreferrer"><img src={require("../img/twit.png")} alt="twitter" /></a>
                <a href="https://www.instagram.com/streetlightblog/" target="_blank" rel="noopener noreferrer"><img src={require("../img/insta.png")} alt="instagram" /></a>
            </div>
            <div className="title">
                <Link to="/"><img src={require("../img/titlelogo.png")} alt="titlelogo" /></Link>
                <Link to="/"><h1 className="titletext">TREETLIGHT</h1></Link>
                <div className="bars-wrapper">
                    <Link><img src={require("../img/fontbarc.png")} alt="nav-bars" className="bars" onClick={() => setOpenModal(true)} /></Link>
                    
                </div>
            </div>
            <Modal open={openModal} onClose={() => setOpenModal(false)}/>
            <div className="nav">
                {location.pathname === '/' ?
                    <div className="latest-wrap">
                        <p className="latest">LATEST</p>
                    </div> : <div className="latest-wrap" style={{ opacity: 0 }}>
                        <p className="latest">LATEST</p>
                    </div>
                }

                <ul>
                    <li><Link className="nav-option" to="/">HOME</Link></li>
                    <li className="cats"><Link className="nav-option" to="/categories">CATEGORIES</Link></li>
                    <li><Link className="nav-option" to="/about">ABOUT</Link></li>
                </ul>
            </div>
        </div>
    )
}
