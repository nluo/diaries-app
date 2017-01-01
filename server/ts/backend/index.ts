/**
 * This is just a dummy server to facilidate our React SPA examples.
 * For a more professional setup of Express, see...
 * http://expressjs.com/en/starter/generator.html
 */

import * as express from 'express'
const app = express()
const data = require('../../data/users.json')

app.use(function(req, res, next) {
  var allowedOrigins = ['http://127.0.0.1:3333', 'http://localhost:3333'];
  var origin = req.headers.origin;
  if(allowedOrigins.indexOf(origin) > -1){
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  return next();
});

app.get('/friends', function (request, response) {
    let friends = data.users
    console.log('friends is ', friends)
    response.json(friends)
})

/**
 * Start Server
 */


const port = 8000
app.listen(port);

console.log('Serving: localhost:' + port);
