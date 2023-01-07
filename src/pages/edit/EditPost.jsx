import './edit.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Toggle from '../../components/toggle/Toggle'
import DropDown from '../../components/dropdown/DropDown'
import { useLocation } from "react-router";
import axios from "../../api/axios"
import { useEffect, useState } from 'react'


export default function EditPost() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [body, setBody] = useState("")
  const [file, setFile] = useState(null)
  const [frontpage, setFrontPage] = useState(false);
  const [categories, setCategories] = useState("")
  const date = Date.now();
  const location = useLocation();
  const path = location.pathname.split("/")[3];
  const [post, setPost] = useState({});
  const [comingsoon, setComingSoon] = useState(false);




  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/api/posts/" + path)
      setPost(res.data);
      setTitle(res.data.title)
      setDesc(res.data.desc)
      setBody(res.data.body)
      setFrontPage(res.data.frontpage)
      setCategories(res.data.categories)
      setComingSoon(res.data.comingsoon)
    };
    getPost();
  }, [path]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedPost = {
      title,
      desc,
      body,
      frontpage,
      comingsoon,
      categories,
    };
    if (file) {
      const data = new FormData();
      const filename = date + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedPost.photo = filename
      try {
        await axios.post("/api/upload", data)
      } catch (err) { console.log(data) }
      try {
        await axios.delete("/api/files/" + post.photo)
      } catch (err) { console.log("del error") }
    }
    try {
      await axios.put("/api/posts/" + post._id, updatedPost)
      window.location.replace("/post/" + post._id);
    } catch (err) {
      if (file) {
        const filename = date + file.name;
        try {
          await axios.delete("/api/files/" + filename)
        } catch (err) { console.log("del error" + filename) }
      }
    }
  }
  return (
    <div className="adminpage">
      <Sidebar />
      <div className="admin-content">
        {file && (
          <img
            className='writeImage'
            src={URL.createObjectURL(file)}
            alt='' />
        )}
        <form className="writeForm" onSubmit={handleUpdate}>
          <div className="writeFormGroup">
            <label htmlFor="fileInput"></label>
            <h3>Image:</h3>
            <input
              type="file"
              id="fileInput"
              onChange={e => setFile(e.target.files[0])} />
          </div>
          <div className="writeFormGroup">
            <h3>Title:</h3>
            <input
              type="text"
              placeholder="Title"
              className='writeInput titlewriteinput'
              autoFocus={true}
              defaultValue={post.title}
              onChange={e => setTitle(e.target.value)} />
          </div>
          <div className="writeFormGroup">
            <h3>Image Caption:</h3>
            <textarea
              placeholder='Write stuffs'
              type='text'
              className='writeInput captionwriteinput'
              defaultValue={post.desc}
              onChange={e => setDesc(e.target.value)}></textarea>
          </div>
          <div className="writeFormGroup">
            <h3>Body:</h3>
            <textarea
              placeholder='Write stuffs'
              type='text'
              className='writeInput writeText'
              defaultValue={post.body}
              onChange={e => setBody(e.target.value)}></textarea>
          </div>
          <div className="writeFormGroup">
            <h3>Category:</h3>
            <DropDown selected={categories} setSelected={setCategories} />
          </div>
          <div className="writeFormGroup">
            <h3>Featured:</h3>
            <Toggle isToggled={frontpage} onToggle={() => setFrontPage(!frontpage)} />
          </div>
          <div className="writeFormGroup">
            <h3>Coming Soon:</h3>
            <Toggle isToggled={comingsoon} onToggle={() => setComingSoon(!comingsoon)} />
          </div>
          <button className="btn btn-big" type='submit'><h3>Update</h3></button>
        </form>
      </div>
    </div>
  )
}
