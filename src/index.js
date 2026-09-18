const express = require('express');
const {ServerConfig} = require('./config/index');
const apiRoutes = require('./routes/index');

const app = express();


app.use('/api',apiRoutes);
 

app.listen(ServerConfig.PORT ,()=>{
    console.log("server is running on port ",ServerConfig);
})
