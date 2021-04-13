const mongoose=require('mongoose');
const noteSchema=new mongoose.Schema({
    "user_id":{
        required:true,
        type:String
    },
    "title":{
        required:true,
        type:String,
        minlength:3
    },
    "desc":{
        type:String,
        required:true
    },
    "importance":{
        type:Number,
        min:1,
        max:10,
        required:true
    }
});
const Note=new mongoose.model("Note",noteSchema);
module.exports=Note;