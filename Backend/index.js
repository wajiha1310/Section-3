const express =require('express');
const UserRouter=require("./routers/userRouter");

const port=5000;

// initialize express app

const app=express();

// middleware
app.use(express.json());
app.use('/user',UserRouter);

app.get('/',(req,res)=>{
    res.send('Response from express server');
});    
app.get('/add',(req,res)=>{
        res.send('Response from add route');
});
// getall
// getbyid
// update
// delete
app.get('/getall',(req,res)=>{
    res.send('Response from getall route');
});
app.get('/getbyid',(req,res)=>{
    res.send('Response from getbyid route');
});
app.get('/update',(req,res)=>{
    res.send('Response from update route');
});

app.listen(port,()=>{console.log('server started');});