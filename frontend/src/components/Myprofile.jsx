import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
const Myprofile = () => {
    const[userId,setUserId] = useState(sessionStorage.getItem("id"))
    const[myData,setMyData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/api/viewmypro/"+userId)
        .then((res)=>{
            console.log(res.data)
            setMyData(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <div style={{margin:"10%"}}> 

    <Grid container spacing={2}>
    <Grid item xs={12} sm={4} md={4}></Grid>
    {myData.map((val,i)=>{
        return(
            <Grid item xs={12} sm={4} md={4}>


            <Card sx={{ minWidth: 275 }}>
            <CardContent>
            <Typography variant='h5' component="div" gutterBottom>
              Name:{val.name}
            </Typography>
            <Typography x={{ fontSize:14}}>
              Email:{val.email}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Address:{val.address}
            </Typography>
            <Typography variant="body2">
             Username:{val.username}           
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Edit</Button>
            <Button size="small">Update</Button>
          </CardActions>
    </Card>


            </Grid>
        )
    })}

    </Grid>
    
    </div>
  )
}

export default Myprofile