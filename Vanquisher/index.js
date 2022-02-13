const port=4000;

const Express=require('express');

const app=Express();

app.get('/',function(req,res){

    res.end("<h1>Hello</h1>")
})
app.listen(port,function(err){
    if(err){console.log(`Server in not listening on the port ${port}`);}
    else console.log(`Server in listening on the port ${port}`);
})

