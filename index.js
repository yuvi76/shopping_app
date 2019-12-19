const express = require('express');
const mongoose = require('mongoose');
const app = express();
const config = require('config');
const path = require('path');

require('./models/Item');
// const authRouter = require('./router/authRouter');
app.use(express.json());
// app.use(authRouter);

mongoose.connect(config.get('mongoURI'),{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
});

mongoose.connection.on('connected',()=>{
    console.log("mongo connected");    
});

mongoose.connection.on('error',(err)=>{
    console.log("this is error",err);    
});

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.use('/api/items',require('./router/api/items'));
app.use('/api/users',require('./router/api/users'));
app.use('/api/auth',require('./router/api/auth'));

app.listen(process.env.PORT || 5000,()=>{
    console.log("server running");
});