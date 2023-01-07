import './managecategories.css'
import { useEffect, useState } from "react"
import axios from "../../api/axios"
import { Link } from 'react-router-dom'

export default function ManageCategories() {
    const [cats, setCats] = useState([]);
    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/api/categories")
            setCats(res.data)
        }
        getCats()
    }, [])

    const handleDelete = async (id) => {
        try {
          await axios.delete("/api/categories/" + id)
          window.location.reload();
        } catch (err) { }
      }

    return (
        <div className="admin-content">
            <div className="button-group">
                <Link to="/admin/cat/add" className="btn btn-big">Add Category</Link>
            </div>
            <div className="content">
                <h2 className="page-title">Manage Categories</h2>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cats.map((c, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{c.name}</td>
                                <td><Link className='edit' to={`/admin/cat/edit/${c._id}`}>Edit</Link></td>
                                <td><button className="delete" onClick={async () => {
                                    handleDelete(c._id)
                                }}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
