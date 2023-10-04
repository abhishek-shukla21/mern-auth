import { useState } from 'react';
import {toast} from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Register() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '', 
    })  

    const registerUser = async (e) => {
        e.preventDefault();
        const { name, email, password } = data
        console.log('register user name:', name);
        console.log('register user email:', email);
        console.log('register user password:', password);
        try {
            const {data} = await axios.post("/register", {
                name, email, password
            })
          if (data.error) {
            return toast.error(data.error);  
          } else {
            setData({});
            toast.success('Login successfull')
            navigate('/login')
          }
        } catch (error) {
            console.log('Error registering user:', error);            
        }
    }

  return (
    <div>
        <form onSubmit={registerUser}>
            <label>Name:</label>
            <input type='text' placeholder='Enter name' value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
            <label>Email:</label>
            <input type='email' placeholder='email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
            <label>Password:</label>
            <input type='password' placeholder='password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
            <button type='submit'>Register</button>            
        </form>
    </div>
  )
}