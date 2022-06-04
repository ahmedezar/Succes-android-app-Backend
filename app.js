var express = require('express');

var path = require('path');

var mongoose = require("mongoose")


var db = require('./db')


var userRouter = require('./routes/user.route');

var productRouter = require('./routes/product.route');

var newsRouter = require('./routes/news.route');

var trainingRouter = require('./routes/training.route');


var eventRouter = require('./routes/event.route')

var postRouter = require('./routes/post.route')


var app = express();


app.use(express.json())



app.use('/img', express.static('uploads/images')); 


app.use('/',userRouter)

app.use('/news',newsRouter)


app.use('/training',trainingRouter)


app.use('/products',productRouter)

app.use('/events',eventRouter)

app.use('/posts',postRouter)




module.exports = app