const express = require('express');

const app = express();

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
  res.send('about page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Hello this failed!'
  });
});

app.listen(3000);