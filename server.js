console.log('May Node be with you')

const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(bodyParser.json())
// MongoClient.connect("mongodb://localhost:27017/newDB", (err, database) => {
//   // ... start the server
// })
var db

app.get('/', (req, res) => {
  //res.sendFile(__dirname + '/index.html')
  //var cursor = db.collection('newDB').find()
// db.collection('newDB').find().toArray(function(err, results) {
//   console.log(results)
//   // send HTML file populated with quotes here
// })
  db.collection('newDB').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {newDB: result})
  })
})


app.post('/student', (req, res) => {
  db.collection('newDB').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

app.put('/update', (req, res) => {
  db.collection('newDB')
  .findOneAndUpdate({name: 'qwerty'}, {
    $set: {
      name: req.body.name,
      surname: req.body.surname
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.delete('/delete', (req, res) => {
  db.collections('newDB').findOneAndDelete(
  query,
  options,
  callback
)
})


MongoClient.connect("mongodb://localhost:27017/newDB", (err, client) => {
  if (err) return console.log(err)
  db = client.db('newDB') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})