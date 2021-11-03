import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {

    const [username, setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [userID,setUserID] = useState("");

    return (
        <form className="container-fluid d-flex flex-column align-items-center justify-content-center bg-dark text-white" style={{height:"92.5vh"}}
        onSubmit={async(e)=>{
            e.preventDefault();
            try {
                if(!username.trim()||!email.trim()){
                    alert("Please fill all the fields");
                }
                else{
                    const config={
                        headers:{
                            "Content-Type":"application/json"
                        }
                    }
                    const {data} = await axios.post('/api/register',{username,email},config);
                    setUserID(data);
                    alert("Registration Successful");
                }
            } catch (error) {
                console.log(error);
                alert("Something went wrong!");
            }
        }}
        >
            <h1 className="display-4 text-info mb-5 border border-info p-3 pt-0">Register</h1>
            <h1 className="display-6 text-info ny-3">{userID?userID:null}</h1>
            <input class="form-control w-50 my-2" type="text" placeholder="Enter your name" aria-label="default input example" value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />
            <input class="form-control w-50 my-2" type="text" placeholder="Enter your email" aria-label="default input example" value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn-info my-3" >Submit</button>
        </form>
    )
}

export default Register
