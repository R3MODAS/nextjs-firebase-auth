import React, { useState } from 'react'
import { useAuth } from './Context/AuthContext'
import { useRouter } from 'next/router';

const login = () => {
    const router = useRouter();
    const { login } = useAuth();

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(data.email, data.password);
            setData({
                email: "",
                password: ""
            })
            alert("You have successfully Logged in!!!");
            router.push("/dashboard");

        } catch (err) {
            document.getElementById("error").textContent = err;
        }
        
    }

    return (
        <div className='container my-4' style={{ width: "40%", margin: "auto" }}>
            <form onSubmit={handleLogin}>
                <h1 className='text-center'>Login</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Email" value={data.email} onChange={
                        (e) => { setData({ ...data, email: e.target.value }) }
                    } />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder='Enter your Password' value={data.password} onChange=
                        {(e) => { setData({ ...data, password: e.target.value }) }} />
                </div>
                <div className='text-center'>
                    <button className="btn btn-primary" type='submit'>Login</button>
                </div>
                <div id='error' className = 'text-center text-danger my-2'>
                </div>
            </form>
        </div>
    )
}

export default login