const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const mysql = require('mysql');
const myConnection = require('express-myconnection');

//importando rutas
const tareasRoutes = require('./routes/tareas');
const { urlencoded } = require('express');

//settings
app.set('port', process.env.PORT || 1337)
app.set('view engine', 'ejs');
app.set('views', path.join(_dirname,'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user: 'root',
    password: '12345',
    port: 3306,
    database: 'postulacionmasiv',
},'single'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/',tareasRoutes);

app.listen(app.get('port'), () =>{
    console.log('Server on port 1337');
});