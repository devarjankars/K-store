const express=require('express');
const app= express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const router=require('./route/userRoute');
const sequelize= require('./utils/database');
const store= require('./models/store')
const path= require('path')

app.use('/post',router);
app.use('/get', router);
app.use(express.static(path.join(__dirname,'views')))

sequelize.sync()
.then((res)=>{
    console.log(`succesfully lode database`);
    app.listen(3000);
})
.catch((err)=>{console.log(err);})

