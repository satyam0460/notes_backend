const mongoose=require('mongoose');
const validator=require('validator');
const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        minlength: 3
    },
    email:{
        type: String,
        required: true,
        unique: [true, 'Email already Exists'],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email')
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
        min:999999999,
        max:10000000000
    },
    password:{
        type:String,
        required:true,
        minlength:8
    }
});
const User = new mongoose.model("User", userSchema);
module.exports=User;