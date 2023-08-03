const express = require('express');
const app = express();
const data = require('../data.json');


app.get('/api', (req, res) => {
    res.send(data);
  });

  app.get('/api/all', (req, res) => {
    res.send(data);
  });

  app.get('/api/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomPlayer = data[randomIndex];
    res.send(randomPlayer);
  });


  app.get('/api/:id', (req, res) => {
    const playerId = req.params.id;
    const player = data.find((item) => item.id === parseInt(playerId));
    
  })
  
app.listen(3000, ()=>{
    console.log('server running');
});