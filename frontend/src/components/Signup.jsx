import { Alert, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {
    const [inputs,setInputs] = useState({});

    const inputHandler = (e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value});
        console.log(inputs)
    }

    const SubmitHandler= ()=>{
        console.log("btn clicked",inputs)
        axios.post("http://localhost:4000/api/post",inputs)   //connecting backend
         .then((res)=>{
          console.log(res);
          alert(res.data.message);
         })
        
    }
  return (
    <div style={{margin:'2%'}}>

    <Typography variant='h3' style={{color:"purple"}}>
    Signup Form
    </Typography>

    <br/><br/>
    
    <Grid container spacing={2}>
    <Grid item xs={12} sm={6} md={6}>
     <TextField varient='outlined' label="Name" fullWidth  name='name' onChange={inputHandler}/>
    
    </Grid>

    <Grid item xs={12} sm={6} md={6}>
    <TextField varient='outlined' label="Email" fullWidth  name='email' onChange={inputHandler} />  
   </Grid>

    <Grid item xs={12} sm={12} md={12}>
     <TextField varient='outlined' label="Addess" fullWidth multiline rows={5}  name='address'onChange={inputHandler}  />    
    </Grid>
   
    <Grid item xs={12} sm={6} md={6}>
     <TextField varient='outlined' label="UserName" fullWidth  name='username' onChange={inputHandler}/>   
    </Grid>

    <Grid item xs={12} sm={6} md={6}>
     <TextField varient='outlined' label="Password" type='password' fullWidth  name='password'onChange={inputHandler} />   
    </Grid>

    <Grid item xs={12} sm={12} md={12}>
    <Button variant='contained' color='secondary' onClick={SubmitHandler}>Submit</Button>
    </Grid>

    <Grid item xs={12} sm={12} md={12}>
    <Link to={'/'}>Back to Login</Link>
    </Grid>
 
    </Grid>

    </div>
  )
}

export default Signup