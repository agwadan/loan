import React, { useState, useEffect } from 'react'
import { Typography, TextField, Button } from "@mui/material"
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const BVN = () => {
  const [bvn, setBvn] = useState('');
  function clickHandler(e) {
    setBvn(e.target.value);
  }

  const HandleBVN = () => {
    if (bvn) {
      localStorage.setItem('user', bvn);
      axios.post('https://superloan.onrender.com/api/auth/bvn/getotp', {
        BVN: bvn
      })
        .then(function (response) {
          localStorage.setItem('otp', response.data.data[0]);
        })
    }
    else {
      toast.error('Please Enter BVN', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
  }
  useEffect(
    () => {
      const alreadyLoaded = localStorage.getItem('user');
      if (alreadyLoaded) {
        localStorage.setItem('alreadyLoaded', true);
        window.location.reload();
      }
    }, []
  )



  return (
    <div>
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '10px', width: '500px', borderRadius: '10px',
        boxShadow: '0 0 6px 3px #E6E6E6',
      }}>
        <Typography variant="h5" color="initial">Enter your BVN </Typography>
        <TextField id="outlined-basic" label="BVN" variant="outlined" type='number' style={{ width: '100%', marginTop: '20px', marginBottom: '20px' }} onChange={clickHandler} />
        {
          bvn ?
            <Link to='/Register' style={{ textDecoration: 'none' }}>
              <Button variant='contained' style={{ marginTop: '2px 0px', width: '100%' }} onClick={HandleBVN}>Next</Button>
            </Link> :
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Button variant='contained' style={{ marginTop: '2px 0px', width: '100%' }} onClick={HandleBVN}>Next</Button>
            </Link>
        }
      </div>
      <ToastContainer />
    </div>
  )
}

export default BVN
