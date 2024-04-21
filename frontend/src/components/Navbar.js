import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import Profile from './profile'

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'


function Header(){
  return (
    <u>
      <li> <Link to='/'> Home </Link> </li>
      <li> <Link to='/signup'> Signup </Link> </li>
      <li> <Link to='/login'> Login </Link> </li>
    </u>
  )
}

function Navbar() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default Navbar

