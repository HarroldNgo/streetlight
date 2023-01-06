import './admin.css'
import Sidebar from '../../components/sidebar/Sidebar'
import ManageCategories from '../../components/managecategories/ManageCategories'

export default function AdminC() {
  return (
    <div className="adminpage">
      <Sidebar/>
      <ManageCategories/>
    </div>
  )
}
