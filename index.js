const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const {mongoUrl} = require('./keys');
const items = require('./router/api/items');
const path = require('path');

require('./models/Item');
// const authRouter = require('./router/authRouter');
app.use(bodyparser.json());
// app.use(authRouter);

mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
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

app.use('/api/item',items);

app.listen(8858,()=>{
    console.log("server running 8858");
})