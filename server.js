const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/',(req, res) => {
 //res.send('<h1>Hello express!<h1>');
 res.send({
   name: 'Marlena',
   likes: [
     'Biking',
     'Pianos',
     'Motocross'
   ]
 });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'about Page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Homepage',
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'hello guys'
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Hello this failed!'
  });
});

app.listen(3000, () => {
  console.log('Server is up to port 3000.');
});
