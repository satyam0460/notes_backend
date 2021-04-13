const express=require('express');
const app=express();
const port=process.env.PORT || 3000;
require('./conn/db');
app.use(express.json());


const UserModel=require('./models/UserSchema');
const userRoutes=require('./routes/UserRoute');
const noteRoutes=require('./routes/NotesRoutes');


app.get("/",(req, res)=>{
    res.send("Home URL");
})

app.use("/user", userRoutes);
app.use("/notes", noteRoutes);
app.listen(port, ()=>{
    console.log("Listening at port "+port);
})