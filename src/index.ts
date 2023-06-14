import express from 'express';
import mongoose from "mongoose";

const app = express();

mongoose.connect('mongodb://mongo/ecommerce_db');

var db = mongoose.connection

db.on('error', function(err){
  console.log('connection error', err)
});

db.once('open', function(){
  console.log('Connection to DB successful')
});

app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Home');
})

app.listen(PORT);