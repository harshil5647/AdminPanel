const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/Movie');

const db = mongoose.connection;

db.once('open',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('Database is Connected');
})

module.exports = db;