const mongoose=require('mongoose');

const CredentialSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
        
    }
},
    {
        timestamps:true
    }

)
const User=mongoose.model('User',CredentialSchema);
module.exports=User;