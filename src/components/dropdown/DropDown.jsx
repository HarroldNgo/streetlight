import './dropdown.css'
import { useState, useEffect } from 'react'
import axios from "../../api/axios"

export default function DropDown({ selected, setSelected }) {
    const [isActive, setIsActive] = useState(false)
    const [cats, setCats] = useState([]);
    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/api/categories")
            setCats(res.data)
        }
        getCats()
    }, [])
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                {selected ? selected : "Pick One"}
                <i className="fa-solid fa-caret-down"></i>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {cats.map((c,i) => (
                        <div key={i} className="dropdown-item" onClick={(e)=>{
                            setSelected(c.name)
                            setIsActive(false)
                        }}>
                            {c.name}
                        </div>
                    ))}
                </div>

            )}
        </div>
    )
}
