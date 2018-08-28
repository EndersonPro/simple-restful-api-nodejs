const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');


/* Model User */
const User = require('./api/models/Model');

const port = 3000 || process.env.PORT;

mongoose.Promise = global.Promise; 
mongoose.connect("mongodb://localhost:27017/UserBD",  { useNewUrlParser: true })
    .then(()=>console.log("------------------- Base de datos conectada ------------------------"))
    .catch((err)=>console.log(err));


app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const route = require('./api/routes/Routes');
route(app);

app.listen(port,()=>{
    console.log("------------------ Servidor en puerto ", port, " -----------------------");
})

