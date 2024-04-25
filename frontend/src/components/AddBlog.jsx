import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const AddBlog = ({props,update}) => {

  var location = useLocation();
  console.log("location:",location.state)

  const[post,setPost] = useState({title:'',post:'',image:''});
  const navigate = useNavigate();

  useEffect(()=>{
    if (location.state!=null) {
      setPost({...post,title:location.state.val.title,
                        post:location.state.val.post,
                         image:location.state.val.image})
    }else{
      setPost({...post,title:'',post:'',image:''})
    }

  },[])


  const inputHandler = (e)=>{
      setPost({...post,[e.target.name]:e.target.value});
      console.log (post)
  }


  const addPost = ()=>{
      if (location.state!= null) {
        var upId = location.state.val._id
        console.log("Clicked",upId)
        axios.put("http://localhost:4000/api/edit/"+upId,post)
        .then((res)=>{
          if(res.data.message="Blog Updated Successfully"){
            alert(res.data.message);
            navigate('/view')

          }else{
            alert("user not Found")

          }
        })
      } else {
        console.log("btn clicked",post)
      axios.post("http://localhost:4000/api/addblog",post)
      .then((res)=>{
        alert(res.data.message)
        navigate('/view')

      })
      .catch((error)=>{
        console.log(error)
      })
      }
  }


  return (

    <div style={{margin:'2%'}}>

    <Typography>Add Blogs</Typography>

    <br/>
    <br/>

    <Grid container spacing={2}>

    <Grid item xs={12} sm={12} md={12}>
    <TextField variant='outlined' label='Post title' fullWidth value={post.title} name='title' onChange={inputHandler} />   
    </Grid>

    <Grid item xs={12} sm={12} md={12}>
    <TextField variant='outlined' label='Type of Post' fullWidth multiline rows={7} 
     value={post.post}name='post' onChange={inputHandler} />  
    </Grid>
    
    <Grid item xs={12} sm={12} md={12}>
    <TextField variant='outlined' label='IMAGE URL' fullWidth value={post.image} name='image' onChange={inputHandler} />  
    </Grid>

    <Grid item xs={12} sm={12} md={12}>
    <Button variant='contained' color='secondary'  onClick={addPost} > Submit</Button>
    </Grid>


    </Grid>

    
    </div>
  )
}

export default AddBlog