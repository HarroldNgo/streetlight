import './edit.css'
import Sidebar from '../../components/sidebar/Sidebar'
import { useLocation } from "react-router";
import axios from 'axios'
import { useEffect, useState } from 'react'


export default function EditCat() {
  const [name, setName] = useState("")
  const location = useLocation();
  const path = location.pathname.split("/")[4];
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const getCat = async () => {
      const res = await axios.get(`/api/categories/${path}`)
      setCat(res.data)
      setName(res.data.name)
    };
    getCat();
  }, [path]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedPost = {
      name,
    };
    try {
      await axios.put("/api/categories/" + path, updatedPost)
      window.location.replace("/admin/cat");
    } catch (err) { }
  }
  return (
    <div className="adminpage">
      <Sidebar />
      <div className="admin-content">
        <form className="writeForm" onSubmit={handleUpdate}>
          <div className="writeFormGroup">
            <h3>Name:{cat.name}</h3>
            <input
              type="text"
              placeholder="Title"
              className='writeInput titlewriteinput'
              autoFocus={true}
              defaultValue={name}
              onChange={e => setName(e.target.value)} />
          </div>
          <button className="btn btn-big" type='submit'><h3>Update</h3></button>
        </form>
      </div>
    </div>
  )
}
