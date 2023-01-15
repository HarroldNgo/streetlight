import "./singlepost.css";
import axios from "../../api/axios"
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PF = "http://localhost:5000/images/"
    
    useEffect(()=>{
        const getPost = async ()=>{
            const res = await axios.get("/api/posts/"+path)
            setPost(res.data);
        };
        getPost();
    }, [path]);

    
    return (
        <div className="singlepost">
            <div className="postimage" id="postimage">
                {post.photo && (
                    <img src={PF + post.photo} alt="" className="single-postimage" />
                )}
                <p className="desc">{post.desc}</p>
            </div>
            <div className="postbody">
            <h1 className="post-title">{post.title}</h1>
            <p className="paragraph">{post.body}</p>
            </div>
        </div>
    )
}
