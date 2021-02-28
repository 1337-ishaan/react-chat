import mongoose from 'mongoose';

// user model
interface userSchema {
    username:String;
    password:String;
}

const authSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    }  
})

const User = mongoose.model('User',authSchema);



export { User };