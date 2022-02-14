const { redirect } = require('express/lib/response');
const User=require('../Models/credential_schema');
module.exports.sign_in=function(req,res){

        res.render('sign_in.ejs');
    return;
};
module.exports.sign_up=function(req,res){
    
    res.render('sign_up.ejs');
    return;
};
module.exports.create_profile=function(req,res){

   if(req.body.password!=req.body.confirm_password)
   {
       console.log("Password and Confirm Password are different");
       return;
   }
   else
   {
       User.findOne({email:req.body.email},function(err,user){
           if(!user)
           {
            User.create(req.body,function(err,user){
                if(err)
                {
                    console.log("Error in creating User");
                    
                    return res.redirect('back');
                }
                else
                {
                    res.render('sign_in');
                    return;
                }
                
            })
           }
           else
           {
            res.render('sign_in');
            return;
               
           }
       })
   }


};