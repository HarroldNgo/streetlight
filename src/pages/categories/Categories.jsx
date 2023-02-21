import "./categories.css"
import Header from "../../components/header/Header"
import SingleCategory from "../../components/singlecategory/SingleCategory"
import { useEffect, useState } from "react"
import axios from "../../api/axios"
import { useLocation } from "react-router"
import { Link } from 'react-router-dom'

export default function Categories() {
    const [cats, setCats] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/api/categories" + search)
            setCats(res.data)
        }
        getCats()
    }, [search])

    return (
        <div className="categories-outer">
            <Header />
            <div className="new-category-wrapper">
                <Link className="category c1">Perserverance</Link>
                <Link className="category c2">Disruption</Link>
                <Link className="category c3">Focus</Link>
                <div className="sections">
                    <h1 className="category-title">Categories</h1>
                    {cats.map((c, i) => (
                        <SingleCategory cat={c} key={i} />
                    ))}
                </div>
            </div>
        </div>
    )
}