import "./singlecategory.css"
import axios from "../../api/axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

export default function SingleCategory({ cat }) {
    const PF = "https://res.cloudinary.com/dmluqp41s/image/upload/"
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`/api/posts?cat=${cat.name}`)
            setPosts(res.data)
        }
        fetchPost()
    }, [cat.name])
    
    return (
        (posts.length === 0 ?
            ""
            : <div className="category-wrapper">
                <h2 className="subtitle">{cat.name}</h2>
                <div className="categories">
                    {posts.map((p, i) => (
                        (p.comingsoon ? <div key={i} className="inside-category">
                            <img src={PF + p.photo + ".png"} alt="" className="category-image" />
                        </div>
                            : <div key={i} className="inside-category">
                                <Link to={`/post/${p._id}`}><img src={PF + p.photo + ".png"} alt="" className="category-image" /></Link>
                            </div>)

                    ))}
                </div>
            </div>)
    )
}
