import React from 'react'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import { useNavigate  } from "react-router-dom";

const SignOutButton = () => {
  const navigate = useNavigate();
  const HandleLocalStorage =()=>{
    localStorage.clear();
    navigate('/');
  }
  return (
    <div style={{textAlign:'center',}}>
        <h2>Are you sure to SignOut?</h2>
        <Link to='/' style={{textDecoration:'none'}}>
           <Button variant="contained" color='error' onClick={HandleLocalStorage}>Sign Out</Button>
        </Link>
    </div>
  )
}

export default SignOutButton