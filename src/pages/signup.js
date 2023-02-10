import React, { useState } from 'react'
import { useAuth } from './Context/AuthContext'
import Link from 'next/link';

const signup = () => {
    const { signup } = useAuth();
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            await signup(data.email, data.password)
            setData({
                email: "",
                password: ""
            })
            alert("You have successfully Signed up!!!");
        } catch (err) {
            document.getElementById("error").textContent = err;
        }      
        
    }

    return (
        <div className='container my-4' style={{ width: "40%", margin: "auto" }}>
            <form onSubmit={handleSignup}>
                <h1 className='text-center'>Signup</h1>
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
                    <button className="btn btn-primary mx-3" type='submit'>Signup</button>
                  <button className='btn btn-success'><Link href="/login" className='text-light'>Go to Login</Link></button>  
                </div>
                <div id='error' className = 'text-center text-danger my-2'>
                </div>
            </form>
        </div>
    )
}

export default signup