// var  mongoose = require('mongoose');

// var express = require('express')



// mongoose.connect("mongodb://localhost/ahmedDB",{

//     useNewUrlParser: true,
//     useUnifiedTopology: true,

// });

// const con = mongoose.connection

// con.on('open',function(){

//     console.log('connected ...')
    
    
//     })


  const mongoose = require('mongoose')
  
  var express = require('express')
  const url = "mongodb+srv://ahmedezar:06990737@cluster0.pm9ta.mongodb.net/?retryWrites=true&w=majority";
  
  const connectionParams={
      useNewUrlParser: true,
      useUnifiedTopology: true 
  }
  mongoose.connect(url,connectionParams)
      .then( () => {
          console.log('Connected to the database ')
      })
      .catch( (err) => {
          console.error(`Error connecting to the database. n${err}`);
      })


      const URI = process.env.MONGODB_URL;

