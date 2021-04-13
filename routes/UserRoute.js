const { response } = require('express');
const express=require('express');
const route=express.Router();

const User=require('../models/UserSchema');

route.post('/register', async (req,res)=>{
    try{
        const user=new User(req.body);
        const result = await user.save();
        res.status(201).send(result);
    }catch(e){res.status(400).send(e);}
})
route.get('/', async (req, res)=>{
    try{
        const result=await User.find()
        res.status(200).send(result);
    }catch(e){
        res.status(400).send(e);
    }
})

route.get('/:id', async (req, res)=>{
    try{
        const _id=req.params.id;
        const result = await User.find({_id});
        if(!result)
            res.status(404).send("User Not Found");
        res.status(200).send(result);
    }catch(e){
        res.status(500).send(e);
    }
})
route.post('/login',async (req, res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;
        const result = await User.findOne({'email':email, 'password':password});
        if(!result)
            return res.status(404).send('Incorrect Email or Password');
        res.status(200).send(result);
    }catch(e){
        res.status(400).send(e);
    }
})
module.exports=route;