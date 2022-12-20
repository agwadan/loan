import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      Your Website
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SigIn() {

  const [pass, setPass] = useState('');
  const [BVNotp, setBVNotp] = useState('');
  useEffect(()=>{
    setBVNotp(localStorage.getItem('otp'))
  })

  function passHandler(e) {
    setPass(e.target.value);
  }
  function CpassHandler(e) {
    setBVNotp(e.target.value);
  }
  const HandleRegister = (e) => {
    if ( pass === '' || BVNotp === '') {
      e.preventDefault();
      toast.error('Please Enter BVNCode & Password', {
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
    else {
      axios.post('https://superloan.onrender.com/api/auth/user/register', {
        otp: BVNotp,
        password: pass
      })
        .then(function (response) {
          console.log(response);
        })
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={passHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="otp"
                  label="otp"
                  type="text"
                  id="otp"
                  value={BVNotp}
                />
              </Grid>


            </Grid>
            {
              pass && BVNotp ?
                <Link to='/SignIn' style={{ textDecoration: 'none' }}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={HandleRegister}
                  >
                    Register
                  </Button>
                </Link> :
                <Link to='/Regsiter' style={{ textDecoration: 'none' }}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={HandleRegister}
                  >
                    Register
                  </Button>
                </Link>
            }
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to='/SignIn'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <ToastContainer />
    </ThemeProvider>
  );
}