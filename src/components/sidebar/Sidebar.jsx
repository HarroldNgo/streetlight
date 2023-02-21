import './sidebar.css'
import { Link } from "react-router-dom"

export default function Sidebar() {
    return (
        <div className="left-sidebar">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/admin">Manage Posts</Link></li>
                <li><Link to="/admin/cat">Manage Categories</Link></li>
            </ul>
        </div>
    )
}
