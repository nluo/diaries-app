/**
 * This is just a dummy server to facilidate our React SPA examples.
 * For a more professional setup of Express, see...
 * http://expressjs.com/en/starter/generator.html
 */

import * as express from 'express'
const app = express()
const data = require('../data/db.json')
const getRequestData = require('request-data')

app.use(function(req: express.Request, res: express.Response, next) {
  var allowedOrigins = ['http://127.0.0.1:3333', 'http://localhost:3333', 'http://127.0.0.1:8080', 'http://localhost:8080'];
  var origin = (req.headers as any).origin
  if(allowedOrigins.indexOf(origin) > -1){
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  return next();
})

app.use(getRequestData((req, res, next, data) => {
    console.log('the data is ', data)
    if (data) {
        req.body = data
    }
    return next()
}))

app.get('/friends', function (request, response) {
    let friends = data.users
    console.log('friends is ', friends)
    response.json(friends)
})

app.get('/diaryentries/', function (request, response) {
    let diaryEntries = data.diaries
    response.json(diaryEntries)
})

app.get('/diaryentries/', function (request, response) {
    let diaryEntries = data.diaries
    response.json(diaryEntries)
})

app.post('/diaryentries/', function (request, response) {
    console.log('diary post is ', request.body)
    response.json(request.body)
})

/**
 * Start Server
 */


const port = 8000
app.listen(port);

console.log('Serving: localhost:' + port);
