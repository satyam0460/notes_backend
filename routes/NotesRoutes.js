const express=require('express');
const route=express.Router();
const Note=require('../models/NotesSchema');
const User=require('../models/UserSchema');
route.post('/add',async (req,res)=>{
    try{
        const _id=req.body.user_id; 
        const user=await User.find({_id});
        if(!user)
            return res.status(400).send('User ID required');
        const note=new Note(req.body);
        const result=await note.save();
        res.status(201).send(result);
    }catch(e){
        res.send(404).send(e);
    }
});
route.post('/get', async (req, res)=>{
    try{
        const user_id=req.body.user_id;
        if(!user_id)
            return res.status(400).send('User Id required');
        const note=await Note.find({user_id}).sort({'importance':1});
        if(!note)
            return res.status(404).send('No Notes Available');
        res.status(200).send(note);
    }catch(e){
        res.status(404).send(e);
    }
});

route.put('/update', async(req, res)=>{
    try{
        const _id=req.body._id;
        const title=req.body.title;
        const desc=req.body.desc;
        const importance=req.body.importance;
        const result=await Note.updateOne({_id}, {title, desc, importance});
        res.status(200).send(result);
    }catch(e){
        res.status(404).send('Internal Error Occured');
    }
})
route.delete('/delete', async (req, res)=>{
    try{
        const _id=req.body._id;
        const result=await Note.deleteOne({_id});
        res.status(200).send(result);
    }catch(e){
        res.status(400).send(e);
    }
})
module.exports=route;