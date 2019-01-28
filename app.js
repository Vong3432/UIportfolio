var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator= require('express-validator');
var app = express();
/*
var logger = function(req,res,next){
    console.log('logging...');
    next();
}

app.use(logger);*/

// View engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//set static path
app.use(express.static(path.join(__dirname,'public')));

//global vars
app.use(function(req,res,next){
    res.locals.errors = null;
    next();
});

var users= [
    {
        id:1,
        first_name:'John',
        last_name:'Doe',
        email:'john@gmail.com'
    },
    {
        id:2,
        first_name:'Steve',
        last_name:'Job',
        email:'steve@gmail.com'
    },
    {
        id:3,
        first_name:'Ali',
        last_name:'Doe',
        email:'Ali@gmail.com'
    },
]

app.get('/',function(req,res){    
    res.render('index',{
        title : 'Shopify Customers',
        users: users
    });
});

//Express validator
app.use(expressValidator());

app.post('/users/add',function(req,res){

    req.checkBody('first_name','First Name is Required').notEmpty();
    req.checkBody('last_name','Last Name is Required').notEmpty();
    req.checkBody('email','Email is Required').notEmpty();

    errors = req.validationErrors();

    if(errors){
        res.render('index',{
            title:'Customers',
            users:users,
            errors:errors
        })
    }else{    
        var newUser = {
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
        }
        console.log("success");
    }
    
})

app.listen(3000, function(){
    console.log('Server started on port 3000...');
})
