

import Home from "./pages/home/Home"
import Single from "./pages/single/Single"
import Welcome from "./pages/welcome/Welcome"
import Categories from "./pages/categories/Categories"
import About from "./pages/about/About"
import Login from "./pages/login/Login"
import Admin from "./pages/admin/Admin"
import AdminC from "./pages/admin/AdminC"

import EditPost from "./pages/edit/EditPost"
import AddPost from "./pages/add/AddPost"
import EditCat from "./pages/edit/EditCat"
import AddCat from "./pages/add/AddCat"
import {
  Routes,
  Route
} from "react-router-dom";

import Layout from './components/Layout'
import Missing from './components/Missing'
import RequireAuth from "./components/RequireAuth"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="loginadmin" element={<Login />} />
        <Route path="/" element={<Welcome />} />
        <Route path="home" element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="post/:postId" element={<Single />} />
        <Route path="about" element={<About />} />

        {/* admin routes */}
        <Route element={<RequireAuth />}>
          <Route path="admin" element={<Admin />} />
          <Route path="admin/edit/:postId" element={<EditPost />} />
          <Route path="admin/add" element={<AddPost />} />

          <Route path="admin/cat" element={<AdminC />} />
          <Route path="admin/cat/edit/:catId" element={<EditCat />} />
          <Route path="admin/cat/add" element={<AddCat />} />
        </Route>

        <Route path="*" element={<Missing />} />

      </Route>
    </Routes>
  );
}

export default App;
