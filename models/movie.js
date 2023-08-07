const mongoose = require('mongoose');

const multer = require('multer');

const Movie_Path = '/uploads';

const path = require('path');

// wskxkx
const movieSchema = mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    budget :{
        type : Number,
        required : true
    },
    genre :{
        type : Array,
        required : true
    },
    director :{
        type : String,
        required : true
    },
    plots :{
        type : String,
        required : true
    },
    zone :{
        type : String,
        required : true
    },
    hero :{
        type : String,
        required : true
    },
    heroine :{
        type : String,
        required : true
    },
    rating :{
        type : String,
        required : true
    },
    poster :{
        type : String,
        required : true
    }
})

const posterstorage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,path.join(__dirname,'..',Movie_Path));
    },
    filename : (req,file,cb)=>{
        cb(null,file.fieldname+'-'+Date.now())
    }
})

movieSchema.statics.uploadedmovie = multer({storage : posterstorage}).single('poster');
movieSchema.statics.moviepath = Movie_Path;

const movie = mongoose.model('movie',movieSchema);

module.exports = movie;