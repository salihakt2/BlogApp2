import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ViewBlog = () => {
  var[data,setData] = useState([]);
  var[update,setUpdate] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get("http://localhost:4000/api/viewall")
    .then((res)=>{
      setData(res.data)
    })
  },[])

  const deletValue = (id)=>{
    console.log("id is",id)
    axios.delete("http://localhost:4000/api/remove/"+id)
    .then((res)=>{
      alert(res.data.message)
      window.location.reload(true)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  const updateBlog = (val)=>{
    console.log("update:",val);
    setUpdate(update=true);
    console.log(update);
    navigate('/add',{state:{val,update}})
  }

 
  return (
    <div style={{margin:'6%'}}>

    <Grid container spacing={2}>

    {data.map((val,i)=>{
      return(

      <Grid item xs={12} sm={4} md={4}>

      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         { val.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {val.post}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant ="contained" color = "error" size="small"
         onClick={()=>{deletValue(val._id)}}>Delete</Button>
        <Button  variant ="contained" color = "success" size="small"
        onClick={()=>{updateBlog(val)}}>Update</Button>
                
      </CardActions>
    </Card>

      </Grid>
      )
      
    })}  

    </Grid>

    </div>
  )
}

export default ViewBlog