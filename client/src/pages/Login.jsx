import { useState } from "react";
import axios from 'axios';

export default function Login() {

    const [data, setData] = useState({
        email: '',
        password: '', 
    })

    const loginUser = (e) => {
        e.preventDefault();
        console.log('login user');
        axios.get('/')
    }

  return (
    <div>Login
        <form onSubmit={loginUser}>
            <label>Email:</label>
            <input type='email' placeholder='email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
            <label>Password:</label>
            <input type='password' placeholder='password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}
