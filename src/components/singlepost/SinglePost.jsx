import "./singlepost.css";
import axios from "../../api/axios"
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState([]);
    const PF = "https://res.cloudinary.com/dmluqp41s/image/upload/"

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/api/posts/" + path)
            setPost(res.data)
        };
        getPost();
    }, [path]);

    /*
    <p className="desc">{p.desc.split(/\r?\n/).slice(0, p.desc.split(/\r?\n/).length / 2).join("\n")}
                            <br />
                            <span className="desc-secondary">{(p.desc).split(/\r?\n/).slice(p.desc.split(/\r?\n/).length / 2, p.desc.split(/\r?\n/).length).join("\n")}</span>
                        </p>
    */

    return (
        <div className="outer">
            <div className="singlepost">
                <div className="postimage" id="postimage">
                    {post.photo && (
                        <img src={PF + post.photo + ".png"} alt="" className="single-postimage" />
                    )}
                    <p className="desc">{post.desc}
                    </p>
                </div>
                <div className="postbody">
                    <h1 className="post-title">{post.title}</h1>
                    <p className="paragraph">{post.body}</p>
                </div>
            </div>
        </div>

    )
}
