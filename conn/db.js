const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/notes", {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true})
.then(()=>{
    console.log("Connection to MongoDB is successful");
}).catch((err)=>{
    console.log(err);
});