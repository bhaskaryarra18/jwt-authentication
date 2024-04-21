import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login (){
    let [email,setemail]=useState()
    let [pwd,setpwd]=useState()
    const navigate= useNavigate()

    let submit=(e)=>{
            e.preventDefault()
            axios.post('http://localhost:3010/login',{email,pwd})
            .then(res=>{console.log(res)
                if (res.data=== "success")
                    navigate('/profile')
            })
            .catch(err=>console.log(err))
    }
    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor='email'> Email </label>
                    <input type='text' placeholder="enter email" onChange={e =>setemail(e.target.value)} name='email'></input>
                </div>
                <div>
                    <label htmlFor='pwd'> password </label>
                    <input type='password' placeholder="enter password" onChange={e =>setpwd(e.target.value)} name='pwd'></input>
                </div>
                <button type="submit"> Login </button>
            </form>
        </div>
    )
}

export default Login