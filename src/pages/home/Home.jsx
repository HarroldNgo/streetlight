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
  return (
    <>
      <div className="home">
        <Header />
        <Slider posts={posts}>
        </Slider>
        
        <p className="copyright">copyright streetlight 2023 // contact</p>
      </div>
    </>
  )
}
