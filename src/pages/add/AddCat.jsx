import './add.css'
import Sidebar from '../../components/sidebar/Sidebar'
import axios from "../../api/axios"
import { useState } from 'react'

export default function AddCat() {
    const [name, setName] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newCat = {
            name,
        };
        try{
            await axios.post("/api/categories", newCat);
            window.location.replace("/admin/cat");
        }catch(err){console.log(err.response.data)}
    }

    return (
        <div className="adminpage">
            <Sidebar />
            <div className="admin-content">
                <form className="writeForm" onSubmit={handleSubmit}>
                    <div className="writeFormGroup">
                        <h3>Category Name:</h3>
                        <input 
                        type="text" 
                        placeholder="Name" 
                        className='writeInput titlewriteinput' 
                        autoFocus={true}
                        onChange={e=>setName(e.target.value)} />
                    </div>
                    <button className="btn btn-big" type='submit'><h3>Finish</h3></button>
                </form>
            </div>
        </div>
    )
}
