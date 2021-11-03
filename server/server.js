const app=require('express')();
require('dotenv').config({path:'./config.env'});
const cors=require('cors');
const morgan=require('morgan');
const bodyParser=require('body-parser');

app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));
app.use(cors());
app.use(morgan('dev'));

require('./db/conn');
const port=process.env.PORT || 9000;

app.use('/api',require('./routes/pubRou'));

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})