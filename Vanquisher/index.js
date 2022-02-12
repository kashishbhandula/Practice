const port=4000;

const Http =require('http');

const Fs=require('fs');

const app=Http.createServer(requestHandler);



function requestHandler(req,res){

    res.writeHead(200,{'content':'text/html'});
    Fs.readFile('./View/Home.ejs',function(err,data){
        if(err)
        {
            console.log("Error in reading the file")
        }
        res.end(data);
    });
    //res.end("<h1>Hello Everyone</h1>")
}

app.listen(port,function(err)
{
    if(err)
    {
        console.log(`Server is not listening on the port ${port}`);
    }
    else
    {
        console.log(`Server is listening on the port ${port}`);
        
    }
})