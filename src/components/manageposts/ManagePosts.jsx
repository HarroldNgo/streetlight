import './manageposts.css'
import { useEffect, useState } from "react"
import Toggle from '../toggle/Toggle'
import { Link } from 'react-router-dom'
import axios from "../../api/axios"

export default function ManagePosts() {
  const [posts, setPosts] = useState([]);
  const PF = "https://streetlight-api.onrender.com/images/"

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/api/posts")
      setPosts(res.data)
    }
    fetchPost()
  }, [])

  const handleDelete = async (post) => {
    try {
      await axios.delete("/api/posts/" + post._id)
      window.location.reload();
    } catch (err) { }
    try{
      await axios.delete("/api/files/" + post.photo)
    }catch(err){console.log("del error")}
  }

  return (
    <div className="admin-content">
      <div className="button-group">
        <Link to="/admin/add" className="btn btn-big">Add Post</Link>
      </div>
      <div className="content">
        <h2 className="page-title">Manage Posts</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Featured</th>
              <th>Coming Soon</th>
              <th colSpan="3">Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((p, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><img className='table-image' alt='' src={PF + p.photo}/></td>
                <td><Link to={`/post/${p._id}`}>{p.title}</Link></td>
                <td><label className='toggle'>
                <Toggle isToggled={p.frontpage} onToggle={()=>{}}/>
                </label></td>
                <td><label className='toggle'>
                <Toggle isToggled={p.comingsoon} onToggle={()=>{}}/>
                </label></td>
                <td><Link className='edit' to={`/admin/edit/${p._id}`}>Edit</Link></td>
                <td><button className="delete" onClick={async () => {
                  handleDelete(p)
                }}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div >
  )
}
