import { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import Slider from "../../components/slider/Slider"
import "./home.css"
import axios from "../../api/axios"

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/api/posts?frontpage=true`)
      setPosts(res.data)
    }
    fetchPost()
  }, [])

  const PF = "https://res.cloudinary.com/dmluqp41s/image/upload/"

  return (
    <>
      <div className="home">
        <Header />
        <div className="desktop">
          <Slider posts={posts}>
          </Slider>
        </div>
        <div className="mobile">
          {posts.map((post, i) => (
            (post.comingsoon ?
              <div key={i} className="spost">
                  <div className="hover">
                      <h4 className="hovertitle">{post.title}</h4>
                      <p className="hovertext">
                          {(post.desc).split(/\r?\n/).slice(0, post.desc.split(/\r?\n/).length / 2).join("\n")}
                          <br />
                          <span style={{ fontSize: 25 }}>{(post.desc).split(/\r?\n/).slice(post.desc.split(/\r?\n/).length / 2, post.desc.split(/\r?\n/).length).join("\n")}</span>
                      </p>
                  </div>
                  <img src={PF + post.photo + ".png"} alt="" className="slider-image grey" />
              </div>
              : <div key={i} className="spost">
                  <div className="hover">
                      <h4 className="hovertitle">{post.title}</h4>
                      <p className="hovertext">
                          {(post.desc).split(/\r?\n/).slice(0, post.desc.split(/\r?\n/).length / 2).join("\n")}
                          <br />
                          <span style={{ fontSize: 25 }}>{(post.desc).split(/\r?\n/).slice(post.desc.split(/\r?\n/).length / 2, post.desc.split(/\r?\n/).length).join("\n")}</span>
                      </p>
                  </div>
                  <a className="slider-link" href={`/post/${post._id}`}>
                      <img src={PF + post.photo + ".png"} alt="" className="slider-image" />
                  </a>
              </div>)
          ))}
        </div>
        <p className="copyright">copyright streetlight 2023 // contact</p>
      </div>
    </>
  )
}
