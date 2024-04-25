const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://saliha:saliha@cluster0.3ukfjwr.mongodb.net/BlogApp?retryWrites=true&w=majority&appName=Cluster0")
  .then(()=>{
       console.log("Db connected")
  })
  .catch((error)=>{
       console.log(error)
  })