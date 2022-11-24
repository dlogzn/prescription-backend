const express = require('express');
const UserRouter = require('./routes/user');
const app = express();

app.use('/user', UserRouter);

app.get('/', (req, res) => {
    res.send('Home');
});

app.listen(5000, ()=>{
    console.log('Server Started');
});