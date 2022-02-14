const port=5000;

const Express=require('express');
const ExpressLayout=require('express-ejs-layouts');

const app=Express();

app.use(Express.urlencoded());
app.use(ExpressLayout);
app.set('view engine','ejs');
app.set('views','./View')

app.use(Express.static('./Assets'));
app.set('layout extraStyles',true);
app.set('layout extraScripts',true);

app.use('/',require('./Routers/index.js'));

app.listen(port,function(err){
    if(err){console.log(`Server in not listening on the port ${port}`);}
    else console.log(`Server in listening on the port ${port}`);
})

