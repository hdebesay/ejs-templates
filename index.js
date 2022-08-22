const express = require('express')
const app = express()
const port = 3000
var data = require('./data/test.json');

app.set('view engine', 'ejs')

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));
      

app.get('/', (req, res) => {
  var title = 'My Top 3 Favorite movies';
  var heading = 'My Love for movies';
  res.render('pages/index', {
    'title': title,
    'heading': heading
  });
})

app.get('/about', (req, res) => {
  var title = 'The shawshank redemption';
  var heading = "Number 1 ";
  res.render('pages/about', {
    'title': title,
    'heading': heading
  });
})

app.get('/link', (req, res) => {
  var title = 'The God Father';
  var heading = "Number 2";
  res.render('pages/link', {
    'title': title,
    'heading': heading,
    'users': data
  });
})

app.get('/users', (req, res) => {
  var title = 'The Dark Knight';
  var heading = "Number 3";
  res.render('pages/users', {
    'title': title,
    'heading': heading
  });
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(data)
})