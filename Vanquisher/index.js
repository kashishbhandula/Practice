const port=4000;

const Http =require('http');

const app=Http.createServer(requestHandler);

function requestHandler(req,res){

    res.end("<h1>Hello Everyone</h1>")
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