import React from 'react'
import { Box, Button, Typography, TextField } from '@mui/material';

const ProfileContant = () => {
    return (
        <div style={{}}>
            <Box style={{
                padding: '10px', width: '500px', borderRadius: '10px',
                boxShadow: '0 0 6px 3px #E6E6E6', position: 'absolute',
                top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                paddingBottom:'20px'
            }}>
                <Typography variant="h5" color="initial" style={{ fontWeight: '600', textAlign: 'center', margin: '15px' }}>Edit Profile</Typography>
                <hr />
                <TextField id="outlined-basic" label="Email" variant="outlined" style={{ width: '100%', marginTop: '20px' }} />
                <TextField id="outlined-basic" type="file" variant="outlined" style={{ width: '100%', marginTop: '20px' }} />
                <TextField id="outlined-basic" label="Old Password" variant="outlined" style={{ width: '100%', marginTop: '20px' }} />
                <TextField id="outlined-basic" label="New Password (optional)" variant="outlined" style={{ width: '100%', marginTop: '20px' }} />
                <Button variant="contained" style={{ width: '100%', marginTop: '20px', padding: '10px', textTransform: 'none' }}>Edit Profile</Button>
            </Box>
        </div>
    )
}

export default ProfileContant