import { Link, useLocation } from "react-router-dom"
import "./header.css"
import axios from "../../api/axios"
import { useEffect, useState } from "react"

export default function Header() {
    const [cats, setCats] = useState([]);
    const location = useLocation();

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
                <img src={require("../img/titlelogo.png")} alt="titlelogo" />
                <h1>TREETLIGHT</h1>

            </div>
            <div className="nav">
                {location.pathname==='/' ?
                    <div className="latest-wrap">
                        <p className="latest">LATEST</p>
                    </div> : <div className="latest-wrap" style={{opacity: 0}}>
                        <p className="latest">LATEST</p>
                    </div>
                    }

                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li className="cats">
                        <Link to="/categories">CATEGORIES</Link>
                        <ul>
                            {cats.map((c, i) => (
                                <li key={i}><Link to={`/categories/?cat=${c.name}`}>{c.name}</Link></li>
                            ))}
                        </ul>
                    </li>
                    <li><Link to="/about">ABOUT</Link></li>
                </ul>
            </div>
        </div>
    )
}
