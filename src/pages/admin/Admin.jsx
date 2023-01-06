import "./admin.css"
import Sidebar from '../../components/sidebar/Sidebar'
import ManagePosts from '../../components/manageposts/ManagePosts'

export default function Admin() {
  return (
    <div className="adminpage">
      <Sidebar/>
      <ManagePosts/>
    </div>
  )
}
