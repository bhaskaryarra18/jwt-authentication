import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios'

function Signup (){
    let [name,setname]=useState()
    let [email,setemail]=useState()
    let [pwd,setpwd]=useState()
    let [cpwd,setcpwd]=useState()

    let submit=(e)=>{
            e.preventDefault()
            axios.post('http://localhost:3010/signup',{name,email,pwd,cpwd})
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor='name'> Name </label>
                    <input type='text' placeholder="enter name" onChange={e =>setname(e.target.value)} name='name'></input>
                </div>
                <div>
                    <label htmlFor='email'> Email </label>
                    <input type='text' placeholder="enter email" onChange={e =>setemail(e.target.value)} name='email'></input>
                </div>
                <div>
                    <label htmlFor='pwd'> password </label>
                    <input type='password' placeholder="enter password" onChange={e =>setpwd(e.target.value)} name='pwd'></input>
                </div>
                <div>
                    <label htmlFor='cpwd'> Confirm password </label>
                    <input type='password' placeholder="enter confirm password"  onChange={e =>setcpwd(e.target.value)} name='cpwd'></input>
                </div>
                <button type="submit"> Signup </button>
            </form>
            <Link to='/login'> Login </Link>
        </div>
    )
}

export default Signup