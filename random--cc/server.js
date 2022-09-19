const express = require('express');
const app = express();

const router = require('express').Router();

const {dataSource} = require('/home/tectoro/Desktop/random--cc/database.js');

const cors = require('cors');

require('dotenv').config();

const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended:true }));
app.use(bodyparser.json());



async function run(){
    try
    {
        await dataSource.initialize();
        console.log('DataSource initialized');
        app.use('/',router);
        app.listen(process.env.port, ()=>
        { 
            console.log(`server listening on port ${process.env.port}`)
        });

    }
    catch(error)
    {
        console.log(error.message);
    }
    
}
run();
