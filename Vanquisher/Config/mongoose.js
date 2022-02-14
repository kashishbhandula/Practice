const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/Vanquisher');
const db=mongoose.connection;
db.once('open',function(){
    console.log('MongoDb is working fine');
})
module.exports=db;