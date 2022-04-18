// const http = require("http");
import http from 'http';
// const fs = require("fs");
import fs from 'fs';
import * as cars from './data.js';
import { parse } from "querystring";

http.createServer((req,res) => {
    var path = req.url.toLowerCase();
    switch(path) {
        case '/':
            fs.readFile("home.html", (err, data) => {
                if (err) return console.error(err);
                   res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(JSON.stringify(cars.getAll));
            });
            break;
        case '/about':
            fs.readFile("about.html", (err, data) => {
                if (err) return console.error(err);
                   res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data.toString());
            });
           break;
        case '/detail':
            let url = req.url.split("?"); 
            let query = parse(url[1]);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(console.log(cars.getItem(query)));
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not found');
            break;
    }
}).listen(process.env.PORT || 3000);