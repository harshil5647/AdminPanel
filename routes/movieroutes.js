const express = require('express');

const routes = express.Router();

const movieco = require('../controller/moviecon');

const Movie = require('../models/movie');

routes.get('/', movieco.showmovie);

routes.post('/insertMovie', Movie.uploadedmovie, movieco.insertMovie);

routes.get('/view_all', movieco.view_all);

routes.get('/viewAllDetail/:id', movieco.viewAllDetail);

routes.get('/addMovie', movieco.addMovie);


module.exports = routes;