import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" color='secondary'>
      <Toolbar>
       
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}  style={{textAlign:'left'}}>
          BlogApp
        </Typography>
        <Button ><Link to={'/add'} style={{color:'white', textDecoration:'none'}}>Add</Link></Button>
        <Button ><Link to={'/view'} style={{color:'white', textDecoration:'none'}}>View</Link></Button>
        <Button ><Link to={'/my'} style={{color:'white', textDecoration:'none'}}>My profile</Link></Button>
        <Button ><Link to={'/'} style={{color:'white', textDecoration:'none'}}>Logout</Link></Button>
       
      </Toolbar>
    </AppBar>
  </Box>
    </div>
  )
}

export default Navbar