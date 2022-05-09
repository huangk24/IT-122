import http from 'http';
import fs from 'fs';
//import * as cars from './data.js';
import { Car } from './Cars.js';
import { parse } from "querystring";
import express from 'express';

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded()); //Parse URL-encoded bodies
// set the view engine to ejs
app.set('view engine', 'ejs');

// send static file as response
//app.get('/', (req,res) => {
 //   res.type('text/html');
 //   res.render('home', {names : cars.getAll()});
    //res.sendFile('home.html');
//});

app.get('/', (req, res, next) => {  
    Car.find({}).lean()
        .then((cars) => {
        // respond to browser only after db query completes
        res.render('home', { cars });
        })
        .catch(err => next(err));
});

//app.get('/detail', (req,res) => {
 //   res.type('text/html');
 //   let carname = req.query.name;   
 //   res.render("detail", {car : cars.getItem(carname)});
    //res.render("Detail for " + req.query.name);
//});

//app.post('/detail', (req,res) => {
  //  res.type('text/html');
  //  console.log(req.body);
  // res.end("Detail for " + req.body.name);
//});

app.get('/detail', (req,res,next) => {
    // db query can use request parameters
    Car.findOne({ title:req.query.title }).lean()
        .then((car) => {
            res.render('detail', {result: car} );
        })
        .catch(err => next(err));
});
   
// send plain text response
app.get('/about', (req,res) => {
    res.type('text/plain');
    res.send('About page');
});
   
// define 404 handler
app.use((req,res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
});

app.listen(app.get('port'), () => {
    console.log('Express started');
});