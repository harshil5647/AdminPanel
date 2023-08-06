const Movie = require('../models/movie');

module.exports.showmovie = (req, res) => {
    Movie.find({}).then((response) => {
        return res.render('movieD', {
            title: "hi"
        });
    }).catch(err => {
        console.log(err);
    })
}

module.exports.insertMovie = (req, res) => {
    var imgpath = '';
    if (req.file) {     
        imgpath = Movie.moviepath + '/' + req.file.filename;
        req.body.poster = imgpath;
    }

    Movie.create(req.body).then((data) => {
        return res.redirect('/');
    }).catch(err => {
        console.log(err);
    })
}

module.exports.view_all = (req, res) => {
    Movie.find({}).then(view => {
        return res.render('view_all', {
            Data: view
        });
    }).catch(err => {
        console.log(err);
    })
}

// module.exports.viewfullDetail = (req,res)=>{
//     Movie.find({}).then(viewDetail=>{
//         return res.render('viewfullDetail',{
//             movieData : viewDetail
//         });
//     }).catch(err=>{
//         console.log(err);
//     })
// }

module.exports.viewAllDetail = (req, res) => {
    Movie.findById(req.params.id).then((record) => {
        return res.render('viewfullDetail', {
            movieData: record
        })
    }).catch(err => {
        console.log(err);
    })
}

module.exports.addMovie = (req, res) => {
    Movie.find({}).then(add => {
        return res.redirect('/');
    }).catch(err => {
        console.log(err);
    })
}